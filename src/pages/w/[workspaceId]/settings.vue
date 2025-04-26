<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

import {
	type UpdateWorkspaceDto,
	WorkspaceService
} from '~/modules/workspace/api/workspace.service'
import { ROUTES } from '~/shared/config/routes'
import { useAppStore } from '~/shared/stores/AppStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const schema = z.object({
	title: z.string(),
	description: z.string()
})

useSyncCurrentWorkspace()

type Schema = z.infer<typeof schema>

definePageMeta({
	layout: 'workspace'
})

const appStore = useAppStore()
const workspaceStore = useWorkspaceStore()

const state = reactive<Schema>({
	title: appStore.currentWorkspace?.title || '',
	description: appStore.currentWorkspace?.description || ''
})

watch(
	() => appStore.currentWorkspace,
	newVal => {
		state.title = newVal?.title || ''
		state.description = newVal?.description || ''
	}
)
const toast = useToast()
const router = useRouter()

const { mutate, isLoading } = useMutation({
	mutationFn: (data: Partial<UpdateWorkspaceDto>) =>
		WorkspaceService.updateWorkspace({
			...data,
			workbenchId: appStore.currentWorkspace!.id
		}),
	onSuccess: () => {
		toast.add({
			description: 'Рабочее пространство обновлено',
			color: 'success'
		})
		workspaceStore.getWorkspaces()
	},
	onError: error => {
		toast.add({
			description: error.message,
			color: 'error'
		})
	}
})

const { mutate: deleteWorkspace, isLoading: isDeletingLoading } = useMutation({
	mutationFn: (id: string) => WorkspaceService.deleteWorkspace(id),
	onSuccess: () => {
		toast.add({
			description: 'Рабочее пространство удалено',
			color: 'success'
		})
	},
	onError: error => {
		toast.add({
			description: error.message,
			color: 'error'
		})
	}
})
async function onSubmit(event: FormSubmitEvent<Schema>) {
	mutate(event.data)
}

async function onDelete() {
	await deleteWorkspace(appStore.currentWorkspace!.id)
	workspaceStore.getWorkspaces()
	appStore.setCurrentWorkspace(workspaceStore.workspaces[0])
	router.push(ROUTES.WORKSPACE(appStore.currentWorkspace!.id).BASE)
}
</script>

<template>
	<div>
		<div
			class="flex flex-col bg-root-950 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
		>
			<div class="flex">
				<span class="text-2xl"> Основные настройки </span>
			</div>
			<div class="flex flex-col gap-4 text-xl mt-4">
				<UForm
					:schema="schema"
					:state="state"
					class="space-y-4 flex flex-col"
					@submit="onSubmit"
				>
					<UFormField label="Название рабочего пространства" name="title">
						<UInput
							v-model="state.title"
							placeholder="Введите название"
							variant="soft"
							color="alt"
							size="xl"
							class="w-full"
						/>
					</UFormField>

					<UFormField label="Описание" name="description">
						<UInput
							v-model="state.description"
							type="password "
							placeholder="Введите описание"
							variant="soft"
							color="alt"
							size="xl"
							class="w-full"
						/>
					</UFormField>

					<UButton
						class="flex items-center self-end"
						color="primary"
						type="submit"
						size="xl"
						:loading="isLoading"
					>
						Сохранить
					</UButton>
				</UForm>
			</div>
		</div>
		<div
			class="flex flex-col bg-root-950 h-auto rounded-xl w-150 py-8 px-5 my-5 ml-5"
		>
			<div class="flex mx-2 justify-between items-center">
				<span class="text-2xl"> Удаление рабочего пространства </span>
				<ApproveModal
					title="Вы уверены что хотите удалить рабочее пространство?"
					description="Это действие нельзя отменить, все данные будут удалены"
					:buttons-text="['Отмена', 'Удалить']"
					@approve="onDelete"
				>
					<UButton
						class="flex items-center py-2.5 px-7"
						color="primary"
						size="xl"
						:loading="isDeletingLoading"
					>
						Удалить
					</UButton>
				</ApproveModal>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

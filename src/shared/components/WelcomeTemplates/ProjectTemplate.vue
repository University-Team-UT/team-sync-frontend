<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

import { ProjectService } from '~/modules/projects/api/project.service'
import {
	type CreateWorkspaceDto,
	WorkspaceService
} from '~/modules/workspace/api/workspace.service'
import { useAppStore } from '~/shared/stores/AppStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const schema = z.object({
	title: z.string()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
	title: ''
})

const toast = useToast()
const appStore = useAppStore()

const { mutate, isLoading } = useMutation({
	mutationFn: (data: CreateWorkspaceDto) =>
		ProjectService.createProject(appStore.currentWorkspace!.id, data.title),
	onSuccess: () => {
		toast.add({
			description: 'проекут создано',
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
	await mutate(event.data)
	emit('nextStep')
	state.title = ''
}

const emit = defineEmits(['nextStep'])
</script>

<template>
	<div
		class="flex flex-col h-130 bg-root-800 min-w-2/5 z-1000 p-10 rounded-xl items-center justify-center gap-10 relative"
	>
		<span class="text-2xl absolute top-8 text-center"
			>Настрой Team<span class="text-primary-400 font-bold">Sync</span></span
		>
		<span class="text-xl top-18"
			>Создайте свое первое рабочее <br />
			пространство - место где соберешь все свои проекты</span
		>
		<UForm
			:schema="schema"
			:state="state"
			class="flex flex-col w-6/7 space-y-4"
			@submit="onSubmit"
		>
			<UFormField label="Название рабочего пространства" name="email">
				<UInput
					v-model="state.title"
					placeholder="Введите название"
					variant="subtle"
					color="primary"
					size="xl"
					class="w-full"
					:ui="{
						base: 'resize-none bg-root-700 focus:bg-root-600  hover:bg-root-700'
					}"
				/>
			</UFormField>

			<div class="flex items-center justify-center gap-8">
				<UButton
					:loading="isLoading"
					label="Продолжить"
					color="primary"
					size="lg"
					variant="solid"
					type="submit"
					class="px-8 text-xl font-bold absolute bottom-8"
				/>
			</div>
		</UForm>
	</div>
</template>

<style scoped></style>

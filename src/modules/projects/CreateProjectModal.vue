<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

import { ProjectService } from './api/project.service'
import { useAppStore } from '~/shared/stores/AppStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const open = ref(false)

const schema = z.object({
	title: z.string()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
	title: ''
})

const toast = useToast()
const wStore = useWorkspaceStore()
const appStore = useAppStore()

const { mutate, isLoading } = useMutation({
	mutationFn: (title: string) =>
		ProjectService.createProject(appStore.currentWorkspace!.id, title),
	onSuccess: () => {
		toast.add({
			description: 'Проект создан',
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
	await mutate(event.data.title)
	open.value = false
	state.title = ''
	wStore.getProjects()
}
</script>
<template>
	<UModal
		v-model:open="open"
		title="Новый проект"
		:close="{
			color: 'primary',
			variant: 'outline',
			class: 'rounded-full'
		}"
	>
		<slot></slot>
		<template #header>
			<div class="flex justify-between w-full items-center">
				<span class="text-2xl">Новый проект</span>
				<UIcon name="lucide:x" class="size-5" @click="open = false" />
			</div>
		</template>
		<template #body>
			<UForm
				:schema="schema"
				:state="state"
				class="space-y-4 flex flex-col"
				@submit="onSubmit"
			>
				<UFormField label="Название" name="title">
					<UInput
						v-model="state.title"
						placeholder="Введите название проекта"
						variant="soft"
						color="alt"
						size="xl"
						class="w-full"
					/>
				</UFormField>

				<UButton type="submit" class="ml-auto self-end" :loading="isLoading">
					Создать
				</UButton>
			</UForm>
		</template>
	</UModal>
</template>

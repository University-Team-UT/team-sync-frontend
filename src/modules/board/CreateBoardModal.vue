<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

import { BoardService } from './api/board.service'
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
		BoardService.createBoard(appStore.currentProject!.id, title),
	onSuccess: () => {
		toast.add({
			description: 'Доска создана',
			color: 'success'
		})
		wStore.getBoards()
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
	<UModal v-model:open="open" title="Новый проект">
		<slot></slot>
		<template #title>
			<span class="text-2xl">Создать доску</span>
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
						placeholder="Введите название новой доски"
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

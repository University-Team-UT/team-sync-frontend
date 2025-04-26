<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

import {
	type CreateWorkspaceDto,
	WorkspaceService
} from './api/workspace.service'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const open = ref(false)

const schema = z.object({
	title: z.string(),
	description: z.string()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
	title: '',
	description: ''
})

const toast = useToast()
const wStore = useWorkspaceStore()

const { mutate, isLoading } = useMutation({
	mutationFn: (data: CreateWorkspaceDto) =>
		WorkspaceService.createWorkspace(data),
	onSuccess: () => {
		toast.add({
			description: 'Рабочее пространство создано',
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
	open.value = false
	state.title = ''
	state.description = ''
	wStore.getWorkspaces()
}
</script>
<template>
	<UModal
		v-model:open="open"
		title="Новое рабочее пространство"
		:close="{
			color: 'primary',
			variant: 'outline',
			class: 'rounded-full'
		}"
	>
		<UButton
			label="Создать пространство"
			color="primary"
			class="flex justify-center text-white p-2 w-full m-5"
		></UButton>

		<template #header>
			<div class="flex justify-between w-full items-center">
				<span class="text-2xl">Новое рабочее пространство</span>
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
				<UFormField label="Email" name="email">
					<UInput
						v-model="state.title"
						placeholder="Введите название"
						variant="soft"
						color="alt"
						size="xl"
						class="w-full"
					/>
				</UFormField>

				<UFormField label="Desc" name="password">
					<UTextarea
						v-model="state.description"
						placeholder="Введите описание"
						variant="soft"
						:rows="4"
						size="xl"
						color="alt"
						autoresize
						class="w-full"
						:maxrows="4"
						:ui="{
							base: 'resize-none'
						}"
					/>
				</UFormField>

				<UButton type="submit" class="ml-auto self-end" :loading="isLoading">
					Создать пространство
				</UButton>
			</UForm>
		</template>
	</UModal>
</template>

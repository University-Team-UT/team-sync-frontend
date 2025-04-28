<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

import { ProjectService } from './api/project.service'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const open = ref(false)

const schema = z.object({
	title: z.string().nonempty()
})

type Schema = z.output<typeof schema>
const props = defineProps<{ title: string; id: string }>()

const state = reactive<Partial<Schema>>({
	title: props.title
})

const toast = useToast()
const wStore = useWorkspaceStore()

const { mutate, isLoading } = useMutation({
	mutationFn: (title: string) => ProjectService.updateProject(props.id, title),
	onSuccess: () => {
		toast.add({
			description: 'Проект обновлен',
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
	<UModal v-model:open="open" title="Переименование проекта">
		<slot></slot>
		<template #title>
			<span class="text-2xl">Переименование проекта</span>
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

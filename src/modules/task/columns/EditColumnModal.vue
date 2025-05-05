<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

import { ColumnService } from '../api/column.service'
import { useTaskStore } from '../TaskStore'

const open = ref(false)

const schema = z.object({
	title: z.string(),
	color: z.string()
})

type Schema = z.output<typeof schema>

const props = defineProps<{ title: string; id: string; color: string }>()

const state = reactive<Partial<Schema>>({
	title: props.title,
	color: props.color
})

const toast = useToast()
const taskStore = useTaskStore()

const { mutate, isLoading } = useMutation({
	mutationFn: (dto: Schema) =>
		ColumnService.updateColumn(props.id, dto.title, dto.color),
	onSuccess: () => {
		toast.add({
			description: 'Колонка обновлена',
			color: 'success'
		})
		taskStore.getColumns()
		open.value = false
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
	state.color = ''
}
</script>
<template>
	<UModal v-model:open="open" title="Новый проект">
		<slot></slot>
		<template #title>
			<span class="text-2xl">Редактировать колонку</span>
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
						variant="soft"
						color="alt"
						size="xl"
						class="w-full"
					/>
				</UFormField>
				<UFormField label="Цвет" name="color">
					<UColorPicker
						v-model="state.color"
						class="p-2"
						:disabled="isLoading"
					/>
				</UFormField>

				<UButton type="submit" class="ml-auto self-end" :loading="isLoading">
					Обновить
				</UButton>
			</UForm>
		</template>
	</UModal>
</template>

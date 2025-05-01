<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

import { ColumnService } from '../api/column.service'
import { useTaskStore } from '../TaskStore'

import EditColumnModal from './EditColumnModal.vue'

defineProps<{ id: string; title: string; color: string }>()

const overlay = useOverlay()
const modal = overlay.create(EditColumnModal)

const toast = useToast()
const taskStore = useTaskStore()
const { mutate } = useMutation({
	mutationFn: (id: string) => ColumnService.deleteColumn(id),
	onSuccess() {
		toast.add({
			title: 'Удаление прошло успешно',
			color: 'success'
		})
		taskStore.getColumns()
	},
	onError(err) {
		toast.add({
			title: err.message,
			color: 'error'
		})
	}
})

const boardItems = ref<DropdownMenuItem[]>([
	{
		label: 'Переименовать',
		icon: 'lucide:square-pen',
		slot: 'edit'
	},
	{
		label: 'Удалить',
		icon: 'lucide:trash-2',
		slot: 'delete'
	}
])
</script>

<template>
	<UDropdownMenu
		:items="boardItems"
		:content="{
			align: 'end',
			side: 'bottom',
			sideOffset: 12
		}"
		:ui="{
			content: 'flex pl-1 bg-root-950',
			item: 'opacity-70 hover:opacity-100 cursor-pointer'
		}"
	>
		<template #edit>
			<div
				icon="lucide:square-pen"
				class="w-full h-full"
				@click="modal.open({ id, title, color })"
			>
				Переименовать
			</div>
		</template>
		<template #delete>
			<div icon="lucide:square-pen" class="w-full h-full" @click="mutate(id)">
				del
			</div>
		</template>

		<slot></slot>
	</UDropdownMenu>
</template>

<style scoped></style>

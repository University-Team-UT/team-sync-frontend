<script setup lang="ts">
import { TaskService } from '../api/task.service'
import { TaskKey } from '../lib/keys'
import { useTaskStore } from '../TaskStore'

const injected = inject(TaskKey)
const toast = useToast()
const taskStore = useTaskStore()

const { mutate } = useMutation({
	mutationFn: () => TaskService.deleteTask(injected!.value.id),
	onSuccess: () => {
		toast.add({
			title: 'Задача удалена',
			color: 'success'
		})
		taskStore.getColumns()
	},
	onError: error => {
		toast.add({
			title: 'Ошибка при удалении задачи',
			color: 'error',
			description: error.message
		})
	}
})
</script>

<template>
	<UPopover
		:ui="{
			content: 'bg-root-900'
		}"
		:content="{
			align: 'end',
			side: 'bottom',
			sideOffset: 10
		}"
	>
		<slot></slot>

		<template #content>
			<div class="flex flex-col p-2">
				<ApproveModal
					title="Удалить задачу"
					description="Это действие нельзя отменить"
					:buttons-text="['Отмена', 'Удалить']"
					@approve="mutate"
				>
					<UButton variant="ghost" icon="lucide:trash" label="Удалить" />
				</ApproveModal>
			</div>
		</template>
	</UPopover>
</template>

<style scoped></style>

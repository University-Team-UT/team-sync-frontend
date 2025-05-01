<script setup lang="ts">
import { TaskService } from '../../api/task.service'
import { TaskKey } from '../../lib/keys'
import { useTaskStore } from '../../TaskStore'

const isFocused = ref(false)
const title = ref('')

const injected = inject(TaskKey)
const toast = useToast()
const taskStore = useTaskStore()

const { mutate, isLoading } = useMutation({
	mutationFn: () =>
		TaskService.addSubtask({ taskId: injected!.value.id, title: title.value }),
	onSuccess: () => {
		toast.add({
			title: 'Подзадача создана',
			color: 'success'
		})

		title.value = ''
		isFocused.value = false
		taskStore.getColumns()
	},
	onError: error => {
		toast.add({
			title: 'Ошибка при создании подзадачи',
			color: 'error',
			description: error.message
		})
	}
})
</script>

<template>
	<div class="p-1 rounded-lg transition-colors">
		<UInput
			v-model="title"
			icon="lucide:circle-fading-plus"
			variant="ghost"
			placeholder="Добавить подзадачу"
			size="sm"
			class="w-full"
			@focus="isFocused = true"
			@blur="isFocused = false"
			@keydown.enter="isFocused === true && mutate()"
		/>
		<div v-if="isFocused" class="mt-1">
			<UKbd value="Enter" />
			<span class="text-xs">to createe</span>
		</div>
	</div>
</template>

<style scoped></style>

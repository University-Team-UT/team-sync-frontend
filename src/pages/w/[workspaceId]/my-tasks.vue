<script setup lang="ts">
import { TaskService } from '~/modules/task/api/task.service'
import AppTask from '~/modules/task/AppTask.vue'
import type { ITask } from '~/modules/task/lib/types'
import TaskList from '~/modules/task/TaskList.vue'
import { useAuthStore } from '~/shared/stores/AuthStore'

const authStore = useAuthStore()

const tasks = ref<ITask[]>([])
useSyncCurrentWorkspace()

useQuery({
	queryFn: () => TaskService.getByExecutorId(authStore.userId!),
	onSuccess(data) {
		tasks.value = data.data
		console.log(tasks.value)
	},
	enabled: true
})
</script>

<template>
	<div class="p-4">
		<h1 class="text-2xl font-bold">Мои задания</h1>
		<div class="grid grid-cols-6 gap-4">
			<TaskList :tasks="tasks" />
		</div>
	</div>
</template>

<style scoped></style>

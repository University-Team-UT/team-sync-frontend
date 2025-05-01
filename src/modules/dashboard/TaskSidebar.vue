<script setup lang="ts">
import type { ITask } from '../task/lib/types'
import AccordionSidebar from '../task/sidebar/AccordionSidebar.vue'
import BreadCrumps from '../task/sidebar/BreadCrumps.vue'
import CommentSidebar from '../task/sidebar/CommentSidebar.vue'
import SubtaskList from '../task/sidebar/subtasks/SubtaskList.vue'
import TaskInfo from '../task/sidebar/TaskInfo.vue'

defineProps<{ task: ITask }>()
</script>

<template>
	<div class="w-full max-w-180 m-4 overflow-y-auto scroll-smooth">
		<div class="flex flex-col gap-4">
			<header class="flex p-2"></header>
			<USeparator />
			<section class="flex flex-col gap-6 p-6">
				<div class="flex justify-between w-full items-center">
					<div class="flex gap-4 items-center">
						<UButton
							icon="lucide:circle"
							label="Выполнить"
							variant="outline"
							class="text-primary-400/60 bg-root-800"
						/>
					</div>
					<div class="flex gap-1 items-center">
						<div class="flex flex-col">
							<span v-if="task.executor">{{
								task.executor.user.displayName
							}}</span>

							<span>
								{{ new Date(task.createdAt).toLocaleDateString('ru-RU') }}
								{{
									new Date(task.createdAt).toLocaleTimeString('ru-RU', {
										hour: '2-digit',
										minute: '2-digit'
									})
								}}
							</span>
						</div>
					</div>
				</div>
				<span class="text-2xl">{{ task.title }}</span>
				<BreadCrumps />
				<TaskInfo />
				<USeparator />
				<!-- <TaskDescription />
				<USeparator /> -->
				<SubtaskList />
				<AccordionSidebar />
				<USeparator />
				<CommentSidebar />
			</section>
		</div>
	</div>
</template>

<style scoped></style>

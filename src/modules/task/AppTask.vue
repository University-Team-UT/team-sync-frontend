<script setup lang="ts">
import TaskSidebar from '../dashboard/TaskSidebar.vue'

import { TaskKey } from './lib/keys'
import type { ITask } from './lib/types'
import SubtaskList from './sidebar/subtasks/SubtaskList.vue'
import { TaskStatus } from '~/types/common.types'

const props = defineProps<{ task: ITask }>()

const taskRef = shallowRef(props.task)

watch(
	() => props.task,
	newTask => {
		taskRef.value = newTask
	},
	{ immediate: true, deep: true }
)

provide(TaskKey, taskRef)

const completedLength = computed(
	() => taskRef.value.subtasks.filter(t => t.isCompleted === true).length
)
</script>

<template>
	<UDrawer
		direction="right"
		:overlay="false"
		handle-only
		:ui="{
			content: 'min-w-180'
		}"
	>
		<div class="cursor-pointer">
			<div
				class="flex flex-col gap-6 cursor-pointer mt-4 bg-root-700 rounded-sm px-4 py-2"
			>
				<div class="flex flex-col gap-2 w-full">
					<div class="flex">
						{{ task.title }}
					</div>
				</div>

				<div class="flex justify-between w-full items-center">
					<span v-if="task.executor">{{ task.executor.user.displayName }}</span>

					<div class="flex gap-4 items-center">
						<span v-if="task.deadline">{{
							new Date(task.deadline).toLocaleDateString('ru-RU')
						}}</span>
						<UCheckbox
							v-if="task.status === TaskStatus.DONE"
							:ui="{ base: 'rounded-full text-white' }"
							default-value="indeterminate"
							indeterminate-icon="lucide:check"
							size="lg"
						/>
					</div>
				</div>
				<div
					v-if="task.subtasks.length > 0"
					class="flex justify-between w-full gap-4 items-center"
				>
					<UIcon name="lucide:network" class="size-5 rotate-90" />
					<div class="flex gap-4 w-full items-center">
						<UProgress
							:model-value="completedLength"
							class="flex-1"
							:ui="{
								base: 'bg-slate-200 rounded-xs',
								indicator: 'rounded-xs'
							}"
							:max="task.subtasks.length"
							color="primary"
						/>
						<span>{{ completedLength }}/{{ task.subtasks.length }}</span>
					</div>
				</div>
				<div v-if="task.subtasks.length > 0" class="flex flex-col gap-4">
					<SubtaskList is-app-task />
				</div>
			</div>
		</div>
		<template #content>
			<TaskSidebar :task="task" />
		</template>
	</UDrawer>
</template>

<style scoped></style>

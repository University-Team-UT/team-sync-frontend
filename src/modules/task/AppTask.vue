<script setup lang="ts">
import AppTag from '../workspace/tags/AppTag.vue'

import { TaskKey } from './lib/keys'
import type { ITask } from './lib/types'
import VisualSubtask from './sidebar/subtasks/VisualSubtask.vue'
import TaskSidebar from './sidebar/TaskSidebar.vue'
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
				class="flex flex-col gap-3 cursor-pointer mt-4 w-full bg-root-700 rounded-sm px-4 py-2"
			>
				<div class="w-full font-bold text-primary-300 rounded-2xl">
					{{ task.status }}
					<span v-if="task.priority">/ {{ task.priority }}</span>
				</div>

				<p>
					{{ task.title }}
				</p>

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
					v-if="task.subtasks"
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
				<div v-if="task.subtasks" class="flex flex-col">
					<VisualSubtask
						v-for="subtask in task.subtasks"
						:key="subtask.id"
						:subtask="subtask"
					/>
				</div>

				<div v-if="task.tags" class="flex gap-2 flex-wrap">
					<AppTag
						v-for="tag in task.tags"
						:key="tag.id"
						:tag="tag"
						:title="tag.title"
						:color="getTagColorByPrimary(tag.color)"
					/>
				</div>
			</div>
		</div>
		<template #content>
			<TaskSidebar :task="task" />
		</template>
	</UDrawer>
</template>

<style scoped></style>

<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'

import { TaskService } from '../api/task.service'
import { TaskKey } from '../lib/keys'
import type { ITask } from '../lib/types'
import { useTaskStore } from '../TaskStore'

import { CommentsService } from './api/comments.service'
import CommentSidebar from './comments/CommentSidebar.vue'
import EditTaskDropdown from './EditTaskDropdown.vue'
import SubtaskList from './subtasks/SubtaskList.vue'
import TaskInfo from './TaskInfo.vue'

const props = defineProps<{ task: ITask }>()
const commentsContainer = ref<HTMLElement | null>(null)
const injected = inject(TaskKey)
const taskStore = useTaskStore()

const { data: comments, fetch } = useQuery({
	queryFn: () => CommentsService.getComments(injected!.value.id),
	onSuccess: () => {},
	enabled: true
})
const onCommentCreated = async () => {
	await fetch()
	await nextTick()
	if (commentsContainer.value) {
		commentsContainer.value.scrollTop = commentsContainer.value.scrollHeight
	}
}

const title = ref(props.task.title)

const { mutate } = useMutation({
	mutationFn: (title: string) =>
		TaskService.updateTask(injected!.value.id, { title }),
	onSuccess: () => {
		taskStore.getColumns()
	}
})

watchDebounced(
	title,
	newVal => {
		mutate(newVal)
	},
	{ debounce: 500, maxWait: 1000 }
)
</script>

<template>
	<div
		ref="commentsContainer"
		class="w-full max-w-180 m-4 overflow-y-auto scroll-smooth"
	>
		<div class="flex flex-col gap-4">
			<USeparator />
			<section class="flex flex-col gap-6 p-6">
				<div class="flex justify-between w-full items-center">
					<div class="flex gap-4 items-center">
						<EditTaskDropdown>
							<UButton
								icon="lucide:ellipsis-vertical"
								variant="outline"
								class="text-primary-400/60 bg-root-800"
							/>
						</EditTaskDropdown>
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
				<UTextarea
					v-model="title"
					placeholder="Название задачи"
					variant="none"
					autoresize
					:maxrows="10"
					class="w-full rounded-sm"
					:ui="{ base: 'resize-none text-2xl' }"
				/>

				<!-- <BreadCrumps /> -->
				<TaskInfo />
				<USeparator />
				<!-- <TaskDescription />
				<USeparator /> -->
				<SubtaskList />
				<USeparator />
				<CommentSidebar
					:comments="comments?.data"
					:comments-container="commentsContainer"
					@get-comments="onCommentCreated"
				/>
			</section>
		</div>
	</div>
</template>

<style scoped>
.scroll-smooth {
	scroll-behavior: smooth;
}
</style>

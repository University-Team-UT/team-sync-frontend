<script setup lang="ts">
import { useToast } from '#imports'
import { z } from 'zod'

import { type CreateTaskDto, TaskService } from './api/task.service'
import SetExecutorPopover from './SetExecutorPopover.vue'
import SetPriorityPopover from './SetPriorityPopover.vue'
import { useTaskStore } from './TaskStore'
import { useAppStore } from '~/shared/stores/AppStore'
import type { Priority } from '~/types/common.types'

const isEditing = ref<boolean>(false)

const props = defineProps<{
	columnId: string
}>()

const schema = z.object({
	title: z.string().min(1, 'Введите название задачи'),
	executorId: z.string().optional(),
	priority: z.string().optional()
})

const state = reactive<Partial<CreateTaskDto>>({
	title: '',
	executorId: undefined,
	priority: undefined
})

const appStore = useAppStore()
const taskStore = useTaskStore()
const toast = useToast()

const onBlurTextarea = () => {
	if (state.title === '') {
		isEditing.value = false
	}
}

const { mutate, isLoading } = useMutation({
	mutationFn: () =>
		TaskService.createTask({
			projectId: appStore.currentProject!.id,
			workbenchId: appStore.currentWorkspace!.id,
			columnId: props.columnId,
			title: state.title!,
			executorId: state.executorId,
			priority: state.priority
		}),
	onSuccess: () => {
		toast.add({
			title: 'Задача создана',
			color: 'success'
		})
		state.title = ''
		state.executorId = undefined
		state.priority = undefined
		isEditing.value = false
		taskStore.getColumns()
	},
	onError: err => {
		toast.add({
			title: err.message,
			color: 'error'
		})
	}
})

const updateExecutorId = (value: string | undefined) => {
	state.executorId = value ? value : undefined
}

const updatePriority = (value: Priority | undefined) => {
	state.priority = value ? value : undefined
}
</script>

<template>
	<UForm :schema="schema" :state="state">
		<UTextarea
			v-model="state.title"
			data-swapy-no-drag
			placeholder="Добавить задачу"
			variant="none"
			:rows="1"
			autoresize
			:maxrows="5"
			class="w-full bg-root-700 rounded-sm text-primary-400 hover:bg-root-700/50 transition-colors"
			:ui="{ base: 'resize-none' }"
			@click="isEditing = true"
			@blur="onBlurTextarea"
		/>

		<div
			v-if="isEditing"
			data-swapy-no-drag
			class="w-full bg-root-700 p-1 justify-end flex rounded-sm"
			@mousedown.stop
		>
			<UTooltip text="Назначить исполнителя">
				<SetExecutorPopover @update-executor-id="updateExecutorId">
					<UButton icon="lucide:user" size="xs" variant="soft" />
				</SetExecutorPopover>
			</UTooltip>
			<UTooltip text="Приоритет">
				<SetPriorityPopover @update-executor-id="updatePriority">
					<UButton icon="lucide:signal-high" size="xs" variant="soft" />
				</SetPriorityPopover>
			</UTooltip>
			<UButton
				size="xs"
				icon="lucide:plus"
				variant="solid"
				class="ml-2"
				:loading="isLoading"
				@click="mutate"
			/>
		</div>
	</UForm>
</template>

<script setup lang="ts">
import {
	CalendarDate,
	DateFormatter,
	getLocalTimeZone,
	parseDate
} from '@internationalized/date'
import type { DropdownMenuItem } from '@nuxt/ui'

import { TaskService } from '../api/task.service'
import { TaskKey } from '../lib/keys'
import SetExecutorPopover from '../SetExecutorPopover.vue'
import { useTaskStore } from '../TaskStore'

import TagsPopover from './TagsPopover.vue'
import TaskInfoItem from './TaskInfoItem.vue'
import { useAppStore } from '~/shared/stores/AppStore'
import { Priority, TaskStatus } from '~/types/common.types'

const appStore = useAppStore()
const taskStore = useTaskStore()
const toast = useToast()
const injected = inject(TaskKey)

const columnTitle = computed(
	() =>
		taskStore.currentColumns.find(
			column => column.id === injected?.value.columnId
		)?.title
)

const updateExecutorId = (value: string | undefined) => {
	mutate(value)
}
const { mutate } = useMutation({
	mutationFn: (id: string | undefined) =>
		TaskService.setExecutor(id, injected!.value.id),
	onSuccess: data => {
		toast.add({
			title: 'Исполнитель обновлен',
			color: 'success'
		})
		console.log(data.data)
		taskStore.getColumns()
	},
	onError: err => {
		toast.add({
			title: 'Ошибка при обновлении исполнителя',
			description: err.message,
			color: 'error'
		})
	}
})

const statusItems = ref([
	{
		label: 'Не выбрано',
		value: null
	},
	{
		label: 'Todo',
		value: TaskStatus.TODO
	},
	{
		label: 'In Progress',
		value: TaskStatus.IN_PROGRESS
	},
	{
		label: 'Done',
		value: TaskStatus.DONE
	}
])
const statusValue = ref(injected!.value.status)

const priorityItems = ref([
	{
		label: 'Не выбрано',
		value: null
	},
	{
		label: 'frozen',
		value: Priority.FROZEN
	},
	{
		label: 'high',
		value: Priority.HIGH
	},
	{
		label: 'low',
		value: Priority.LOW
	},
	{
		label: 'mei',
		value: Priority.MEDIUM
	}
])
const priorityValue = ref(injected!.value.priority)

const { mutate: changeStatus } = useMutation({
	mutationFn: () =>
		TaskService.changeStatus(injected!.value.id, statusValue.value),
	onError: err => {
		toast.add({
			title: 'Ошибка при обновлении статуса',
			description: err.message,
			color: 'error'
		})
	},
	onSuccess: () => {
		toast.add({
			title: 'Статус обновлен',
			color: 'success'
		})
		taskStore.getColumns()
	}
})
const { mutate: setPriority } = useMutation({
	mutationFn: () =>
		TaskService.setPriority(injected!.value.id, priorityValue.value),
	onError: err => {
		toast.add({
			title: 'Ошибка при обновлении priority',
			description: err.message,
			color: 'error'
		})
	},
	onSuccess: () => {
		toast.add({
			title: 'pr обновлен',
			color: 'success'
		})
		taskStore.getColumns()
	}
})

const df = new DateFormatter('en-US', {
	dateStyle: 'medium'
})

const deadline = parseDate(
	new Date(injected!.value.deadline).toISOString().split('T')[0]
)

const modelValue = shallowRef(
	injected?.value.deadline
		? new CalendarDate(deadline.year, deadline.month, deadline.day)
		: undefined
)

const { mutate: updateDeadline } = useMutation({
	mutationFn: (deadline: Date) =>
		TaskService.setDeadline(injected!.value.id, deadline),
	onError: err => {
		toast.add({
			title: 'Ошибка при обновлении даты',
			description: err.message,
			color: 'error'
		})
	},
	onSuccess: () => {
		toast.add({
			title: 'Дата обновлена',
			color: 'success'
		})
		taskStore.getColumns()
	}
})

watch(modelValue, () => {
	updateDeadline(
		modelValue.value ? modelValue.value!.toDate(getLocalTimeZone()) : null
	)
})
</script>

<template>
	<div class="flex flex-col gap-2">
		<TaskInfoItem icon="lucide:user-round" title="Исполнители">
			<SetExecutorPopover
				:initial-member-id="injected?.executorId"
				@update-executor-id="updateExecutorId"
			/>
		</TaskInfoItem>

		<TaskInfoItem
			icon="lucide:folders"
			title="Проект"
			v-if="appStore.currentProject && appStore.currentBoard && columnTitle"
		>
			<div class="flex items-center gap-1">
				<div class="bg-primary-700 flex p-1 text-sm rounded-md">
					{{ appStore.currentProject?.title }}
				</div>
				<UIcon name="lucide:chevron-right" />
				<span>{{ appStore.currentBoard?.title }}</span>
				<UIcon name="lucide:chevron-right" />
				<span>{{ columnTitle }}</span>
			</div>
		</TaskInfoItem>

		<TaskInfoItem icon="lucide:calendar-range" title="Дата">
			<div class="flex items-center">
				<UPopover>
					<UButton variant="soft" icon="i-lucide-calendar">
						{{
							modelValue
								? df.format(modelValue.toDate(getLocalTimeZone()))
								: 'Выберите дату'
						}}
					</UButton>

					<template #content>
						<UCalendar v-model="modelValue" class="p-2" />
					</template>
				</UPopover>
				<UButton
					v-if="modelValue"
					variant="soft"
					color="error"
					icon="lucide:x"
					@click="modelValue = undefined"
				/>
			</div>
		</TaskInfoItem>
		<TaskInfoItem icon="lucide:layers-2" title="Тип">
			<USelect
				v-model="statusValue"
				:items="statusItems"
				class="w-36"
				variant="ghost"
			/>

			<UButton
				v-if="statusValue !== injected!.status"
				icon="lucide:check"
				variant="soft"
				@click="changeStatus"
			/>
		</TaskInfoItem>
		<TaskInfoItem
			icon="lucide:chart-no-axes-column-increasing"
			title="Приоритет"
		>
			<USelect
				v-model="priorityValue"
				:items="priorityItems"
				class="w-36"
				variant="ghost"
			/>

			<UButton
				v-if="priorityValue !== injected!.priority"
				icon="lucide:check"
				variant="soft"
				@click="setPriority"
			/>
		</TaskInfoItem>
		<TaskInfoItem icon="lucide:notebook-pen" title="Тэги">
			<TagsPopover />
		</TaskInfoItem>
	</div>
</template>

<style scoped></style>

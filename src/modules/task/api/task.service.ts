import type { get } from '@nuxt/ui/runtime/utils/index.js'

import type { ITask } from '../lib/types'

import { API } from '~/shared/api/config'
import type { Priority, TaskStatus } from '~/types/common.types'

export interface CreateTaskDto {
	columnId: string
	title: string
	priority?: Priority
	executorId?: string
	projectId: string
	workbenchId: string
}

export interface AddSubtaskDto {
	title: string
	taskId: string
}

export type UpdateSubtaskDto = Partial<AddSubtaskDto>
export type UpdateTaskDto = Partial<CreateTaskDto>
export const TaskService = {
	async createTask(dto: CreateTaskDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.TASKS.CREATE_TASK, { ...dto })
	},
	async setExecutor(executorId: string | null, taskId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.SET_EXECUTOR(taskId), { executorId })
	},
	async movePosition(taskId: string, position: number) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.MOVE_POSITION(taskId), { position })
	},
	async setDeadline(taskId: string, deadline: Date | null) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.SET_DEADLINE(taskId), { deadline })
	},
	async setPriority(taskId: string, priority: Priority) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.SET_PRIORITY(taskId), { priority })
	},
	async changeStatus(taskId: string, status: TaskStatus | null) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.CHANGE_STATUS(taskId), { status })
	},
	async setTag(taskId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.SET_TAG(taskId))
	},
	async removeTag(taskId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.REMOVE_TAG(taskId))
	},
	async addSubtask(dto: AddSubtaskDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.TASKS.ADD_SUBTASK, { ...dto })
	},
	async updateSubtask(subtaskId: string, dto: UpdateSubtaskDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.UPDATE_SUBTASK(subtaskId), { ...dto })
	},
	async removeSubtask(subtaskId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(API.TASKS.REMOVE_SUBTASK(subtaskId))
	},
	async deleteTask(taskId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(API.TASKS.DELETE_TASK(taskId))
	},
	async toggleSubtask(subtaskId: string, value: boolean) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.TOGGLE_SUBTASK(subtaskId), {
			isCompleted: value
		})
	},
	async updateTask(taskId: string, dto: UpdateTaskDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TASKS.UPDATE_TASK(taskId), { ...dto })
	},
	async getByWorkbenchId(workbenchId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get(API.TASKS.GET_BY_WORKBENCH_ID(workbenchId))
	},
	async getByExecutorId(executorId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<ITask[]>(API.TASKS.GET_BY_EXECUTOR_ID(executorId))
	}
}

import type { ITagsDto } from '../../workspace/tags/api/tags.service'

import type {
	IUser,
	Priority,
	TaskStatus,
	WorkbenchRole
} from '~/types/common.types'

export interface ITask {
	id: string
	createdAt: Date
	columnId: string
	executorId?: string
	workbenchId: string
	deadline: Date
	title: string
	priority: Priority
	position: number
	tags: ITagsDto[]
	status: TaskStatus
	subtasks: ISubtask[]
	executor?: Executor
	column: {
		title: string
	}
}
export type Executor = {
	role: WorkbenchRole
	userId: string
	workbenchId: string
	user: Pick<IUser, 'displayName'>
}

export interface ISubtask {
	id: string
	title: string
	isCompleted: boolean
	createdAt: string
}

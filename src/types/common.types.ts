export enum BaseRoles {
	SUPER_ADMIN = 'SUPER_ADMIN',
	ADMIN = 'ADMIN',
	PARTICIPANT = 'PARTICIPANT',
	GUEST = 'GUEST'
}

export interface IUser {
	id: string | undefined
	email: string | undefined
	displayName: string | undefined
}

export interface IUserAccount {
	telegramUsername: string | undefined
	about: string | undefined
	email: string | undefined
	displayName: string | undefined
}

export interface IProject {
	id: string
	createdAt: string
	title: string
	status: ProjectStatus
	workbenchId: string
}

export enum WorkbenchRole {
	VISITOR = 'VISITOR',
	ADMIN = 'ADMIN',
	WORKER = 'WORKER'
}

export enum ProjectStatus {
	ACTIVE = 'ACTIVE',
	INACTIVE = 'INACTIVE',
	STOPPED = 'STOPPED',
	UNDER_DANGER = 'UNDER_DANGER'
}

export enum TaskStatus {
	TODO = 'TODO',
	IN_PROGRESS = 'IN_PROGRESS',
	DONE = 'DONE'
}

export enum Priority {
	FROZEN = 'FROZEN',
	LOW = 'LOW',
	MEDIUM = 'MEDIUM',
	HIGH = 'HIGH'
}

export enum NotificationType {
	ARCHIVED = 'ARCHIVED',
	UNREAD = 'UNREAD',
	READ = 'READ'
}

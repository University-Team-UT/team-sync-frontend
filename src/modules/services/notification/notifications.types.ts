import type { NotificationType } from '~/types/common.types'

export type ServiceNotification = {
	id: string
	dateAdded: string
	description?: string
	path?: Component
	onServiceClick?: () => void
	link?: string
}
export interface INotification {
	id: string
	createdAt: string
	title: string
	content: string
	type: NotificationType
}

export enum TAB_TYPE {
	ALL = 'All',
	UNREAD = 'Unread',
	ARCHIVE = 'Archive',
	MENTIONS = 'Mentions'
}
export interface iTab {
	name: string
	type: TAB_TYPE
}

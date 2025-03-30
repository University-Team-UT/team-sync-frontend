export type ServiceNotification = {
	id: string
	dateAdded: string
	deadline: string
	title: string
	description?: string
	path?: Component
	onServiceClick?: () => void
	link?: string
}
export interface iTab {
	name: TAB_TYPE
}
export enum TAB_TYPE {
	ALL = 'All',
	UNREAD = 'Unread',
	ARCHIVE = 'Archive'
}

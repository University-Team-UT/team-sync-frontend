export interface IServiceItem {
	icon: string
	text: string
	isPinned?: boolean
	onServiceClick?: () => void
	link?: string
}

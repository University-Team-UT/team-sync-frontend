import { API } from '~/shared/api/config'

export const NotificationService = {
	async getNotification() {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get(API.NOTIFICATIONS.GET_NOTIFICATIONS)
	},
	async markAsRead(notificationId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.NOTIFICATIONS.MARK_AS_READ(notificationId))
	},
	async archive(notificationId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.NOTIFICATIONS.ARCHIVE(notificationId))
	}
}

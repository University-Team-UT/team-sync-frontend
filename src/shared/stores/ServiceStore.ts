import { defineStore } from 'pinia'

export const useServiceStore = defineStore('ServiceStore', () => {
	const services = reactive({
		notification: false
	})

	const toggleNotifications = () => {
		services.notification = !services.notification
	}

	const closeNotifications = () => {
		services.notification = false
	}

	return {
		services,
		notifications: {
			toggleNotifications,
			closeNotifications
		}
	}
})

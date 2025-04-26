import {
	AUTHORIZED_ROUTES,
	ROUTES,
	UNAUTHORIZED_ROUTES
} from '~/shared/config/routes'
import { useAuthStore } from '~/shared/stores/AuthStore'

export default defineNuxtRouteMiddleware(to => {
	const authStore = useAuthStore()
	const isAuth = authStore.initializeAuth()

	if (UNAUTHORIZED_ROUTES.includes(to.path)) {
		if (isAuth) {
			return navigateTo(ROUTES.INDEX)
		}
	}

	if (AUTHORIZED_ROUTES.includes(to.path)) {
		if (!isAuth) {
			return navigateTo(ROUTES.AUTH)
		}
	}
})

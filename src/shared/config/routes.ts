export const ROUTES = {
	AUTH: '/auth',
	INDEX: '/',
	SETTINGS: {
		PROFILE: '/settings/profile',
		APPEARANCE: '/settings/appearance',
		NOTIFICATIONS: '/settings/notifications',
		SECURITY: '/settings/security'
	},
	WORKSPACE: {
		MAIN: '/workspace/main'
	}
}

export type AppRoutes = typeof ROUTES

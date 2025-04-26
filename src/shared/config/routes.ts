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
		MAIN: '/workspace/main',
		MEMBERS: '/workspace/members',
		TAGS: '/workspace/tags'
	}
}

export type AppRoutes = typeof ROUTES

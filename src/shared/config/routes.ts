export const ROUTES = {
	AUTH: '/auth',
	INDEX: '/',
	SETTINGS: {
		PROFILE: '/settings/profile',
		APPEARANCE: '/settings/appearance',
		NOTIFICATIONS: '/settings/notifications',
		SECURITY: '/settings/security',
		WORKSPACES: '/settings/workspaces'
	},
	GETSTARTED: '/get-started',
	WORKSPACE: (id: string) => ({
		BASE: `/w/${id}`,
		SETTINGS: `/w/${id}/settings`,
		MEMBERS: `/w/${id}/members`,
		TAGS: `/w/${id}/tags`
	}),
	INVITE: '/invite'
}

export const ROUTE_VALUES = getAllValues(ROUTES)

export const UNAUTHORIZED_ROUTES: string[] = [ROUTES.AUTH]

export const AUTHORIZED_ROUTES: string[] = ROUTE_VALUES.filter(
	route => !UNAUTHORIZED_ROUTES.includes(route)
)

export type AppRoutes = typeof ROUTES

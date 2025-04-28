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
	GET_STARTED: '/get-started',
	WORKSPACE: (workspaceId: string) => ({
		BASE: `/w/${workspaceId}`,
		SETTINGS: `/w/${workspaceId}/settings`,
		MEMBERS: `/w/${workspaceId}/members`,
		TAGS: `/w/${workspaceId}/tags`,
		PROJECT: (projectId: string) => ({
			BASE: `/w/${workspaceId}/p/${projectId}`,
			BOARD: (boardId: string) => ({
				BASE: `/w/${workspaceId}/p/${projectId}/b/${boardId}`
			})
		})
	}),
	INVITE: '/invite'
}

export const ROUTE_VALUES = getAllValues(ROUTES)

export const UNAUTHORIZED_ROUTES: string[] = [ROUTES.AUTH]

export const AUTHORIZED_ROUTES: string[] = ROUTE_VALUES.filter(
	route => !UNAUTHORIZED_ROUTES.includes(route)
)

export type AppRoutes = typeof ROUTES

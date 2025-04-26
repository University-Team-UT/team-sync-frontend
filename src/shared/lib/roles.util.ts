import { BaseRoles, WorkbenchRole } from '~~/src/types/common.types'

export const getKeyByUserRole = (role: BaseRoles) => {
	const roleBadgeMap = new Map<BaseRoles, { i18nKey: string }>([
		[BaseRoles.SUPER_ADMIN, { i18nKey: 'roles.super-admin' }],
		[BaseRoles.ADMIN, { i18nKey: 'roles.admin' }],
		[BaseRoles.GUEST, { i18nKey: 'roles.guest' }],
		[BaseRoles.PARTICIPANT, { i18nKey: 'roles.participant' }]
	])

	return roleBadgeMap.get(role) ?? { i18nKey: '' }
}

export const getKeyByWorkspaceMember = (role: WorkbenchRole) => {
	const roleBadgeMap = new Map<WorkbenchRole, { i18nKey: string }>([
		[WorkbenchRole.ADMIN, { i18nKey: 'roles.admin' }],
		[WorkbenchRole.VISITOR, { i18nKey: 'roles.worker' }],
		[WorkbenchRole.WORKER, { i18nKey: 'roles.worker' }]
	])

	return roleBadgeMap.get(role) ?? { i18nKey: '' }
}

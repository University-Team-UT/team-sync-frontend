import type { IWorkspaceMember } from '../types'

import type { IInvites } from '~/modules/common/invitation/InvitationModal.vue'
import { API } from '~/shared/api/config'
import type { WorkbenchRole } from '~/types/common.types'

export interface IInviterInfo {
	user: {
		id: string
		displayName: string
		email: string
	}
	workbench: {
		id: string
		title: string
	}
}

export const MembersService = {
	async getWorkbenchMembers(workbenchId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IWorkspaceMember[]>(
			API.MEMBERS.GET_MEMBERS(workbenchId)
		)
	},
	async excludeMember(memberId: string, workbenchId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(API.MEMBERS.EXCLUDE_MEMBER(memberId), {
			params: { workbenchId }
		})
	},
	async inviteMembers(
		memberId: string,
		workbenchId: string,
		emails: IInvites[]
	) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.MEMBERS.INVITE_USERS(memberId), {
			emails,
			workbenchId
		})
	},
	async getInviterLink(inviterId: string, workbenchId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get(API.MEMBERS.GET_INVITER_LINK(inviterId), {
			params: { workbenchId }
		})
	},
	async changeMemberRole(
		memberId: string,
		workbenchId: string,
		role: WorkbenchRole
	) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.MEMBERS.EDIT_MEMBER_ROLE(memberId), {
			params: { workbenchId },
			role
		})
	},
	async getInviteInfo(memberId: string, workbenchId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IInviterInfo>(
			API.MEMBERS.GET_INVITE_INFO(memberId),
			{
				params: { workbenchId }
			}
		)
	},
	async acceptInvite(memberId: string, workbenchId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.MEMBERS.ACCEPT_INVITE(memberId), {
			params: { workbenchId }
		})
	}
}

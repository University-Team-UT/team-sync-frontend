import type {
	IWorkspaceMember,
	IWorkspaceMemberNotPartial
} from '~/modules/workspace/types'
import { API } from '~/shared/api/config'
import type { IUser } from '~/types/common.types'

export interface ICommentDto {
	content: string
	authorId: string
}
export interface IComment {
	id: string
	content: string
	authorId: string
	author: IWorkspaceMemberNotPartial
	createdAt: Date
}
export const CommentsService = {
	async getComments(taskId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IComment[]>(API.COMMENTS.GET(taskId))
	},
	async sendComment(taskId: string, workbenchId: string, dto: ICommentDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.COMMENTS.SEND(taskId, workbenchId), { ...dto })
	},
	async deleteComment(commentId: string, userId: string, workbenchId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(
			API.COMMENTS.DELETE(commentId, userId, workbenchId)
		)
	}
}

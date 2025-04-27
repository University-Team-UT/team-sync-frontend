import { API } from '~/shared/api/config'

export interface ITagsDto {
	color: string
	id: string
	createdAt: string
	title: string
	workbenchId: string
}
export const TagsService = {
	async getTagsByWorkbenchId(workbenchId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<ITagsDto[]>(
			API.TAGS.GET_BY_WORKBENCH_ID(workbenchId)
		)
	},
	async createTag(workbenchId: string, title: string, color: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.TAGS.CREATE(workbenchId), { title, color })
	},
	async updateTag(tagId: string, title?: string, color?: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TAGS.UPDATE(tagId), { title, color })
	},
	async deleteTag(tagId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(API.TAGS.DELETE(tagId))
	},
	async assignTag(taskId: string, tagId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.TAGS.ASSIGN_TAG(taskId, tagId))
	},
	async unAssignTag(taskId: string, tagId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.TAGS.UNASSIGN_TAG(taskId, tagId))
	}
}

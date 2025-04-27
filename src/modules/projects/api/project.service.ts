import { API } from '~/shared/api/config'
import type { IProject } from '~/types/common.types'

export const ProjectService = {
	async getProjectsByWorkspaceId(workspaceId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IProject[]>(
			API.PROJECT.GET_BY_WORKBENCH_ID(workspaceId)
		)
	},
	async createProject(workspaceId: string, title: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post(API.PROJECT.CREATE_PROJECT(workspaceId), { title })
	},
	async updateProject(projectId: string, title: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.PROJECT.UPDATE_PROJECT(projectId), { title })
	},
	async deleteProject(projectId: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(API.PROJECT.UPDATE_PROJECT(projectId))
	}
}

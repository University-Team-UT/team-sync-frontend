import type { IWorkspace } from '../types'

import { API } from '~/shared/api/config'

export interface CreateWorkspaceDto {
	title: string
	description?: string
}
export type UpdateWorkspaceDto = Partial<CreateWorkspaceDto> & {
	workbenchId: string
}
export const WorkspaceService = {
	async getWorkspaces() {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IWorkspace[]>(API.WORKBENCH.GET_WORKBENCH)
	},
	async createWorkspace(dto: CreateWorkspaceDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.post<IWorkspace>(API.WORKBENCH.CREATE_WORKBENCH, dto)
	},
	async updateWorkspace(dto: UpdateWorkspaceDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch<IWorkspace>(API.WORKBENCH.UPDATE_WORKBENCH, dto)
	},
	async deleteWorkspace(id: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete<IWorkspace>(API.WORKBENCH.DELETE_WORKBENCH(id))
	}
}

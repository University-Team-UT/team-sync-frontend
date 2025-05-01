import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useAppStore } from '../stores/AppStore'
import { useAuthStore } from '../stores/AuthStore'

import { BoardService } from '~/modules/board/api/board.service'
import { ProjectService } from '~/modules/projects/api/project.service'
import { WorkspaceService } from '~/modules/workspace/api/workspace.service'

export const useGetWorkspaceInfo = () => {
	const isLoading = ref(false)
	const appStore = useAppStore()
	const route = useRoute()
	const authStore = useAuthStore()

	const getAllInfo = async () => {
		isLoading.value = true

		const workspaces = await WorkspaceService.getWorkspaces()
		const projects = await ProjectService.getProjectsByWorkspaceId(
			route.params.workspaceId as string
		)
		const boards = await BoardService.getBoardsByProjectId(
			route.params.projectId as string
		)
		isLoading.value = false

		return {
			workspaces: workspaces.data,
			projects: projects.data,
			boards: boards.data
		}
	}

	onMounted(async () => {
		if (authStore.userId) {
			const { workspaces, projects, boards } = await getAllInfo()

			const workspaceId = route.params.workspaceId
			const projectId = route.params.projectId
			const boardId = route.params.boardId

			if (workspaceId) {
				const workspace = workspaces.find(w => w.id === workspaceId)
				if (workspace) appStore.setCurrentWorkspace(workspace)
			}

			if (projectId) {
				const project = projects.find(p => p.id === projectId)
				if (project) appStore.setCurrentProject(project)
			}

			if (boardId) {
				const board = boards.find(b => b.id === boardId)
				if (board) appStore.setCurrentBoard(board)
			}
		}
	})

	return { isLoading }
}

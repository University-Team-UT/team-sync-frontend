/* eslint-disable @typescript-eslint/no-explicit-any */
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useAppStore } from '../stores/AppStore'
import { useAuthStore } from '../stores/AuthStore'

import { BoardService } from '~/modules/board/api/board.service'
import { ProjectService } from '~/modules/projects/api/project.service'
import { WorkspaceService } from '~/modules/workspace/api/workspace.service'

export const useGetWorkspaceInfo = () => {
	const isLoading = ref(false)
	const error = ref<Error | null>(null)
	const appStore = useAppStore()
	const route = useRoute()
	const authStore = useAuthStore()

	const getAllInfo = async () => {
		try {
			isLoading.value = true
			error.value = null

			const [workspacesResponse, projectsResponse, boardsResponse] =
				await Promise.all([
					WorkspaceService.getWorkspaces(),
					route.params.workspaceId
						? ProjectService.getProjectsByWorkspaceId(
								route.params.workspaceId as string
							)
						: Promise.resolve({ data: [] }),
					route.params.projectId
						? BoardService.getBoardsByProjectId(
								route.params.projectId as string
							)
						: Promise.resolve({ data: [] })
				])

			return {
				workspaces: workspacesResponse.data,
				projects: projectsResponse.data,
				boards: boardsResponse.data
			}
		} catch (err) {
			error.value = err as Error
			console.error('Failed to fetch workspace info:', err)
			return {
				workspaces: [],
				projects: [],
				boards: []
			}
		} finally {
			isLoading.value = false
		}
	}

	const setCurrentEntities = (
		workspaces: any[],
		projects: any[],
		boards: any[]
	) => {
		const { workspaceId, projectId, boardId } = route.params

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

	onMounted(async () => {
		if (!authStore.userId) return

		try {
			const { workspaces, projects, boards } = await getAllInfo()
			setCurrentEntities(workspaces, projects, boards)
		} catch (err) {
			console.error('Error in onMounted:', err)
		}
	})

	return {
		isLoading,
		error
	}
}

import { defineStore } from 'pinia'

import { useWorkspaceStore } from './WorkspaceStore'
import type { IBoardDto } from '~/modules/board/api/board.service'
import type { IWorkspace } from '~/modules/workspace/types'
import type { IProject } from '~/types/common.types'

export const useAppStore = defineStore('AppStore', () => {
	const currentWorkspace = ref<IWorkspace | null>(null)
	const currentProject = ref<IProject | null>(null)
	const currentBoard = ref<IBoardDto | null>(null)
	const wStore = useWorkspaceStore()
	const setCurrentWorkspace = (workspace: IWorkspace | null) => {
		currentWorkspace.value = workspace
		wStore.getProjects()
	}
	const setCurrentProject = (project: IProject | null) => {
		currentProject.value = project
		wStore.getBoards()
	}
	const setCurrentBoard = (board: IBoardDto | null) => {
		currentBoard.value = board
	}
	return {
		currentWorkspace,
		setCurrentWorkspace,
		currentProject,
		setCurrentProject,
		currentBoard,
		setCurrentBoard
	}
})

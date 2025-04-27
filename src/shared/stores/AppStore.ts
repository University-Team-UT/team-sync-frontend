import { defineStore } from 'pinia'

import { useWorkspaceStore } from './WorkspaceStore'
import type { IWorkspace } from '~/modules/workspace/types'
import type { IProject } from '~/types/common.types'

export const useAppStore = defineStore('AppStore', () => {
	const currentWorkspace = ref<IWorkspace | null>(null)
	const currentProject = ref<IProject | null>(null)
	const wStore = useWorkspaceStore()
	const setCurrentWorkspace = (workspace: IWorkspace) => {
		currentWorkspace.value = workspace
		wStore.getProjects()
	}
	const setCurrentProject = (project: IProject) => {
		currentProject.value = project
	}
	return {
		currentWorkspace,
		setCurrentWorkspace,
		currentProject,
		setCurrentProject
	}
})

import { defineStore } from 'pinia'

import type { IWorkspace } from '~/modules/workspace/types'

export const useAppStore = defineStore('AppStore', () => {
	const currentWorkspace = ref<IWorkspace | null>(null)
	const setCurrentWorkspace = (workspace: IWorkspace) => {
		currentWorkspace.value = workspace
	}
	return {
		currentWorkspace,
		setCurrentWorkspace
	}
})

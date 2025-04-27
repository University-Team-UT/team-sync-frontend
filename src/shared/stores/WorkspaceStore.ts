import { defineStore } from 'pinia'

import { useAppStore } from './AppStore'
import { ProjectService } from '~/modules/projects/api/project.service'
import { WorkspaceService } from '~/modules/workspace/api/workspace.service'
import type { IWorkspace } from '~/modules/workspace/types'
import type { IProject } from '~/types/common.types'

export const useWorkspaceStore = defineStore('WorkspaceStore', () => {
	const workspaces = ref<IWorkspace[]>([])
	const projects = ref<IProject[]>([])
	const appStore = useAppStore()

	const setWorkspaces = (newWorkspaces: IWorkspace[]) => {
		workspaces.value = newWorkspaces
	}

	const setProjects = (newProjects: IProject[]) => {
		projects.value = newProjects
	}

	onMounted(async () => {
		await getWorkspaces()
		getProjects()
	})

	const { fetch: getWorkspaces } = useQuery({
		queryFn: () => WorkspaceService.getWorkspaces(),
		onSuccess: data => {
			setWorkspaces(data.data)
		}
	})

	const { fetch: getProjects } = useQuery({
		queryFn: () =>
			ProjectService.getProjectsByWorkspaceId(appStore.currentWorkspace!.id),
		onSuccess: data => {
			setProjects(data.data)
		}
	})

	return { workspaces, setWorkspaces, getWorkspaces, projects, getProjects }
})

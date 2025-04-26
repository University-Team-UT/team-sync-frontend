import { defineStore } from 'pinia'

import { WorkspaceService } from '~/modules/workspace/api/workspace.service'
import type { IWorkspace } from '~/modules/workspace/types'

export const useWorkspaceStore = defineStore('WorkspaceStore', () => {
	const workspaces = ref<IWorkspace[]>([])

	const setWorkspaces = (newWorkspaces: IWorkspace[]) => {
		workspaces.value = newWorkspaces
	}

	onMounted(() => getWorkspaces())

	const { fetch: getWorkspaces } = useQuery({
		queryFn: () => WorkspaceService.getWorkspaces(),
		onSuccess: data => {
			setWorkspaces(data.data)
		}
	})

	return { workspaces, setWorkspaces, getWorkspaces }
})

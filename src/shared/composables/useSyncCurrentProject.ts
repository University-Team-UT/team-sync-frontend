import { watch } from 'vue'
import { useRoute } from 'vue-router'

import { useAppStore } from '~/shared/stores/AppStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

export function useSyncCurrentProject() {
	const route = useRoute()
	const workspaceStore = useWorkspaceStore()
	const appStore = useAppStore()

	watch(
		() => workspaceStore.projects,
		newVal => {
			const found = newVal.find(p => p.id === route.params.projectId)
			appStore.setCurrentProject(found ? found : null)
		},
		{ immediate: true }
	)
}

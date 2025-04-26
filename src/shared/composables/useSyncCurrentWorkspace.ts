import { watch } from 'vue'
import { useRoute } from 'vue-router'

import { useAppStore } from '~/shared/stores/AppStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

export function useSyncCurrentWorkspace() {
	const route = useRoute()
	const workspaceStore = useWorkspaceStore()
	const appStore = useAppStore()

	watch(
		() => workspaceStore.workspaces,
		newVal => {
			const found = newVal.find(w => w.id === route.params.workspaceId)
			if (found) {
				appStore.setCurrentWorkspace(found)
			}
		},
		{ immediate: true }
	)
}

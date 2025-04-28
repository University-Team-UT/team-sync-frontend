import { watch } from 'vue'
import { useRoute } from 'vue-router'

import { useTaskStore } from '~/modules/task/TaskStore'
import { useAppStore } from '~/shared/stores/AppStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

export function useSyncCurrentBoard() {
	const route = useRoute()
	const workspaceStore = useWorkspaceStore()
	const appStore = useAppStore()
	const taskStore = useTaskStore()

	watch(
		() => workspaceStore.boards,
		newVal => {
			const found = newVal.find(w => w.id === route.params.boardId)
			appStore.setCurrentBoard(found ? found : null)
			if (found) {
				taskStore.getColumns()
			}
		},
		{ immediate: true }
	)
}

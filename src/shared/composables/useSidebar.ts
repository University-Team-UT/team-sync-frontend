import { inject } from 'vue'

export function useSidebar() {
	const isCollapsed = inject(isCollapsedKey)

	if (!isCollapsed) {
		throw new Error('useSidebar() called without provider')
	}

	return {
		isCollapsed,
		toggle: () => {
			isCollapsed.value = !isCollapsed.value
		}
	}
}

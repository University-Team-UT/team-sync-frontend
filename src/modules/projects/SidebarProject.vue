<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

import WorkspaceIcon from '../workspace/WorkspaceIcon.vue'

import { ProjectService } from './api/project.service'
import EditProjectModal from './EditProjectModal.vue'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const props = defineProps<{
	icon?: string
	text?: string
	to?: string
	isActive?: boolean
	isCollapsed: boolean
	id: string
}>()
const overlay = useOverlay()
const modal = overlay.create(EditProjectModal)
const toast = useToast()
const wStore = useWorkspaceStore()
const { mutate } = useMutation({
	mutationFn: (id: string) => ProjectService.deleteProject(id),
	onSuccess: () => {
		toast.add({
			title: 'Проект удален успешно',
			color: 'success'
		})
		wStore.getProjects()
	},
	onError(err) {
		toast.add({
			title: err.message,
			color: 'error'
		})
	}
})
const items = ref<DropdownMenuItem[]>([
	{
		label: 'Переименовать',
		icon: 'lucide:pen',
		onSelect() {
			modal.open({ title: props.text, id: props.id })
		}
	},
	{
		label: 'Удалить',
		icon: 'lucide:trash',
		onSelect() {
			mutate(props.id)
		}
	}
])
</script>

<template>
	<div>
		<UButton
			:class="[
				'bg-transparent  hover:bg-root-800 w-full px-1 ',
				isCollapsed && 'justify-center',
				isActive && 'bg-root-800'
			]"
			:to="to"
			size="lg"
			variant="soft"
			color="neutral"
		>
			<template #trailing>
				<UDropdownMenu
					:items="items"
					:content="{
						align: 'start',
						side: 'bottom',
						sideOffset: 8
					}"
					:ui="{
						content: 'w-48'
					}"
				>
					<UButton
						icon="lucide:ellipsis-vertical"
						color="neutral"
						variant="link"
						class="ml-auto"
					/>
				</UDropdownMenu>
			</template>
			<p v-if="!isCollapsed" class="line-clamp-1 font-semibold">{{ text }}</p>
			<template #leading>
				<WorkspaceIcon v-if="icon" :icon="icon" :size="30" />
			</template>
		</UButton>
	</div>
</template>

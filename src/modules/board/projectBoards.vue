<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

import { BoardService } from './api/board.service'
import CreateBoardModal from './CreateBoardModal.vue'
import EditBoardModal from './EditBoardModal.vue'
import { ROUTES } from '~/shared/config/routes'
import { useAppStore } from '~/shared/stores/AppStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const wStore = useWorkspaceStore()
const appStore = useAppStore()
const route = useRoute()
const toast = useToast()

const isActive = computed(() => (id: string) => id === route.params.boardId)

const overlay = useOverlay()
const modal = overlay.create(EditBoardModal)
const { mutate } = useMutation({
	mutationFn: (id: string) => BoardService.deleteBoard(id),
	onSuccess() {
		toast.add({
			title: 'Удаление прошло успешно',
			color: 'success'
		})
		wStore.getBoards()
	},
	onError(err) {
		toast.add({
			title: err.message,
			color: 'error'
		})
	}
})

const boardItems = ref<DropdownMenuItem[]>([
	{
		label: 'Переименовать',
		icon: 'lucide:square-pen',
		slot: 'edit'
	},
	{
		label: 'Удалить',
		icon: 'lucide:trash-2',
		slot: 'delete'
	}
])
</script>

<template>
	<div class="flex gap-2 items-center ml-4">
		<NuxtLink
			v-for="item in wStore.boards"
			:key="item.id"
			:to="
				ROUTES.WORKSPACE(appStore.currentWorkspace!.id)
					.PROJECT(appStore.currentProject!.id)
					.BOARD(item.id).BASE
			"
			class="flex pl-2 pr-1 py-0.5 rounded-b-xl group justify-between items-center cursor-pointer"
			:class="isActive(item.id) ? 'bg-root-600' : ' hover:bg-root-600/40'"
		>
			<span>{{ item.title }}</span>
			<div
				class="flex opacity-0 transition duration-200 group-hover:opacity-100"
				:class="isActive(item.id) ? 'opacity-100' : ''"
			>
				<UDropdownMenu
					:items="boardItems"
					:content="{
						align: 'center',
						side: 'bottom',
						sideOffset: 12
					}"
					:ui="{
						content: 'flex pl-1 bg-root-950',
						item: 'opacity-70 hover:opacity-100 cursor-pointer'
					}"
				>
					<template #edit>
						<div
							icon="lucide:square-pen"
							class="w-full h-full"
							@click="modal.open({ title: item.title, id: item.id })"
						>
							Переименовать
						</div>
					</template>
					<template #delete>
						<div
							icon="lucide:square-pen"
							class="w-full h-full"
							@click="mutate(item.id)"
						>
							del
						</div>
					</template>

					<UButton
						icon="lucide:ellipsis-vertical"
						color="neutral"
						variant="link"
						class="hover:text-primary-400 pr-0 transition-colors duration-150"
					/>
				</UDropdownMenu>
			</div>
		</NuxtLink>
		<CreateBoardModal>
			<UButton icon="lucide:plus" variant="ghost" />
		</CreateBoardModal>
	</div>
</template>

<style scoped></style>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import SearchInput from '../common/search/SearchInput.vue'
import WorkspaceIcon from '../workspace/WorkspaceIcon.vue'
import WorkspacePopover from '../workspace/WorkspacePopover.vue'

import SidebarItem from './SidebarItem.vue'
import SidebarProject from './SidebarProject.vue'
import { useAppStore } from '~/shared/stores/AppStore'

const slots = defineSlots<{
	topBar?: (props: { isCollapsed: boolean }) => any
	baseElements?: (props: { title?: string; isCollapsed: boolean }) => any
	bottomBar?: (props: { isCollapsed: boolean }) => any
}>()
const { isMain = false } = defineProps<{ isMain?: boolean }>()
const { isCollapsed, toggle } = useSidebar()

const appStore = useAppStore()
</script>

<template>
	<aside
		:class="[
			'fixed inset-y-0  bg-root-900 h-full',
			isCollapsed ? 'w-14' : 'w-62'
		]"
	>
		<div :class="['flex flex-col h-full ', isCollapsed && 'items-center']">
			<header
				class="flex cursor-pointer h-16 border-b border-root-950 items-center px-2 justify-between"
			>
				<WorkspacePopover>
					<div class="flex gap-2">
						<WorkspaceIcon icon="lucide:star" />
						<div v-if="!isCollapsed" class="flex flex-col flex-1">
							<h2 class="text-xs text-gray-400 line-clamp-1 font-bold">
								Рабочее пространство
							</h2>
							<h2
								v-if="appStore.currentWorkspace"
								class="text-sm font-semibold"
							>
								{{ appStore.currentWorkspace.title }}
							</h2>
						</div>
					</div>
				</WorkspacePopover>

				<UButton
					v-if="!isCollapsed"
					variant="link"
					class="text-white hover:text-primary-400 rotate-270"
					icon="lucide:arrow-up-to-line"
					@click="toggle"
				/>
			</header>

			<div v-if="isCollapsed" class="flex items-center justify-start p-2">
				<UButton
					variant="link"
					class="text-white hover:text-primary-400 rotate-90"
					icon="lucide:arrow-up-to-line"
					@click="toggle"
				/>
			</div>
			<section class="flex flex-col px-2 gap-2 mt-2">
				<slot v-if="slots.topBar" :is-collapsed="isCollapsed" name="topBar" />
				<div v-else class="">
					<SearchInput />
				</div>
				<div>
					<slot
						v-if="slots.baseElements"
						name="baseElements"
						:is-collapsed="isCollapsed"
					/>
					<div v-else class="flex flex-col">
						<SidebarItem
							:is-collapsed="isCollapsed"
							icon="lucide:list-checks"
							text="Мои задачи"
						/>
						<SidebarItem
							:is-collapsed="isCollapsed"
							icon="lucide:circle-check-big"
							text="Все задачи"
						/>
						<SidebarItem
							:is-collapsed="isCollapsed"
							icon="lucide:folder-plus"
							text="Мои проекты"
						/>
					</div>
				</div>
				<div v-if="isMain" class="w-full">
					<div class="flex justify-between px-1 items-center w-full">
						<h2 v-if="!isCollapsed" class="text-sm font-bold">Проекты</h2>
						<UButton
							variant="link"
							icon="lucide:plus"
							:class="[
								'text-white ',
								isCollapsed && 'justify-center items-center self-center w-full'
							]"
						/>
					</div>
					<SidebarProject
						:is-collapsed="isCollapsed"
						text="Дизайн TeamSync"
						icon="lucide:star"
					/>
				</div>
			</section>
			<section class="mt-auto mb-5 w-full">
				<slot
					v-if="slots.bottomBar"
					name="bottomBar"
					:is-collapsed="isCollapsed"
				/>
				<div v-else class="w-full px-2">
					<SidebarItem
						:is-collapsed="isCollapsed"
						icon="lucide:archive"
						text="Мои проекты"
					/>
					<SidebarItem
						:is-collapsed="isCollapsed"
						icon="lucide:layout-template"
						text="Шаблоны"
					/>
				</div>
			</section>
		</div>
	</aside>
</template>
<!-- 
<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
	transition: all 0.3s ease;
}

.sidebar-enter-from,
.sidebar-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}

.aside-transition {
	transition: width 0.3s ease;
}
</style>
 -->

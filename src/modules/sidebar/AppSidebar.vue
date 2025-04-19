<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import InvitationModal from '../common/invitation/InvitationModal.vue'
import SearchInput from '../common/search/SearchInput.vue'
import WorkspaceIcon from '../workspace/WorkspaceIcon.vue'
import { ROUTES } from '~~/src/shared/config/routes'

import AddWorkspaceModal from './AddWorkspaceModal.vue'
import SidebarItem from './SidebarItem.vue'
import SidebarProject from './SidebarProject.vue'

const { t } = useI18n()

const slots = defineSlots<{
	topBar?: (props: { isCollapsed: boolean }) => any
	baseElements?: (props: { title?: string; isCollapsed: boolean }) => any
	bottomBar?: (props: { isCollapsed: boolean }) => any
}>()
const { isMain = false } = defineProps<{ isMain?: boolean }>()
const { isCollapsed, toggle } = useSidebar()
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
				<UPopover
					:content="{
						align: 'center',
						side: 'bottom',
						sideOffset: 13.5
					}"
					mode="click"
					><div class="flex gap-2">
						<WorkspaceIcon icon="lucide:star" />
						<div v-if="!isCollapsed" class="flex flex-col flex-1">
							<h2 class="text-xs text-gray-400 line-clamp-1 font-bold">
								Рабочее пространство
							</h2>
							<h2 class="text-sm font-semibold">Роман Семенов</h2>
						</div>
					</div>
					<template #content>
						<div class="flex flex-col w-100 rounded-lg bg-root-800">
							<div class="flex gap-2 p-2 cursor-default items-center">
								<WorkspaceIcon icon="lucide:star" />
								<div v-if="!isCollapsed" class="flex flex-col flex-1">
									<h2 class="text-md line-clamp-1 font-bold">Роман Семенов</h2>
									<h2 class="text-sm font-semibold text-gray-400">
										1 человек • супер-админ
									</h2>
								</div>
								<UIcon name="lucide:check" class="bg-primary-400 size-5" />
							</div>
							<div class="flex flex-col bg-root-900 gap-1 py-2">
								<NuxtLinkLocale to="/">
									<UButton
										:to="ROUTES.SETTINGS.APPEARANCE"
										class="bg-transparent hover:text-primary-400 w-full text-md px-10"
										variant="link"
										color="neutral"
										icon="lucide:settings"
										>Настройки</UButton
									>
								</NuxtLinkLocale>
								<InvitationModal>
									<template #trigger>
										<UButton
											variant="link"
											color="neutral"
											icon="lucide:user-plus"
											:label="t('invite.index')"
											class="bg-transparent hover:text-primary-400 w-full text-md px-10"
									/></template>
								</InvitationModal>
							</div>
							<div class="flex justify-center">
								<AddWorkspaceModal />
							</div>
						</div> </template
				></UPopover>
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

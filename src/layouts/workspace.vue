<script setup lang="ts">
import { ROUTES } from '~~/src/shared/config/routes'

import AppSidebar from '~/modules/sidebar/AppSidebar.vue'
import SidebarItem from '~/modules/sidebar/SidebarItem.vue'
import DefaultLayout from '~/shared/components/DefaultLayout.vue'
import { useAppStore } from '~/shared/stores/AppStore'

const appStore = useAppStore()

useSyncCurrentWorkspace()

const workspaceItems = computed(() => {
	if (!appStore.currentWorkspace) return []

	return [
		{
			to: ROUTES.WORKSPACE(appStore.currentWorkspace.id).SETTINGS,
			icon: 'lucide:settings',
			text: 'Основные'
		},
		{
			to: ROUTES.WORKSPACE(appStore.currentWorkspace.id).MEMBERS,
			icon: 'lucide:users',
			text: 'Участники'
		},
		{
			to: ROUTES.WORKSPACE(appStore.currentWorkspace.id).TAGS,
			icon: 'lucide:tag',
			text: 'Тэги'
		}
	]
})
const route = useRoute()
</script>

<template>
	<DefaultLayout>
		<template #sidebar>
			<AppSidebar>
				<template #topBar="{ isCollapsed }">
					<NuxtLinkLocale
						v-if="appStore.currentWorkspace"
						:to="ROUTES.WORKSPACE(appStore.currentWorkspace?.id).BASE"
					>
						<UButton
							icon="lucide:arrow-left"
							class="justify-center w-full"
							:label="!isCollapsed ? ('Назад' as string) : ''"
						/>
					</NuxtLinkLocale>
				</template>
				<template v-if="workspaceItems" #baseElements="{ isCollapsed }">
					<SidebarItem
						v-for="item in workspaceItems"
						:key="item.to"
						:to="item.to"
						:is-collapsed="isCollapsed"
						:icon="item.icon"
						:text="item.text"
						:is-active="route.path === item.to"
					/>
				</template>
				<template #bottomBar></template>
			</AppSidebar>
		</template>
		<template v-if="appStore.currentWorkspace">
			<slot />
		</template>
		<template v-else>
			<div class="p-4">Загрузка рабочего пространства...</div>
		</template>
	</DefaultLayout>
</template>

<script setup lang="ts">
import { ROUTES } from '~~/src/shared/config/routes'

import AppSidebar from '~/modules/sidebar/AppSidebar.vue'
import SidebarItem from '~/modules/sidebar/SidebarItem.vue'
import DefaultLayout from '~/shared/components/DefaultLayout.vue'
</script>

<template>
	<DefaultLayout>
		<template #sidebar>
			<AppSidebar>
				<template #topBar="{ isCollapsed }">
					<NuxtLinkLocale :to="ROUTES.INDEX">
						<UButton
							icon="lucide:arrow-left"
							class="justify-center w-full"
							:label="!isCollapsed ? ('Назад' as string) : ''"
						/>
					</NuxtLinkLocale>
				</template>
				<template #baseElements="{ isCollapsed }">
					<SidebarItem
						:to="ROUTES.WORKSPACE.MAIN"
						:is-collapsed="isCollapsed"
						icon="lucide:settings"
						text="Основные"
					/>
					<SidebarItem
						:to="ROUTES.WORKSPACE.MEMBERS"
						:is-collapsed="isCollapsed"
						icon="lucide:users"
						text="Люди"
					/>
					<SidebarItem
						:to="ROUTES.WORKSPACE.TAGS"
						:is-collapsed="isCollapsed"
						icon="lucide:tag"
						text="Теги"
					/>
				</template>
				<template #bottomBar></template>
			</AppSidebar>
		</template>
		<slot />
	</DefaultLayout>
</template>

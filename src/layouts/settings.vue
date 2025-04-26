<script setup lang="ts">
import { ROUTES } from '~~/src/shared/config/routes'

import AppSidebar from '~/modules/sidebar/AppSidebar.vue'
import SidebarItem from '~/modules/sidebar/SidebarItem.vue'
import DefaultLayout from '~/shared/components/DefaultLayout.vue'

const route = useRoute()
const settingsItems = [
	{
		to: ROUTES.SETTINGS.APPEARANCE,
		icon: 'lucide:paint-bucket',
		text: 'Внешний вид'
	},
	{
		to: ROUTES.SETTINGS.PROFILE,
		icon: 'lucide:user',
		text: 'Профиль'
	},
	{
		to: ROUTES.SETTINGS.NOTIFICATIONS,
		icon: 'lucide:bell',
		text: 'Уведомления'
	},
	{
		to: ROUTES.SETTINGS.SECURITY,
		icon: 'lucide:lock-keyhole',
		text: 'Безопасность'
	}
	// {
	// 	to: ROUTES.SETTINGS.WORKSPACES,
	// 	icon: 'lucide:pickaxe',
	// 	text: 'Рабочие пространства',
	// 	isActive: route.path === ROUTES.SETTINGS.WORKSPACES
	// }
]
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
						v-for="item in settingsItems"
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
		<slot />
	</DefaultLayout>
</template>

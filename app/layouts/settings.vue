<script setup lang="ts">
import AppSidebar from '~/modules/sidebar/AppSidebar.vue'
import SidebarItem from '~/modules/sidebar/SidebarItem.vue'
import DefaultLayout from '~/shared/components/DefaultLayout.vue'
import { ROUTES } from '~/shared/config/routes'
</script>

<template>
	<DefaultLayout>
		<template #sidebar>
			<AppSidebar>
				<template #topBar="{ isCollapsed }">
					<UButton
						:to="ROUTES.INDEX"
						icon="lucide:arrow-left"
						class="justify-center"
						:label="!isCollapsed ? ('Назад' as string) : ''"
					/>
				</template>
				<template #baseElements="{ isCollapsed }">
					<SidebarItem
						:to="ROUTES.SETTINGS.APPEARANCE"
						:is-collapsed="isCollapsed"
						icon="lucide:paint-bucket"
						text="Внешний вид"
					/>
					<SidebarItem
						:to="ROUTES.SETTINGS.PROFILE"
						:is-collapsed="isCollapsed"
						icon="lucide:user"
						text="Профиль"
					/>
				</template>
				<template #bottomBar></template>
			</AppSidebar>
		</template>
		<slot />
	</DefaultLayout>
</template>
>

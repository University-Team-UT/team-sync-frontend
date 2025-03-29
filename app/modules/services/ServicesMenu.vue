<script setup lang="ts">
import ServicesList from './ServicesList.vue'
import type { IServiceItem } from './types'
import { ROUTES } from '~/shared/config/routes'
import { useServiceStore } from '~/shared/stores/ServiceStore'

const store = useServiceStore()

const headerMenuItems: IServiceItem[] = [
	{
		icon: 'lucide:settings-2',
		text: 'Settings',
		isPinned: true,
		link: ROUTES.SETTINGS.APPEARANCE
	},
	{
		icon: 'lucide:badge-help',
		text: 'Help',
		isPinned: true
	},
	{
		icon: 'lucide:bell-ring',
		text: 'Notifications',
		isPinned: true,
		onServiceClick: () => {
			store.notifications.toggleNotifications()
		}
	},
	{
		icon: 'lucide:folders',
		text: 'Files',
		isPinned: true
	},
	{
		icon: 'lucide:timer',
		text: 'Timer',
		isPinned: false
	},
	{
		icon: 'lucide:flame-kindling',
		text: 'Meditation',
		isPinned: false
	},
	{
		icon: 'lucide:file-spreadsheet',
		text: 'Forms',
		isPinned: false
	}
]
</script>

<template>
	<div class="bg-root-900 flex items-center gap-1 px-2 rounded-lg h-10">
		<UTooltip
			v-for="item in headerMenuItems"
			:key="item.icon"
			:text="item.text"
		>
			<UButton
				v-show="item.isPinned"
				class="hover:text-primary-400"
				:icon="item.icon"
				size="lg"
				:to="item.link"
				color="neutral"
				variant="link"
			/>
		</UTooltip>
		<ServicesList :header-menu-items="headerMenuItems" />
	</div>
</template>

<style scoped></style>

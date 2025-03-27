<script setup lang="ts">
const headerMenuItems = [
	{
		icon: 'lucide:settings-2',
		text: 'Settings',
		isPined: true
	},
	{
		icon: 'lucide:badge-help',
		text: 'Help',
		isPined: true
	},
	{
		icon: 'lucide:bell-ring',
		text: 'Notifications',
		isPined: true
	},
	{
		icon: 'lucide:folders',
		text: 'Files',
		isPined: true
	},
	{
		icon: 'lucide:timer',
		text: 'Timer',
		isPined: false
	},
	{
		icon: 'lucide:flame-kindling',
		text: 'Meditation',
		isPined: false
	},
	{
		icon: 'lucide:file-spreadsheet',
		text: 'Forms',
		isPined: false
	}
]
</script>

<template>
	<div class="bg-root-700 flex items-center gap-1 px-2 rounded-lg h-10">
		<UTooltip
			v-for="item in headerMenuItems"
			:key="item.icon"
			:text="item.text"
		>
			<UButton
				class="hover:text-primary-400"
				:icon="item.icon"
				size="lg"
				color="neutral"
				variant="link"
			/>
		</UTooltip>
		<ServiceList :header-menu-items="headerMenuItems" />
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
const headerMenuItems = [
	{
		icon: 'lucide:settings-2',
		text: 'Settings'
	},
	{
		icon: 'lucide:badge-help',
		text: 'Help'
	},
	{
		icon: 'lucide:bell-ring',
		text: 'Notifications'
	},
	{
		icon: 'lucide:folders',
		text: 'Files'
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
		<UTooltip text="Mini-services">
			<UButton
				class="hover:text-primary-400"
				icon="lucide:chart-scatter"
				size="lg"
				color="neutral"
				variant="link"
			/>
		</UTooltip>
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
defineProps<{
	headerMenuItems: { icon: string; text: string; isPined: boolean }[]
}>()
</script>

<template>
	<UButton
		icon="lucide:pin"
		size="sm"
		color="neutral"
		variant="link"
		:class="[
			item.isPined
				? 'hover:text-primary-400 absolute right-1 top-1'
				: 'hover:text-primary-400 absolute group-hover:opacity-100 opacity-0 right-1 top-1 border-1 p-0.5 border-root-900 rounded-sm'
		]"
	/>

	<div class="flex flex-col items-center hover:text-primary-400">
		<UButton
			class="hover:text-primary-400 gap-1 flex flex-col p-0"
			:icon="item.icon"
			size="lg"
			color="neutral"
			variant="link"
		>
			<p class="text-xs">{{ item.text }}</p></UButton
		>
	</div>
</template>

<style scoped></style>

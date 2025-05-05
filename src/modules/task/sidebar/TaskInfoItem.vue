<script setup lang="ts">
defineProps<{
	icon: string
	title: string
}>()
</script>

<template>
	<div class="grid grid-cols-[1fr_1fr] items-center">
		<div class="flex gap-3 text-primary-400 items-center">
			<UIcon :name="icon" />
			<span>{{ title }}</span>
		</div>
		<div class="flex items-center justify-end">
			<slot />
		</div>
	</div>
</template>

<style scoped></style>

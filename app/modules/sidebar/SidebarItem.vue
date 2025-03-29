<script setup lang="ts">
defineProps<{ icon: string; text?: string; to?: string }>()
</script>

<template>
	<UButton
		class="bg-transparent hover:bg-root-800"
		:to="to"
		variant="soft"
		color="neutral"
		:label="text"
		:icon="icon"
	/>
</template>

<style scoped></style>

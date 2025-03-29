<script setup lang="ts">
defineProps<{ icon: string }>()
</script>

<template>
	<div class="size-[42px] rounded-xl flex items-center justify-center">
		<UIcon :name="icon" size="20" /> />
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
defineProps<{ imageSrc: string; name: string }>()
</script>

<template>
	<div
		class="flex justify-center items-center rounded-lg gap-2 cursor-pointer hover:bg-root-800 transition-colors h-10 text-white bg-root-900"
	>
		<img class="self-center" :src="imageSrc" :alt="name" />
		<span>{{ name }}</span>
	</div>
</template>

<style scoped></style>

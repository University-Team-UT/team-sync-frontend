<script setup lang="ts">
defineProps<{ imageSrc: string; name?: string }>()
const emit = defineEmits(['click'])
</script>

<template>
	<div
		:class="[
			'flex bg-root-900 h-10 justify-center rounded-lg text-white cursor-pointer hover:bg-root-800 items-center transition-colors',
			name && 'gap-2'
		]"
		@click="emit('click')"
	>
		<img class="self-center" :src="imageSrc" :alt="name" />
		<span>{{ name }}</span>
	</div>
</template>

<style scoped></style>

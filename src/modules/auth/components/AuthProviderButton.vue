<script setup lang="ts">
const { disabled = false } = defineProps<{
	imageSrc: string
	name?: string
	disabled?: boolean
}>()
const emit = defineEmits(['click'])
</script>

<template>
	<div
		:class="[
			'flex bg-root-900 h-10 justify-center rounded-lg text-white  items-center transition-colors',
			name && 'gap-2',
			disabled
				? 'opacity-50 cursor-not-allowed'
				: 'cursor-pointer  hover:bg-root-800'
		]"
		@click="emit('click')"
	>
		<img class="self-center" :src="imageSrc" :alt="name" />
		<span>{{ name }}</span>
	</div>
</template>

<style scoped></style>

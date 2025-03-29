<script setup lang="ts">
defineProps<{ mainColor: string; secondaryColor: string; name: string }>()
const emit = defineEmits(['click'])
</script>

<template>
	<div
		:class="[
			'flex bg-root-900 h-10 justify-center rounded-full cursor-pointer items-center transition-colors'
		]"
		@click="emit('click')"
	></div>
</template>

<style scoped></style>

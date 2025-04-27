<script setup lang="ts">
import type { TagColor } from './types'

defineProps<{ color: TagColor; isActive?: boolean }>()
defineEmits<{
	click: []
}>()
</script>

<template>
	<div class="relative cursor-pointer" @click="$emit('click')">
		<div
			:style="{
				backgroundColor: color.primary
			}"
			class="size-5 rounded-full"
		/>

		<UIcon
			v-if="isActive"
			name="lucide:check"
			size="12"
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
		/>
	</div>
</template>

<style scoped></style>

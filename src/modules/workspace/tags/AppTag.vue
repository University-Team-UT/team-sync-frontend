<script setup lang="ts">
import type { TagColor } from './types'

defineProps<{ color?: TagColor; title: string }>()
</script>

<template>
	<div
		class="p-1 rounded-lg flex items-center cursor-default"
		:style="{
			backgroundColor: color?.background
		}"
	>
		<span
			class="text-xs"
			:style="{
				color: color?.primary
			}"
		>
			{{ title }}
		</span>
	</div>
</template>

<style scoped></style>

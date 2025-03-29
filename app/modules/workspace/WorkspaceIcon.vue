<script setup lang="ts">
import type { TripleExclusiveProps } from './types'

//! USE ONLY ONE OF THEM

type Props = TripleExclusiveProps<
	{ letters: string },
	{ imageSrc: string },
	{ icon: string }
> & {
	size?: number
}

defineProps<Props>()
</script>

<template>
	<div
		:style="{
			height: `${size || 42}px`,
			width: `${size || 42}px`
		}"
		class="rounded-xl flex items-center justify-center bg-root-700"
	>
		<UIcon v-if="icon" :name="icon" :size="size ? size / 2 : 20" />
		<p v-else-if="letters">{{ letters }}</p>
		<NuxtImg v-else-if="imageSrc" :src="imageSrc" />" />
	</div>
</template>

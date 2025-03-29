<script setup lang="ts">
type Props = {
	size?: number
	bgColor?: string
	class?: string
} & (
	| { imageSrc: string; icon?: never; letters?: never }
	| { icon: string; imageSrc?: never; letters?: never }
	| { letters: string; imageSrc?: never; icon?: never }
)

defineProps<Props>()
</script>

<template>
	<div
		:style="{
			height: `${size || 42}px`,
			width: `${size || 42}px`,
			backgroundColor: bgColor
		}"
		:class="[
			'rounded-lg flex items-center justify-center  overflow-hidden bg-root-700'
		]"
	>
		<NuxtImg
			v-if="imageSrc"
			:src="imageSrc"
			class="w-full h-full object-cover"
		/>

		<UIcon v-else-if="icon" :name="icon" :size="size ? size / 2 : 20" />

		<p v-else-if="letters" class="text-white font-medium text-lg">
			{{ letters }}
		</p>
	</div>
</template>

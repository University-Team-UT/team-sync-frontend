<script setup lang="ts">
const props = defineProps<{
	icon: string
	text?: string
	to?: string
	isCollapsed: boolean
}>()

const buttonText = computed(() => (!props.isCollapsed ? props.text : ''))
</script>

<template>
	<NuxtLinkLocale :to="to">
		<UButton
			:class="[
				'bg-transparent hover:bg-root-800 w-full',
				isCollapsed && 'justify-center'
			]"
			variant="soft"
			color="neutral"
			:icon="icon"
			>{{ buttonText }}</UButton
		>
	</NuxtLinkLocale>
</template>

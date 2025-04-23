<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
	{
		label: 'Подзадачи',
		icon: 'i-lucide-smile',
		content: 'You have nothing to do, @nuxt/icon will handle it automatically.'
	},
	{
		label: 'Время',
		icon: 'i-lucide-swatch-book',
		content:
			'Choose a primary and a neutral color from your Tailwind CSS theme.'
	}
])
</script>

<template>
	<UAccordion :items="items"
		><template #title="{ item }">
			<div class="flex">
				<span>{{ item.label }}</span>
			</div> </template
		><template #leading><UIcon name="lucide:chevron-right" /></template>
		></UAccordion
	>
</template>

<style scoped></style>

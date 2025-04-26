<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const boardItems = ref<DropdownMenuItem[]>([
	{
		label: 'Переименовать',
		icon: 'lucide:square-pen'
	},
	{
		label: 'Удалить',
		icon: 'lucide:trash-2'
	}
])
</script>

<template>
	<UDropdownMenu
		:items="boardItems"
		:content="{
			align: 'center',
			side: 'bottom',
			sideOffset: 12
		}"
		:ui="{
			content: 'flex pl-1 bg-root-950',
			item: 'opacity-70 hover:opacity-100 cursor-pointer'
		}"
	>
		<UButton
			icon="lucide:ellipsis-vertical"
			color="neutral"
			variant="link"
			class="hover:text-primary-400 pr-0 transition-colors duration-150"
		/>
	</UDropdownMenu>
</template>

<style scoped></style>

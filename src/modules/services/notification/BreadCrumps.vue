<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const items: BreadcrumbItem[] = [
	{
		label: 'Admin',
		to: '/'
	},
	{
		label: 'Tasks',
		to: '/components'
	},
	{
		label: 'Project',
		to: '/components/breadcrumb'
	}
]
</script>

<template>
	<UBreadcrumb
		separator-icon="lucide:chevron-right"
		:items="items"
		:ui="{
			item: 'hover:bg-root-800/50 rounded-lg p-1 px-2 transition hover:ease-in-out duration:100'
		}"
		class="size"
	>
	</UBreadcrumb>
</template>
<style scoped></style>

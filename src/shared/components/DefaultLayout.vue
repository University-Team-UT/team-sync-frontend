<script setup lang="ts">
import AppHeader from '~/modules/header/AppHeader.vue'

const { isCollapsed } = useSidebar()
</script>

<template>
	<div class="flex h-screen bg-root-800 overflow-y-hidden">
		<div class="fixed inset-0 -z-10 bg-root-800" />
		<slot name="sidebar" />
		<AppHeader />

		<main
			:class="[
				'flex flex-col mt-16  w-full   ',
				isCollapsed ? 'ml-14' : 'ml-62'
			]"
		>
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
import AppHeader from '~/modules/header/AppHeader.vue'

const { isCollapsed } = useSidebar()
</script>

<template>
	<div class="flex">
		<slot name="sidebar" />
		<AppHeader />

		<main
			:class="[
				'flex flex-col mt-16  w-full bg-root-800 min-h-screen',
				isCollapsed ? 'ml-14' : 'ml-62'
			]"
		>
			<slot />
		</main>
	</div>
</template>

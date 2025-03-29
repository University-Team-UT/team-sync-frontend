<script setup lang="ts">
import AppHeader from '~/modules/header/AppHeader.vue'
import AppSidebar from '~/modules/sidebar/AppSidebar.vue'
</script>

<template>
	<div class="flex">
		<aside class="fixed inset-y-0 w-62">
			<AppSidebar />
		</aside>
		<AppHeader />

		<main
			class="flex flex-col mt-16 ml-62 w-full bg-root-800 h-[calc(100svh-64px)]"
		>
			<slot />
		</main>
	</div>
</template>

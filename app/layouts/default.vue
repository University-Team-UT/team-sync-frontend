<script setup lang="ts">
import AppHeader from '~/modules/header/AppHeader.vue'
</script>

<template>
	<div class="flex">
		<aside class=" fixed inset-y-0 w-62">1</aside>
		<AppHeader />

		<div class="flex flex-col mt-16 ml-62 w-full">
			<main>
				<slot />
			</main>
		</div>
	</div>
</template>

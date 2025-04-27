<script lang="ts" setup>
import CreateTag from '~/modules/workspace/tags/CreateTag.vue'

useSyncCurrentWorkspace()
definePageMeta({
	layout: 'workspace'
})
</script>

<template>
	<div
		class="flex flex-col bg-root-950 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
	>
		<h1 class="text-xl">Тэги</h1>
		<h2 class="text-xs">Используйте тэги чтобы организовать вашу работу</h2>
		<h2 class="text-xs">
			Tags created in this section are available in deals and tasks.
		</h2>
		<CreateTag />
	</div>
</template>

<style scoped></style>

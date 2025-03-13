<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<UInput
		:ui="{
			base: 'bg-root-900 focus:bg-root-900  hover:bg-root-900 rounded-xl placeholder:text-center'
		}"
		icon="lucide:search"
		:placeholder="t('search')"
		variant="soft"
		size="xl"
		class="w-90  h-10 "
		
	/>
</template>

<style scoped></style>

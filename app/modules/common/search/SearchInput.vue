<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<UInput
		icon="lucide:search"
		:placeholder="t('search')"
		variant="soft"
		size="xl"
	/>
</template>

<style scoped></style>

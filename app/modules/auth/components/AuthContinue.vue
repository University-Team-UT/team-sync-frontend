<script lang="ts" setup>
const emit = defineEmits(['setPageTab'])
const { t } = useI18n()
</script>

<template>
	<AppLogo />
	<UAlert
		class="text-wrap"
		:title="t('auth.alert.title')"
		:description="t('auth.alert.description')"
		icon="material-symbols:mail-outline-rounded"
		variant="outline"
		color="primary"
	/>
	<div @click="emit('setPageTab', 'start')">123</div>
</template>

<style scoped></style>

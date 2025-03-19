<script lang="ts" setup>
const emit = defineEmits(['setPageTab'])
</script>

<template>
	<AppLogo />
	<UAlert
		class="text-wrap"
		title="Продолжить с Почтой"
		description="Создайте аккаунт через электронную почту"
		icon="i-lucide-terminal"
		variant="outline"
		color="primary"
	/>
	<div @click="emit('setPageTab', 'start')">123</div>
</template>

<style scoped></style>

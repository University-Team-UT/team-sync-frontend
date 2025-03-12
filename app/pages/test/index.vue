import { useI18n } from 'vue-i18n';
<script lang="ts" setup>
definePageMeta({
	layout: 'test'
})

const { ui } = useAppConfig()

const { t } = useI18n()

const setTheme = (color: string) => {
	ui.colors.primary = color
}
</script>

<template>
	<div class="bg-root-950">
		<NuxtLink to="/" class="">{{ t('welcome') }}</NuxtLink>
		<NuxtLink to="/" class="">{{ t('hello') }}</NuxtLink>
		<UButton @click="setTheme('red')">Красный</UButton>
		<UButton @click="setTheme('green')">Зелёный</UButton>
		<UButton @click="setTheme('blue')">Синий</UButton>
		<UButton @click="setTheme('orange')">Оранжевый</UButton>
		<UButton @click="setTheme('root')">Оранжевый</UButton>
		<UModal
			title="Modal with description"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<UButton label="Open" color="neutral" variant="subtle" />

			<template #body> 123 </template>
		</UModal>
	</div>
</template>

<style scoped></style>

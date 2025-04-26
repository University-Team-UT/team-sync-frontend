<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
	return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
	<UButton
		v-for="locale in availableLocales"
		:key="locale.code"
		@click="setLocale(locale.code)"
	>
		{{ locale.name }}
	</UButton>
</template>

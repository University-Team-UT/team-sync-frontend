<script setup>
import EngIcon from '~/shared/icons/EngIcon.vue'
import RuIcon from '~/shared/icons/RuIcon.vue'

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
	return locales.value.filter(i => i.code !== locale.value)
})

const localeIcon = computed(() =>
	availableLocales.value[0].code === 'ru' ? EngIcon : RuIcon
)
</script>

<template>
	<button
		v-for="locale in availableLocales"
		:key="locale.code"
		@click="setLocale(locale.code)"
	>
		<component :is="localeIcon" />
	</button>
</template>

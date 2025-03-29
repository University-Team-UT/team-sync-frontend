<script setup>
import EngIcon from '~/shared/icons/EngIcon.vue'
import RuIcon from '~/shared/icons/RuIcon.vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
	return locales.value.filter(i => i.code !== locale.value)
})

const localeIcon = computed(() =>
	availableLocales.value[0].code === 'ru' ? EngIcon : RuIcon
)
</script>

<template>
	<NuxtLink
		v-for="locale in availableLocales"
		:key="locale.code"
		:to="switchLocalePath(locale.code)"
	>
		<component :is="localeIcon" />
	</NuxtLink>
</template>

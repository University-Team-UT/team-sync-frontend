<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

useHead({
	htmlAttrs: {
		lang,
		dir
	}
})

useHead({
	titleTemplate: titleChunk => {
		return titleChunk ? `${titleChunk} - TeamSync` : 'TeamSync'
	}
})
</script>

<template>
	<UApp
		:tooltip="{
			delayDuration: 150
		}"
		:locale="locales[locale]"
	>
		<AppRouterTest />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>

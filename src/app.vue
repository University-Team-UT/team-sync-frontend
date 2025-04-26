<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

import AppProviders from './shared/providers/AppProviders.vue'

const { locale } = useI18n()

useHead({
	titleTemplate: titleChunk => {
		return titleChunk ? `${titleChunk} | TeamSync` : 'TeamSync'
	}
})

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

useHead({
	htmlAttrs: {
		lang,
		dir
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

		<AppProviders>
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</AppProviders>
	</UApp>
</template>

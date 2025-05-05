<script setup lang="ts">
import { UppercaseFirstLetter } from '../../shared/utils/UppercaseFirstLetter.vue'

const { locales, locale, setLocale } = useI18n()
</script>

<template>
	<div class="w-full p-0.5 bg-root-800 rounded-lg flex">
		<UButtonGroup class="w-full">
			<UButton
				v-for="currentLocale in locales"
				:key="currentLocale.code"
				:color="currentLocale.code === locale ? 'primary' : 'neutral'"
				variant="soft"
				:label="UppercaseFirstLetter(currentLocale.code)"
				class="w-1/2 justify-center text-xs"
				@click="setLocale(currentLocale.code)"
			/>
		</UButtonGroup>
	</div>
</template>

<style scoped></style>

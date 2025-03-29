<script setup lang="ts">
import { UppercaseFirstLetter } from '../../shared/utils/UppercaseFirstLetter.vue'

const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
	<div class="w-full p-0.5 bg-root-800 rounded-lg flex">
		<UButtonGroup class="w-full">
			<UButton
				v-for="currentLocale in locales"
				:key="currentLocale.code"
				:to="switchLocalePath(currentLocale.code)"
				:color="currentLocale.code === locale ? 'primary' : 'neutral'"
				variant="soft"
				:label="UppercaseFirstLetter(currentLocale.code)"
				class="w-1/2 justify-center text-xs"
			/>
		</UButtonGroup>
	</div>
</template>

<style scoped></style>

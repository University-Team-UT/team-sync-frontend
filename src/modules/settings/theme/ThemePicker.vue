<script setup lang="ts">
import ColorModeButton from './ColorModeButton.vue'
import { colorThemes } from './lib/colorThemes'
import SettingsTheme from './SettingsTheme.vue'

const { isDark, setTheme, currentTheme } = useColorTheme()
</script>

<template>
	<div class="flex flex-col gap-2 mb-2">
		<div class="flex justify-between items-center">
			<span class="text-2xl">Тема</span>
			<ColorModeButton />
		</div>

		<span class="text-xl">Выбор цветовой темы</span>
		<div class="flex-col border border-gray-500 rounded-sm self-start">
			<NuxtImg
				:src="currentTheme?.images[isDark ? 'dark' : 'light']"
				alt="theme"
			/>
			<div class="flex py-2 px-5 gap-2 items-center">
				<Icon name="lucide:paint-roller" class="size-5" />
				<span>{{ currentTheme?.title }}</span>
			</div>
		</div>
		<span class="text-xl">Акцентные цвета</span>
		<div class="grid grid-cols-7 gap-2">
			<SettingsTheme
				v-for="color in colorThemes"
				:key="color.color"
				:color-theme="color"
				@click="setTheme(color.color)"
			/>
		</div>
	</div>
</template>

<style scoped></style>

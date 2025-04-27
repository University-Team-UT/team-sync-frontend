<script lang="ts" setup>
import { colorThemes } from '~/modules/settings/theme/lib/colorThemes'
import SettingsTheme from '~/modules/settings/theme/SettingsTheme.vue'

const { setTheme } = useColorTheme()

const emit = defineEmits(['nextStep'])
</script>

<template>
	<div
		class="flex flex-col h-130 bg-root-800 min-w-1/3 z-1000 p-10 rounded-xl items-center justify-center gap-10 relative"
	>
		<span class="absolute top-8 text-3xl">Начало Работы</span>
		<span class="text-2xl"
			>Настрой Team<span class="text-primary-400 font-bold">Sync</span></span
		>
		<span class="text-xl absolute top-18 text-center"
			>Выбери <span class="text-primary-400">цвет</span> для рабочего
			<span class="text-primary-400">пространства</span></span
		>
		<div class="grid grid-cols-7 gap-2">
			<SettingsTheme
				v-for="color in colorThemes"
				:key="color.color"
				:color-theme="color"
				@click="setTheme(color.color)"
			/>
		</div>
		<UButton
			label="Продолжить"
			color="primary"
			size="lg"
			variant="solid"
			class="px-8 text-xl font-bold absolute bottom-8"
			@click="emit('nextStep')"
		/>
	</div>
</template>

<style scoped></style>

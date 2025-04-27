<script lang="ts" setup>
import { useColorTheme } from '~/modules/settings/theme/composables/useColorTheme'

const emit = defineEmits(['nextStep'])

const { colorMode, isDark } = useColorTheme()
</script>

<template>
	<div
		class="flex flex-col h-130 bg-root-800 min-w-2/5 z-1000 p-10 rounded-xl items-center justify-center gap-10 relative"
	>
		<span class="text-2xl absolute top-8 text-center"
			>Настрой Team<span class="text-primary-400 font-bold">Sync</span></span
		>
		<span class="text-xl absolute top-18 text-center"
			>Выберите стиль интерфейса для рабочего пространства</span
		>
		<div class="flex items-center justify-center gap-8">
			<div class="flex flex-col items-center gap-2">
				<img src="/img/StartingThemeLight.png" alt="" />
				<ClientOnly v-if="!colorMode?.forced">
					<UButton
						icon="i-lucide-sun"
						label="Светлая тема"
						color="neutral"
						size="lg"
						variant="ghost"
						@click="isDark = false"
					/>

					<template #fallback>
						<div class="size-8" />
					</template>
				</ClientOnly>
			</div>
			<div class="flex flex-col items-center gap-2">
				<img src="/img/StartingThemeDark.png" alt="" />
				<ClientOnly v-if="!colorMode?.forced">
					<UButton
						icon="i-lucide-moon"
						label="Темная тема"
						size="lg"
						color="neutral"
						variant="ghost"
						@click="isDark = true"
					/>
					<template #fallback>
						<div class="size-8" />
					</template>
				</ClientOnly>
			</div>
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

<script setup lang="ts">
import { useColorTheme } from '~/modules/settings/theme/composables/useColorTheme'

const { colorMode, isDark } = useColorTheme()
</script>

<template>
	<ClientOnly v-if="!colorMode?.forced">
		<UButton
			:icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
			color="neutral"
			variant="ghost"
			@click="isDark = !isDark"
		/>

		<template #fallback>
			<div class="size-8" />
		</template>
	</ClientOnly>
</template>

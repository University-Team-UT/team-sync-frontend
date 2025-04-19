<script setup lang="ts">
import type { ColorTheme } from '~/modules/settings/theme/lib/types'

const props = defineProps<{ colorTheme: ColorTheme }>()
const emit = defineEmits(['click'])

const color = computed(() => `var(--color-${props.colorTheme.color}-500)`)
</script>

<template>
	<UTooltip :text="colorTheme.title"
		><div
			class="cursor-pointer w-15 h-15 rounded-lg"
			:style="{ backgroundColor: color }"
			@click="emit('click')"
	/></UTooltip>
</template>

<style scoped></style>

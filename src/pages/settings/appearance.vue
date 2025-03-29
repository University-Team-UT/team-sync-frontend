<script lang="ts" setup>
import type { TabsItem } from '@nuxt/ui'

definePageMeta({
	layout: 'settings'
})

const items = ref<TabsItem[]>([
	{
		label: '24 часа'
	},
	{
		label: '12 часов'
	}
])
</script>

<template>
	<div
		class="flex flex-col bg-root-900 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
	>
		<div class="flex flex-col mb-2">
			<span class="text-2xl"> Выбор внешнего вида </span>
		</div>
		<div class="flex flex-col gap-2 mb-2">
			<span class="text-xl">Формат времени</span>
			<UTabs
				orientation="vertical"
				variant="pill"
				:content="false"
				:items="items"
				class="w-full"
			/>
		</div>
		<div class="flex flex-col gap-2 mb-2">
			<span class="text-xl">Выбор цветовой темы</span>
			<div class="flex-col border border-gray-500 rounded-sm self-start">
				<img src="/public/img/theme-1.png" alt="theme" />
				<div class="flex py-2 px-5 gap-2 items-center">
					<Icon name="lucide:paint-roller" class="size-5" />
					<span>Чёрный-минск</span>
				</div>
			</div>
			<div class="flex gap-2">
				<!-- <SettingsTheme /> -->
			</div>
		</div>
	</div>
</template>

<style scoped></style>

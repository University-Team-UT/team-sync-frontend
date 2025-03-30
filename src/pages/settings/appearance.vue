<script lang="ts" setup>
<<<<<<< HEAD:app/pages/settings/index.vue
import WorkspaceSelector from '~/modules/workspace/WorkspaceSelector.vue'
=======
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
>>>>>>> origin/master:src/pages/settings/appearance.vue
</script>

<template>
	<div
<<<<<<< HEAD:app/pages/settings/index.vue
		class="flex flex-col bg-root-950 h-auto rounded-xl w-200 p-5 relative my-5 ml-5"
=======
		class="flex flex-col bg-root-900 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
>>>>>>> origin/master:src/pages/settings/appearance.vue
	>
		<div class="flex flex-col mb-4">
			<span class="text-2xl"> Настройки уведомлений </span>
		</div>
		<div class="flex flex-col gap-6">
			<span class="text-xl">Выберите рабочее пространство</span>
			<WorkspaceSelector />
		</div>
<<<<<<< HEAD:app/pages/settings/index.vue
		<div class="flex mt-15">
			<div
				class="flex flex-col bg-root-900 rounded-xl p-5 text-wrap items-center text-center"
			>
				<UIcon name="lucide:bell-ring" class="size-9" color="primary" />
				<span>Центр <br />уведомлений</span>
=======
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
>>>>>>> origin/master:src/pages/settings/appearance.vue
			</div>
		</div>
	</div>
</template>

<style scoped></style>

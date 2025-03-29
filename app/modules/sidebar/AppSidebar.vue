<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import SearchInput from '../common/search/SearchInput.vue'
import WorkspaceIcon from '../workspace/WorkspaceIcon.vue'

import SidebarItem from './SidebarItem.vue'

const slots = defineSlots<{
	topBar?: () => any
	baseElements?: (props: { title?: string }) => any
}>()
</script>

<template>
	<div class="flex flex-col">
		<header
			class="flex cursor-pointer gap-2 h-16 border-b border-root-800 items-center px-2"
		>
			<WorkspaceIcon icon="lucide:star" />
			<div class="flex flex-col flex-1">
				<h2 class="text-xs text-gray-400 line-clamp-1 font-bold">
					Рабочее пространоство
				</h2>
				<h2 class="text-sm font-semibold">Роман Семенов</h2>
			</div>
			<UButton
				variant="link"
				class="text-white hover:text-primary-400 rotate-270"
				icon="lucide:arrow-up-to-line"
			/>
		</header>
		<section class="flex flex-col px-2 gap-2">
			<slot v-if="slots.topBar" name="topBar" />
			<div v-else class="pt-4">
				<SearchInput />
			</div>
			<div>
				<slot v-if="slots.baseElements" name="baseElements" />
				<div v-else class="flex flex-col">
					<SidebarItem icon="lucide:list-checks" text="Мои задачи" />
					<SidebarItem icon="lucide:circle-check-big" text="Все задачи" />
					<SidebarItem icon="lucide:folder-plus" text="Мои проекты" />
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped></style>

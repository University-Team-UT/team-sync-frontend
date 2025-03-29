<script setup lang="ts">
import NotificationTabsAll from './NotificationTabsAll.vue'
import NotificationTabsArchive from './NotificationTabsArchive.vue'
import NotificationTabsUnread from './NotificationTabsUnread.vue'

interface iTab {
	name: string
}
const tabs = ref<iTab[]>([
	{ name: 'All' },
	{ name: 'Unread' },
	{ name: 'Archive' }
])
const selectedTab = ref('All')

const changeTab = (tab: iTab) => {
	selectedTab.value = tab.name
}
</script>

<template>
	<div class="flex flex-col w-full">
		<div class="flex w-full bg-root-800/50 gap-1 rounded-lg">
			<div
				v-for="tab in tabs"
				:key="tab.name"
				class="w-full flex bg-transparent p-1 rounded-lg text-sm justify-center"
				@click="changeTab(tab)"
			>
				<div
					:class="[
						'flex hover:cursor-pointer select-none transition-colors duration-200 hover:bg-root-700  w-full rounded-lg p-1 justify-center',
						{
							'bg-root-700 text-primary-400': selectedTab === tab.name
						}
					]"
				>
					{{ tab.name }}
				</div>
			</div>
		</div>

		<div v-if="selectedTab === 'All'"><NotificationTabsAll /></div>
		<div v-else-if="selectedTab === 'Unread'"><NotificationTabsUnread /></div>
		<div v-else-if="selectedTab === 'Archive'"><NotificationTabsArchive /></div>
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
import { TAB_TYPE } from './notifications.types'
import type { iTab } from './notifications.types'
import NotificationTabsAll from './NotificationTabsAll.vue'
import NotificationTabsArchive from './NotificationTabsArchive.vue'
import NotificationTabsUnread from './NotificationTabsUnread.vue'

const tabs = ref<iTab[]>([
	{ name: TAB_TYPE.ALL },
	{ name: TAB_TYPE.UNREAD },
	{ name: TAB_TYPE.ARCHIVE }
])
const selectedTab = ref<iTab>({ name: TAB_TYPE.ALL })

const changeTab = (tab: iTab) => {
	selectedTab.value.name = tab.name
}
</script>

<template>
	<div class="flex flex-col w-full">
		<div class="flex justify-between gap-3">
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
								'bg-root-700 text-primary-400': selectedTab.name === tab.name
							}
						]"
					>
						{{ tab.name }}
					</div>
				</div>
			</div>
			<UButton
				:ui="{
					base: 'bg-root-800/50  hover:bg-root-900 rounded-lg text-root-400 text-xs'
				}"
				icon="lucide:ellipsis"
				size="lg"
				class="self-start"
			/>
		</div>

		<div v-if="selectedTab.name === TAB_TYPE.ALL"><NotificationTabsAll /></div>
		<div v-else-if="selectedTab.name === TAB_TYPE.UNREAD">
			<NotificationTabsUnread />
		</div>
		<div v-else-if="selectedTab.name === TAB_TYPE.ARCHIVE">
			<NotificationTabsArchive />
		</div>
	</div>
</template>

<style scoped></style>

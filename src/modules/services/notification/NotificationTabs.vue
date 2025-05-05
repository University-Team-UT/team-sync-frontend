<script setup lang="ts">
import { NotificationService } from './api/nofitifcation.service'
import NotificationControlSettings from './NotificationControlSettings.vue'
import { TAB_TYPE } from './notifications.types'
import type { INotification, iTab } from './notifications.types'
import NotificationTabsAll from './NotificationTabsAll.vue'
import NotificationTabsArchive from './NotificationTabsArchive.vue'
import NotificationTabsUnread from './NotificationTabsUnread.vue'
import { NotificationType } from '~/types/common.types'

const tabs = ref<iTab[]>([
	{ name: 'All', type: TAB_TYPE.ALL },
	{ name: 'Unread', type: TAB_TYPE.UNREAD },
	{ name: 'Archive', type: TAB_TYPE.ARCHIVE }
])
const selectedTab = ref<TAB_TYPE>(TAB_TYPE.ALL)

const changeTab = (tab: iTab) => {
	selectedTab.value = tab.type
}

const notifications = ref<INotification[]>([])

const unreadNotifications = computed(() =>
	notifications.value.filter(
		notification => notification.type === NotificationType.UNREAD
	)
)
const archiveNotifications = computed(() =>
	notifications.value.filter(
		notification => notification.type === NotificationType.ARCHIVED
	)
)

useQuery({
	queryFn: () => NotificationService.getNotification(),
	onSuccess: data => {
		notifications.value = data.data
	},
	enabled: true
})
</script>

<template>
	<div class="flex flex-col w-full">
		<div class="flex justify-between gap-3">
			<div class="flex w-full bg-root-800/50 gap-1 rounded-lg">
				<!-- <div
					v-for="tab in tabs"
					:key="tab.name"
					class="w-full flex bg-transparent p-1 rounded-lg text-sm justify-center"
					@click="changeTab(tab)"
				>
					<div
						:class="[
							'flex hover:cursor-pointer select-none transition-colors duration-200 hover:bg-root-700  w-full rounded-lg p-1 justify-center',
							{
								'bg-root-700 text-primary-400': selectedTab === tab.type
							}
						]"
					>
						{{ tab.name }}
					</div>
				</div> -->
			</div>
		</div>
		<div v-if="selectedTab === TAB_TYPE.ALL">
			<NotificationTabsAll :notifications="notifications" />
		</div>
	</div>
</template>

<style scoped></style>

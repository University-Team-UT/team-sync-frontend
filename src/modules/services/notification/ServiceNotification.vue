<script setup lang="ts">
import { ROUTES } from '~~/src/shared/config/routes'
import { useServiceStore } from '~~/src/shared/stores/ServiceStore'

import NotificationTabs from './NotificationTabs.vue'
import NotificationTelegram from './NotificationTelegram.vue'

const store = useServiceStore()
</script>

<template>
	<div class="flex flex-col items-center relative">
		<transition name="fade">
			<div v-if="store.services.notification">
				<div
					class="fixed inset-0 z-20"
					@click="store.notifications.closeNotifications"
				/>
				<div
					class="fixed flex flex-col top-17 right-2 p-4 bg-root-700 rounded-lg shadow w-160 h-[calc(100%-72px)] gap-4 z-30"
				>
					<section class="flex w-full justify-between items-center">
						<h2 class="text-xl select-none">Notifications</h2>
						<div class="flex gap-2">
							<NotificationTelegram />

							<NuxtLinkLocale :to="ROUTES.SETTINGS.NOTIFICATIONS"
								><UButton
									:ui="{
										base: 'bg-root-800/50  hover:bg-root-900 rounded-lg text-root-400 text-xs'
									}"
									icon="lucide:settings"
									size="lg"
									variant="solid"
							/></NuxtLinkLocale>
						</div>
					</section>

					<div class="flex-col gap-4 flex">
						<USeparator class="w-full" />

						<div class="flex w-full justify-between gap-2 items-center">
							<NotificationTabs />
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<style scoped>
/* Анимация */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>

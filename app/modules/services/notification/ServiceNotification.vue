<script setup lang="ts">
import { ref } from 'vue'

import NotificationTabs from './NotificationTabs.vue'

const isVisible = ref(false)

const toggleBlock = () => {
	isVisible.value = !isVisible.value
}

const closeBlock = () => {
	isVisible.value = false
}
</script>

<template>
	<div class="flex flex-col items-center relative">
		<button
			class="p-3 bg-blue-500 text-white rounded-md shadow-md transition text-xs z-20"
			@click="toggleBlock"
		>
			Показать
		</button>

		<transition name="fade">
			<div v-if="isVisible">
				<div class="fixed inset-0" @click="closeBlock" />
				<div
					class="fixed flex flex-col top-17 right-2 p-4 bg-root-700 rounded-lg shadow-lg w-160 h-[calc(100%-72px)] gap-4 z-10"
				>
					<div class="flex w-full justify-between items-center">
						<div class="text-xl">Notifications</div>
						<div class="flex gap-2">
							<UModal>
								<UButton
									:ui="{
										base: 'bg-root-800/50  hover:bg-root-900 rounded-lg text-root-400 text-xs'
									}"
									:avatar="{
										src: 'https://api.iconify.design/cib:telegram.svg?color=%2327a7e7'
									}"
									label="Connect Telegram"
									size="lg"
									class="px-3 py-2"
								/>

								<template #content>
									<Placeholder class="h-48 m-4" />
								</template>
							</UModal>
							<UButton
								:ui="{
									base: 'bg-root-800/50  hover:bg-root-900 rounded-lg text-root-400 text-xs'
								}"
								icon="lucide:settings"
								size="lg"
								variant="solid"
							/>
						</div>
					</div>

					<div class="flex-col gap-4 flex">
						<USeparator class="w-full" />
						<div class="flex w-full justify-between gap-2 items-center">
							<NotificationTabs />

							<UButton
								:ui="{
									base: 'bg-root-800/50  hover:bg-root-900 rounded-lg text-root-400 text-xs'
								}"
								icon="lucide:ellipsis"
								size="lg"
								class="self-start"
							/>
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

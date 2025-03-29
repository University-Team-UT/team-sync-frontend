<script setup>
import { ref } from 'vue'

const isVisible = ref(false)

const toggleBlock = () => {
	isVisible.value = !isVisible.value
}

const items = ref([
	{
		label: 123,
		slot: 'All'
	},
	{
		label: 456,
		slot: 'Unread'
	},
	{
		label: 456,
		slot: 'Archive'
	}
])
</script>

<template>
	<div class="flex flex-col items-center relative">
		<button
			class="p-3 bg-blue-500 text-white rounded-md shadow-md transition text-xs"
			@click="toggleBlock"
		>
			Показать блок
		</button>

		<transition name="fade">
			<div
				v-if="isVisible"
				class="fixed flex flex-col top-17 right-2 p-4 bg-root-700 rounded-lg shadow-lg w-160 h-[calc(100%-72px)] gap-4"
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
					<div class="flex gap-2">
						<UTabs :items="items" size="sm" class="w-full">
							<template #team>
								<div class="flex flex-col gap-5">
									<div>123</div>
								</div>
							</template>

							<template #guest>
								<div class="flex flex-col mt-5">
									<div>`1`</div>
								</div>
							</template>
						</UTabs>
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

<script setup lang="ts">
import BreadCrumps from './BreadCrumps.vue'
import type { INotification, ServiceNotification } from './notifications.types'

defineProps<{
	notifications: INotification[]
}>()
</script>

<template>
	<USeparator class="w-full mt-4" />
	<div
		v-for="notification in notifications"
		:key="notification.id"
		class="flex flex-col relative border-b-1 last:border-b-0 border-neutral-900 py-6 opacity-50 hover:opacity-100 transition duration-250 cursor-pointer"
	>
		<div class="flex w-full gap-4 items-center group">
			<div class="flex bg-root-800/50 rounded-lg p-2">
				<UIcon name="ci:timer" class="size-8" />
			</div>
			<div class="flex gap-2 flex-col items-center w-full">
				<span class="line-clamp-1">
					<span class="mr-2">{{ notification.title }}</span>

					<span
						class="px-2 inline-flex rounded-lg bg-error-500/30 mr-2 text-error-400 font-bold"
						>{{ notification.createdAt }}</span
					>{{ notification.content }}
				</span>
				<BreadCrumps class="self-start" />
			</div>
			<div class="flex absolute right-2 bottom-2"></div>
			<UButton
				:ui="{
					base: 'opacity-0 group-hover:opacity-100 hover:primary-400 group-hover:text-neutral-400 transition group-hover:ease-out duration:100'
				}"
				size="lg"
				icon="lucide:ellipsis"
				variant="link"
			/>
		</div>
	</div>
</template>

<style scoped></style>

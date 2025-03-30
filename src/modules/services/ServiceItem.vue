<script setup lang="ts">
import type { IServiceItem } from './types'

const props = defineProps<{
	item: IServiceItem
}>()

const emit = defineEmits(['closePopover'])

const onClickService = () => {
	emit('closePopover')
	props.item?.onServiceClick?.()
}
</script>

<template>
	<div class="group bg-root-800 rounded-lg relative p-4">
		<UButton
			icon="lucide:pin"
			size="sm"
			color="neutral"
			variant="link"
			:class="[
				item.isPinned
					? 'hover:text-primary-400 absolute right-1 top-1'
					: 'hover:text-primary-400 absolute group-hover:opacity-100 opacity-0 transition-opacity right-1 top-1 border-1 p-0.5 border-root-900 rounded-sm'
			]"
		/>

		<div class="flex flex-col items-center hover:text-primary-400">
			<UButton
				class="hover:text-primary-400 gap-1 flex flex-col p-0 text-xs"
				:icon="item.icon"
				:to="item.link"
				size="lg"
				color="neutral"
				variant="link"
				@click="onClickService"
			>
				{{ item.text }}</UButton
			>
		</div>
	</div>
</template>

<style scoped></style>

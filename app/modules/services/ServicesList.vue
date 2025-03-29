<script setup lang="ts">
import ServiceItem from './ServiceItem.vue'
import type { IServiceItem } from './types'

defineProps<{
	headerMenuItems: IServiceItem[]
}>()

const isOpen = ref<boolean>(false)

const closePopover = () => {
	isOpen.value = false
}

const setIsOpen = (value: boolean) => {
	isOpen.value = value
}
</script>

<template>
	<UPopover
		:open="isOpen"
		:content="{
			align: 'end',
			side: 'bottom',
			sideOffset: 10
		}"
		@update:open="setIsOpen"
	>
		<UButton
			class="hover:text-primary-400"
			icon="lucide:chart-scatter"
			size="lg"
			color="neutral"
			variant="link"
		/>

		<template #content>
			<div class="grid grid-cols-3 gap-4 p-3">
				<ServiceItem
					v-for="item in headerMenuItems"
					:key="item.icon"
					:item="item"
					@close-popover="closePopover"
				/>
			</div>
		</template>
	</UPopover>
</template>

<style scoped></style>

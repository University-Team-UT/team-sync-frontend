<script setup lang="ts">
import PopoverCard from './PopoverCard.vue'

defineProps<{
	headerMenuItems: { icon: string; text: string; isPined: boolean }[]
}>()
</script>

<template>
	<UPopover
		:content="{
			align: 'end',
			side: 'bottom',
			sideOffset: 10
		}"
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
				<div
					v-for="item in headerMenuItems"
					:key="item.icon"
					class="group bg-root-700 rounded-lg relative p-4"
				>
					<PopoverCard :header-menu-items="headerMenuItems" />
				</div>
			</div>
		</template>
	</UPopover>
</template>

<style scoped></style>

<script setup lang="ts">
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
		<UTooltip text="Mini-services">
			<UButton
				class="hover:text-primary-400"
				icon="lucide:chart-scatter"
				size="lg"
				color="neutral"
				variant="link"
			/>
		</UTooltip>

		<template #content>
			<div class="grid grid-cols-3 gap-4 p-3">
				<ServiceItem
					v-for="item in headerMenuItems"
					:key="item.icon"
					:item="item"
				/>
			</div>
		</template>
	</UPopover>
</template>

<style scoped></style>

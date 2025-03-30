<script setup lang="ts">
import WorkspaceIcon from '~/modules/workspace/WorkspaceIcon.vue'
</script>

<template>
	<div>
		<UPopover
			:content="{
				align: 'center',
				side: 'bottom',
				sideOffset: 8
			}"
			mode="click"
		>
			<div
				class="flex bg-root-900 rounded-[0.5rem] items-center p-2 transition-colors duration-200 ease-in-out self-start w-100 justify-between cursor-pointer hover:bg-root-800"
			>
				<div class="flex gap-2 items-center">
					<WorkspaceIcon letters="TS" class="flex" />
					<div class="flex flex-col text-nowrap">
						<span class="text-gray-400"> Рабочее пространство</span>
						<span>TeamSync</span>
					</div>
				</div>

				<div class="flex items-center">
					<UIcon name="lucide:chevron-down" class="size-9" />
				</div>
			</div>
			<template #content>
				<Placeholder class="w-100 h-25 inline-flex" /> </template
		></UPopover>
	</div>
</template>

<style scoped></style>

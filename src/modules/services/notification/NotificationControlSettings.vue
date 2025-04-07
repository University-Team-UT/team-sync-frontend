<script setup lang="ts"></script>

<template>
	<UPopover
		:ui="{ content: 'bg-root-700 rounded-lg' }"
		:content="{
			align: 'end',
			side: 'bottom',
			sideOffset: 20
		}"
	>
		<UButton
			:ui="{
				base: 'bg-root-800/50  hover:bg-root-900 rounded-lg text-root-400 text-xs'
			}"
			icon="lucide:ellipsis"
			size="lg"
			class="self-start"
		/>
		<template #content>
			<div class="h-20 w-58 bg-root-800/50 p-2 rounded-lg">
				<div class="h-full bg-transparent grid grid-cols-1 gap-2">
					<UButton
						icon="lucide:check"
						size="xs"
						label="Read all"
						variant="ghost"
						color="neutral"
						class="hover:bg-root-700 hover:text-primary-400 transition duration-150"
					/>
					<UButton
						icon="lucide:archive"
						size="xs"
						label="Achieve all"
						variant="ghost"
						color="neutral"
						class="hover:bg-root-700 hover:text-primary-400 transition duration-150"
					/>
				</div>
			</div>
		</template>
	</UPopover>
</template>

<style scoped></style>

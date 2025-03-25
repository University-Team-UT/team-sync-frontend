<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<div class="flex items-center">
		<p>{{ t('invite.tabs.content.title') }}</p>
		<UTooltip
			arrow
			:text="t('invite.tabs.content.tooltip')"
			:ui="{
				content: 'h-auto max-w-68',
				text: 'text-wrap text-justify'
			}"
			:content="{
				align: 'start',
				side: 'bottom',
				sideOffset: 8
			}"
		>
			<UButton
				icon="lucide:circle-help"
				color="neutral"
				variant="link"
				class="hover:text-primary-400"
				size="sm"
			/>
		</UTooltip>
		<USwitch default-value size="sm" />
	</div>
	<div class="flex gap-5 justify-between">
		<UButtonGroup class="w-full">
			<UInput
				color="neutral"
				variant="soft"
				:placeholder="t('invite.link')"
				class="w-full"
			/>

			<UButton color="neutral" variant="soft" icon="lucide-files" />
		</UButtonGroup>
		<UButton color="primary" class="font-bold self-center px-7" size="sm">{{
			t('invite.copy')
		}}</UButton>
	</div>
</template>

<style scoped></style>

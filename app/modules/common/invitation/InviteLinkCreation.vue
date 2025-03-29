<script setup lang="ts">
const { t } = useI18n()

const value = ref('')
const copied = ref(false)

function copy() {
	navigator.clipboard.writeText(value.value)
	copied.value = true

	setTimeout(() => {
		copied.value = false
	}, 2000)
}
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
		<UInput
			v-model="value"
			:ui="{ trailing: 'pr-0.5' }"
			color="neutral"
			variant="soft"
			:placeholder="t('invite.link')"
			class="w-full"
			><template v-if="value?.length" #trailing
				><UButton
					:icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
					aria-label="Copy to clipboard"
					color="neutral"
					variant="ghost"
					class="hover:bg-transparent hover:text-primary-400"
					@click="copy"
			/></template>
		</UInput>
		<UButton color="primary" class="font-bold self-center px-7" size="sm">{{
			t('invite.copy')
		}}</UButton>
	</div>
</template>

<style scoped></style>

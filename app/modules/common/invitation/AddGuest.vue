
<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
	<div class="flex gap-8">
		<UInput
			:placeholder="t('invite.tabs.mail')"
			size="lg"
			class="w-full"
			variant="soft"
		/>
		<UButton
			disabled
			:ui="{
				base: 'px-6 '
			}"
			icon="lucide:handshake"
			:label="t('invite.tabs.guest')"
			color="neutral"
			variant="soft"
		/>
		<UButton icon="lucide:x" color="neutral" variant="link" />
	</div>
	<UButton 
		icon="lucide:circle-fading-plus"
		size="md"
		class="text-root-400 self-start mt-5"
		variant="link"
		
		>{{ t('invite.tabs.more') }}</UButton
	
	>
</template>

<style scoped></style>

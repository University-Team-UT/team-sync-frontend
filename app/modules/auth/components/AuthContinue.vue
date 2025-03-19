<script lang="ts" setup>
import BackIcon from '~/shared/icons/BackIcon.vue'

const emit = defineEmits(['setPageTab'])
const { t } = useI18n()
</script>

<template>
	<div @click="emit('setPageTab', 'start')">
		<BackIcon />
	</div>
	<AppLogo />
	<UAlert
		class="text-wrap"
		:title="t('auth.alert.title')"
		:description="t('auth.alert.description')"
		icon="material-symbols:mail-outline-rounded"
		variant="outline"
		color="primary"
	/>
	<div class="flex flex-col pt-5 gap-3">
		<span>Email</span>
		<UInput :placeholder="t('auth.inputs.email')" variant="soft" color="alt" />
		<UInput :placeholder="t('auth.inputs.email')" variant="soft" color="alt" />
		<UInput :placeholder="t('auth.inputs.email')" variant="soft" color="alt" />
		<UButton class="flex justify-center text-white" color="primary">
			{{ t('auth.buttons.continue') }}
		</UButton>
		<UButton
			class="flex text-primary-400 justify-center"
			variant="ghost"
			color="primary"
		>
			{{ t('auth.buttons.help') }}
		</UButton>
	</div>
</template>

<style scoped></style>

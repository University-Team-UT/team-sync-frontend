<script lang="ts" setup>
const emit = defineEmits(['setPageTab'])
const { t } = useI18n()
</script>

<template>
	<UButton
		icon="lucide:arrow-left-from-line"
		variant="link"
		class="text-white hover:text-white/70 absolute left-3 top-3"
		@click="emit('setPageTab', 'start')"
	/>

	<AppLogo />
	<UAlert
		class="text-wrap mt-5"
		:title="t('auth.alert.title')"
		:description="t('auth.alert.description')"
		icon="material-symbols:mail-outline-rounded"
		variant="outline"
		color="primary"
	/>
	<div class="flex flex-col pt-5 gap-3">
		<span>Email</span>
		<UInput :placeholder="t('auth.inputs.email')" variant="soft" color="alt" />
		<UInput
			:placeholder="t('auth.inputs.password.enter')"
			variant="soft"
			color="alt"
		/>
		<UInput
			:placeholder="t('auth.inputs.password.repeat')"
			variant="soft"
			color="alt"
		/>
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
	<div class="flex justify-center my-5">
		<span>{{ t('auth.bottom') }}</span>
	</div>
	<div class="flex justify-center gap-5">
		<AuthProviderButton class="p-1" image-src="/img/yandex.png" />
		<AuthProviderButton class="p-1" image-src="/img/vk.png" />
	</div>
</template>

<style scoped></style>

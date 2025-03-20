<script lang="ts" setup>
const emit = defineEmits(['setPageTab'])
const { t } = useI18n()
</script>

<template>
	<div class="flex flex-col h-full">
		<UButton
			icon="lucide:arrow-left-from-line"
			variant="link"
			class="text-white absolute hover:text-white/70 left-3 top-3"
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
		<div class="flex flex-col gap-3 pt-5">
			<span>Email</span>
			<UInput
				:placeholder="t('auth.inputs.email')"
				variant="soft"
				color="alt"
			/>
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
				class="flex justify-center text-primary-400"
				variant="ghost"
				color="primary"
			>
				{{ t('auth.buttons.help') }}
			</UButton>
		</div>
		<div class="mt-auto">
			<div class="flex justify-center my-5">
				<span>{{ t('auth.bottom') }}</span>
			</div>
			<div class="flex justify-center gap-5">
				<AuthProviderButton class="p-1 px-2" image-src="/img/yandex.png" />
				<AuthProviderButton class="p-1 px-2" image-src="/img/vk.png" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>

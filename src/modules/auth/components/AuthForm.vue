<script setup lang="ts">
const { t } = useI18n()

const emit = defineEmits(['setPageTab'])
</script>

<template>
	<div class="flex flex-col h-full justify-center my-auto">
		<AppLogo />

		<div class="flex flex-col justify-center text-center gap-5 py-10">
			<span>{{ t('auth.index') }}</span>
			<AuthProviderButton
				:name="t('auth.providers.yandex')"
				image-src="/img/yandex.png"
			/>
			<AuthProviderButton
				:name="t('auth.providers.vk')"
				image-src="/img/vk.png"
			/>
			<AuthProviderButton
				:name="t('auth.providers.email')"
				image-src="/img/email.png"
				@click="emit('setPageTab', 'continue')"
			/>
		</div>
		<div>
			<USeparator
				size="lg"
				:label="t('auth.or')"
				:ui="{
					border: 'border-gray-400 rounded-xl'
				}"
			/>
		</div>
		<div class="flex flex-col gap-3 pt-5">
			<span>Email</span>
			<UInput
				:placeholder="t('auth.inputs.email')"
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
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
import AuthProviderButton from './AuthProviderButton.vue'

const { t } = useI18n()
</script>

<template>
	<AppLogo />
	<div class="flex flex-col gap-5 justify-center text-center py-10">
		<span>{{ t('auth.index') }}</span>
		<AuthProviderButton
			:name="t('auth.providers.yandex')"
			image-src="~/assets/images/yandex.png"
		/>
		<UButton class="flex justify-center text-white bg-root-900"
			><img src="/assets/images/yandex.png" alt="Yandex" />
			<span>{{ t('auth.providers.yandex') }}</span>
		</UButton>
		<UButton class="flex justify-center text-white bg-root-900"
			><img src="/assets/images/vk.png" alt="Yandex" />
			<span>{{ t('auth.providers.vk') }}</span>
		</UButton>
		<UButton class="flex justify-center text-white bg-root-900"
			><img src="/assets/images/email.png" alt="Yandex" />
			<span>{{ t('auth.providers.email') }}</span>
		</UButton>
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
	<div class="flex flex-col pt-5 gap-3">
		<span>Email</span>
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

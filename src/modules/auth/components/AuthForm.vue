<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

import { AuthService } from '../api/auth.service'
import { loginSchema, type LoginSchema } from '../schemas/login.schema'

import { ROUTES } from '~/shared/config/routes'
import { useAuthStore } from '~/shared/stores/AuthStore'

const { t } = useI18n()

const emit = defineEmits(['setPageTab'])

const state = reactive<Partial<LoginSchema>>({
	email: '',
	password: ''
})
const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()

const { mutate: login, isLoading } = useMutation({
	mutationFn: (data: LoginSchema) => {
		return AuthService.login(data.email, data.password)
	},
	onSuccess: data => {
		toast.add({
			title: 'Вы успешно авторизовались',
			color: 'success'
		})
		authStore.setAuthData(data.user, data.accessToken)
		router.push(ROUTES.INDEX)
	},
	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})
async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
	login(event.data)
}

const canSendData = computed(() => {
	return state.email && state.password
})
</script>

<template>
	<div class="flex flex-col h-full justify-center my-auto">
		<AppLogo />

		<div class="flex flex-col justify-center text-center gap-5 py-10">
			<span>{{ t('auth.index') }}</span>
			<AuthProviderButton
				:name="t('auth.providers.yandex')"
				image-src="/img/yandex.png"
				:disabled="true"
			/>
			<AuthProviderButton
				:name="t('auth.providers.vk')"
				image-src="/img/vk.png"
				:disabled="true"
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
			<UForm
				:schema="loginSchema"
				:state="state"
				class="space-y-4 flex flex-col"
				@submit="onSubmit"
			>
				<UFormField label="Email" name="email" class="w-full">
					<UInput
						v-model="state.email"
						:placeholder="t('auth.inputs.email')"
						variant="soft"
						color="alt"
						class="w-full"
					/>
				</UFormField>

				<UFormField label="Password" name="password">
					<UInput
						v-model="state.password"
						class="w-full"
						type="password"
						:placeholder="t('auth.inputs.password')"
						variant="soft"
						color="alt"
					/>
				</UFormField>

				<UButton
					class="flex justify-center text-white"
					color="primary"
					type="submit"
					:disabled="!canSendData"
					:loading="isLoading"
				>
					{{ t('auth.buttons.continue') }}
				</UButton>
				<UButton
					class="flex justify-center text-primary-400"
					variant="ghost"
					color="primary"
				>
					{{ t('auth.buttons.help') }}
				</UButton>
			</UForm>
		</div>
	</div>
</template>

<style scoped></style>

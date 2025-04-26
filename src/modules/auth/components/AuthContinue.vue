<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

import { AuthService } from '../api/auth.service'
import { registerSchema, type RegisterSchema } from '../schemas/register.schema'

import { ROUTES } from '~/shared/config/routes'
import { useAuthStore } from '~/shared/stores/AuthStore'

const emit = defineEmits(['setPageTab'])
const { t } = useI18n()

const state = reactive<RegisterSchema>({
	email: '',
	password: '',
	confirmPassword: '',
	displayName: ''
})
const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()

const { mutate: login, isLoading } = useMutation({
	mutationFn: (data: RegisterSchema) => {
		return AuthService.register(data.email, data.password, state.displayName)
	},
	onSuccess: data => {
		toast.add({
			title: 'Вы успешно зарегистрировались',
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
async function onSubmit(event: FormSubmitEvent<RegisterSchema>) {
	login(event.data)
}

const canSendData = computed(() => {
	return (
		state.email && state.password && state.confirmPassword && state.displayName
	)
})
</script>

<template>
	<div class="flex flex-col h-full justify-center">
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
			<UForm
				:schema="registerSchema"
				:state="state"
				class="space-y-4 flex flex-col"
				@submit="onSubmit"
			>
				<UFormField label="Email" name="email">
					<UInput
						v-model="state.email"
						:placeholder="t('auth.inputs.email')"
						variant="soft"
						color="alt"
						class="w-full"
					/>
				</UFormField>

				<UFormField label="DisplayName" name="displayName">
					<UInput
						v-model="state.displayName"
						:placeholder="t('auth.inputs.name')"
						variant="soft"
						color="alt"
						class="w-full"
					/>
				</UFormField>
				<UFormField label="Password" name="password">
					<UInput
						v-model="state.password"
						type="password"
						:placeholder="t('auth.inputs.password.enter')"
						variant="soft"
						color="alt"
						class="w-full"
					/>
				</UFormField>

				<UFormField label="confirmPassword" name="confirmPassword">
					<UInput
						v-model="state.confirmPassword"
						type="password"
						:placeholder="t('auth.inputs.password.repeat')"
						variant="soft"
						color="alt"
						class="w-full"
					/>
				</UFormField>

				<UButton
					class="flex justify-center text-white"
					color="primary"
					type="submit"
					:disabled="!canSendData"
					:loading="isLoading"
				>
					{{ t('auth.buttons.register') }}
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
		<div class="flex justify-center my-5">
			<span>{{ t('auth.bottom') }}</span>
		</div>
		<div class="flex justify-center gap-5">
			<AuthProviderButton
				class="p-1 px-2"
				image-src="/img/yandex.png"
				disabled
			/>
			<AuthProviderButton class="p-1 px-2" image-src="/img/vk.png" disabled />
		</div>
	</div>
</template>

<style scoped></style>

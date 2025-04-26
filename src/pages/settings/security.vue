<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import { z } from 'zod'

import { AccountService } from '~/modules/settings/profile/api/account.service'
import { ROUTES } from '~/shared/config/routes'
import { useAuthStore } from '~/shared/stores/AuthStore'

definePageMeta({
	layout: 'settings'
})

const schema = z.object({
	oldPassword: z.string(),
	newPassword: z.string(),
	confirmPassword: z.string()
})

type Schema = z.output<typeof schema>

const state = reactive<Schema>({
	oldPassword: '',
	newPassword: '',
	confirmPassword: ''
})

const password = ref('')

const toast = useToast()
const router = useRouter()
const authStore = useAuthStore()

const { isLoading, mutate } = useMutation({
	mutationFn: (data: { oldPassword: string; newPassword: string }) =>
		AccountService.changePassword(data.oldPassword, data.newPassword),
	onSuccess: () => {
		toast.add({
			title: 'Пароль успешно обновлен',
			color: 'success'
		})
	},
	onError: error => {
		toast.add({
			description: error.message,
			color: 'error'
		})
	}
})
async function onSubmit(event: FormSubmitEvent<Schema>) {
	const data = {
		oldPassword: event.data.oldPassword,
		newPassword: event.data.newPassword
	}
	await mutate(data)
	state.oldPassword = ''
	state.newPassword = ''
	state.confirmPassword = ''
}

const { mutate: deleteAccount } = useMutation({
	mutationFn: (data: { password: string }) =>
		AccountService.deleteAccount(data.password),
	onSuccess: () => {
		toast.add({
			title: 'Ваш аккаунт удален',
			color: 'success'
		})
	},
	onError: error => {
		toast.add({
			description: error.message,
			color: 'error'
		})
	}
})

const onClickApprove = async () => {
	await deleteAccount({ password: password.value })
	router.replace(ROUTES.AUTH)
	authStore.handleLogout()
}
</script>

<template>
	<div>
		<div
			class="flex flex-col bg-root-950 h-auto rounded-xl w-125 p-5 relative my-5 ml-5"
		>
			<div class="flex mb-4">
				<span class="text-2xl"> Аутентификация </span>
			</div>
			<div class="flex flex-col gap-4 text-xl">
				<UForm
					:schema="schema"
					:state="state"
					class="space-y-4"
					@submit="onSubmit"
				>
					<UFormField label="Старый пароль" name="oldPassword">
						<UInput
							v-model="state.oldPassword"
							placeholder="Введите старый пароль"
							variant="soft"
							color="alt"
							class="w-full"
						/>
					</UFormField>
					<UFormField label="Новый пароль" name="newPassword">
						<UInput
							v-model="state.newPassword"
							placeholder="Введите новый пароль"
							variant="soft"
							color="alt"
							class="w-full"
						/>
					</UFormField>
					<UFormField label="Подтверждение пароля" name="confirmPassword">
						<UInput
							v-model="state.confirmPassword"
							placeholder="Повторите новый пароль"
							variant="soft"
							color="alt"
							class="w-full"
						/>
					</UFormField>
					<UButton
						type="submit"
						class="flex self-end ml-auto justify-center text-sm"
						color="primary"
						:loading="isLoading"
					>
						Изменить пароль</UButton
					>
				</UForm>
			</div>
			<!-- <div class="flex flex-col gap-3 my-4">
				<span>Способы авторизации</span>
				<div class="grid grid-cols-2 gap-5">
					<AuthProviderButton
						:name="t('auth.providers.yandex')"
						image-src="/img/yandex.png"
					/>
					<AuthProviderButton
						:name="t('auth.providers.vk')"
						image-src="/img/vk.png"
					/>
				</div> -->
			<!-- </div> -->
		</div>
		<div
			class="flex flex-col bg-root-950 h-auto rounded-xl w-125 p-5 relative my-5 ml-5"
		>
			<div class="flex flex-col mx-2">
				<span class="text-xl"> Удаление аккаунта </span>
				<div class="text-gray-500">
					<ul class="list-disc">
						<li>Аккаунт нельзя будет восстановить</li>
						<li>Все сохранённые на аккаунте данные будут потеряны</li>
						<li>Аккаунт будет анонимным у других пользователей</li>
					</ul>
				</div>
				<ApproveModal
					title="Удаление аккаунта"
					description="Вы уверены что хотите удалить аккаунт, отменить это действие будет невозможно"
					:buttons-text="['Отмена', 'Удалить']"
					@approve="onClickApprove"
				>
					<template #body>
						<UFormField label="Пароль" name="password">
							<UInput
								v-model="password"
								placeholder="Введите ваш текущий пароль для удаления"
								variant="soft"
								color="alt"
								class="w-full"
							/>
						</UFormField>
					</template>
					<UButton class="flex self-end mt-5 px-3" color="primary" size="xl">
						Удалить
					</UButton>
				</ApproveModal>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

import { AccountService, type UpdateAccountDto } from './api/account.service'
import { useAccountStore } from '~/shared/stores/AccountStore'
import type { IUserAccount } from '~/types/common.types'

const nullToEmptyString = (val: unknown) => (val === null ? '' : val)

const schema = z.object({
	about: z.preprocess(nullToEmptyString, z.string().optional()),
	displayName: z.preprocess(nullToEmptyString, z.string()),
	email: z.preprocess(nullToEmptyString, z.string().email()),
	telegramUsername: z.preprocess(nullToEmptyString, z.string().optional())
})

type Schema = z.output<typeof schema>

const accountStore = useAccountStore()

const state = reactive<Schema>({
	about: accountStore.account.about,
	email: accountStore.account.email!,
	displayName: accountStore.account.displayName!,
	telegramUsername: accountStore.account.telegramUsername
})

watch(
	() => accountStore.account,
	() => {
		state.about = accountStore.account.about
		state.telegramUsername = accountStore.account.telegramUsername
	}
)
const toast = useToast()

const { isLoading, mutate } = useMutation({
	mutationFn: (data: UpdateAccountDto) => AccountService.updateAccount(data),
	onSuccess: () => {
		toast.add({
			title: 'Аккаунт успешно обновлен',
			color: 'success'
		})
		accountStore.updateAccount(state as IUserAccount)
	},
	onError: error => {
		toast.add({
			description: error.message,
			color: 'error'
		})
	}
})
async function onSubmit(event: FormSubmitEvent<Schema>) {
	mutate(event.data)
}

const formattedUsername = computed({
	get() {
		return state.telegramUsername
	},
	set(value) {
		if (!state.telegramUsername?.startsWith('@')) {
			state.telegramUsername = '@' + state.telegramUsername?.replace(/^@+/, '')
		} else {
			state.telegramUsername = value
		}
	}
})

// const isChanged = computed(
// 	() =>
// 		state.email !== initialState.email ||
// 		state.displayName !== initialState.displayName ||
// 		state.about !== initialState.about
// )
</script>

<template>
	<UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
		<UFormField label="Имя" name="displayName">
			<UInput
				v-model="state.displayName"
				placeholder="Ваше имя "
				variant="soft"
				color="alt"
				class="w-full"
			/>
		</UFormField>
		<UFormField label="Email" name="email">
			<UInput
				v-model="state.email"
				placeholder="Введите ваш Email"
				variant="soft"
				color="alt"
				class="w-full"
			/>
		</UFormField>

		<UFormField label="Обо мне" name="about">
			<UTextarea
				v-model="state.about"
				placeholder="Введите описание"
				variant="soft"
				:rows="8"
				color="alt"
				class="w-full"
				autoresize
				:maxrows="8"
				:ui="{
					base: 'resize-none'
				}"
			/>
		</UFormField>

		<UFormField label="Telegram Username" name="telegramUsername">
			<UInput
				v-model="formattedUsername"
				placeholder="Введите ваш Telegram Username"
				variant="soft"
				color="alt"
				class="w-full"
			/>
		</UFormField>

		<div class="flex items-center w-full">
			<!-- <span v-if="isChanged" class="text-gray-500 text-sm mr-auto"
				>Есть несохраненные изменения</span
			> -->
			<UButton
				type="submit"
				:loading="isLoading"
				class="flex ml-auto self-end justify-center text-white px-10 py-2"
				color="primary"
			>
				Сохранить
			</UButton>
		</div>
	</UForm>
</template>

<style scoped></style>

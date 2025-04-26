import { defineStore } from 'pinia'

import { useAuthStore } from './AuthStore'
import { AccountService } from '~/modules/settings/profile/api/account.service'
import type { IUserAccount } from '~/types/common.types'

export const useAccountStore = defineStore('AccountStore', () => {
	const authStore = useAuthStore()
	const account = ref<IUserAccount>({
		telegramUsername: undefined,
		about: undefined,
		displayName: authStore.user?.displayName,
		email: authStore.user?.email
	})

	const updateAccount = (newAccount: IUserAccount) => {
		account.value = newAccount
	}

	const { data, fetch } = useQuery({
		queryFn: () => AccountService.getAccount()
	})

	onMounted(async () => {
		await fetch()
		updateAccount(data.value?.data as IUserAccount)
	})

	return {
		account,
		updateAccount
	}
})

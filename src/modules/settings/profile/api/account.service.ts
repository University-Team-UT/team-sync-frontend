import { API } from '~/shared/api/config'
import type { IUserAccount } from '~/types/common.types'

export interface UpdateAccountDto {
	displayName?: string
	email?: string
	about?: string
	telegramUsername?: string
}
export const AccountService = {
	async getAccount() {
		const { $privateApi } = useNuxtApp()
		return $privateApi.get<IUserAccount>(API.ACCOUNT.GET_ACCOUNT)
	},
	async updateAccount(dto: UpdateAccountDto) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.patch(API.ACCOUNT.UPDATE_ACCOUNT, dto)
	},
	async deleteAccount(password: string) {
		const { $privateApi } = useNuxtApp()
		return $privateApi.delete(API.ACCOUNT.DELETE_ACCOUNT, {
			params: { password }
		})
	},
	async changePassword(oldPassword: string, newPassword: string) {
		const { $privateApi } = useNuxtApp()
		return await $privateApi.post(API.AUTH.CHANGE_PASSWORD, {
			oldPassword,
			newPassword
		})
	}
}

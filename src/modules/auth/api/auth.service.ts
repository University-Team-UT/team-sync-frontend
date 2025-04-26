import {
	type IAuthData,
	removeTokenFromStorage,
	saveToStorage
} from './auth.helpers'
import { API } from '~/shared/api/config'

export const AuthService = {
	async login(email: string, password: string) {
		const { $publicApi } = useNuxtApp()
		const response = await $publicApi.post<IAuthData>(API.AUTH.LOGIN, {
			email,
			password
		})
		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async register(email: string, password: string, displayName: string) {
		const { $publicApi } = useNuxtApp()
		const response = await $publicApi.post<IAuthData>(API.AUTH.REGISTER, {
			email,
			password,
			displayName
		})
		if (response.data.accessToken) saveToStorage(response.data)
		return response.data
	},

	logout() {
		removeTokenFromStorage()
		localStorage.removeItem('user')
	}
}

import Cookies from 'js-cookie'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { ROUTES } from '../config/routes'

import { AuthService } from '~/modules/auth/api/auth.service'
import type { IUser } from '~/types/common.types'

export const initialUser: IUser = {
	id: undefined,
	displayName: undefined,
	email: undefined
}

export const useAuthStore = defineStore('auth', () => {
	const accessToken = ref<string>('')
	const user = ref<IUser>(initialUser)

	const isLoading = ref<boolean>(true)

	const userId = computed(() => user.value.id)

	const router = useRouter()
	const initializeAuth = () => {
		const token = Cookies.get('accessToken')
		const storedUser = localStorage.getItem('user')

		if (token && storedUser) {
			const NewUser = JSON.parse(storedUser)
			setAuthData(NewUser, token)
			isLoading.value = false
			return true
		} else {
			isLoading.value = false
			return false
		}
	}

	const setAuthData = (newUser: IUser | null, token: string) => {
		user.value = newUser === null ? initialUser : newUser
		accessToken.value = token

		if (newUser && token) {
			Cookies.set('accessToken', token)
			localStorage.setItem('user', JSON.stringify(newUser))
		} else {
			Cookies.remove('accessToken')
			localStorage.removeItem('user')
		}
	}

	const mutateAuthData = (newUserData: IUser) => {
		user.value = newUserData
		localStorage.setItem('user', JSON.stringify(newUserData))
	}

	const logout = (cb?: () => void) => {
		AuthService.logout()
		router.push(ROUTES.AUTH)
		setAuthData(initialUser, '')
		cb?.()
	}
	return {
		user,
		accessToken,
		isLoading,
		setAuthData,
		handleLogout: logout,
		initializeAuth,
		userId,
		mutateAuthData
	}
})

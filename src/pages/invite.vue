<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'

import { AuthService } from '~/modules/auth/api/auth.service'
import {
	loginSchema,
	type LoginSchema
} from '~/modules/auth/schemas/login.schema'
import {
	registerSchema,
	type RegisterSchema
} from '~/modules/auth/schemas/register.schema'
import { MembersService } from '~/modules/workspace/api/members.service'
import { ROUTES } from '~/shared/config/routes'
import { useAuthStore } from '~/shared/stores/AuthStore'

definePageMeta({
	layout: 'auth'
})
const route = useRoute()

const { data } = useQuery({
	queryFn: () =>
		MembersService.getInviteInfo(
			route.query['inv-id'] as string,
			route.query['w-id'] as string
		),
	onSuccess(data) {
		console.log(data.data)
	},
	enabled: true
})

const authStore = useAuthStore()
const loginState = reactive<Partial<LoginSchema>>({
	email: '',
	password: ''
})
const registerState = reactive<Partial<RegisterSchema>>({
	email: '',
	password: '',
	displayName: ''
})
const router = useRouter()
const { mutate: register, isLoading: isRLoading } = useMutation({
	mutationFn: (data: RegisterSchema) => {
		return AuthService.register(data.email, data.password, data.displayName)
	},
	onSuccess: data => {
		toast.add({
			title: 'Вы успешно авторизовались',
			color: 'success'
		})
		authStore.setAuthData(data.user, data.accessToken)
		mutate(data!.user!.id!)
		router.push(ROUTES.WORKSPACE(workspaceId).BASE)
	},
	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})

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
		mutate(data!.user!.id!)
		router.push(ROUTES.WORKSPACE(workspaceId).BASE)
	},
	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})

const workspaceId = route.query['w-id'] as string

const { mutate } = useMutation({
	mutationFn: (inviteId: string) =>
		MembersService.acceptInvite(inviteId, workspaceId),

	onSuccess: () => {
		toast.add({
			title: 'Вы успешно добавлены в рабочее пространство',
			color: 'success'
		})
	},

	onError: err => {
		toast.add({
			title: 'Ошибка',
			description: err.message,
			color: 'error'
		})
	}
})
const toast = useToast()
async function onSubmitLogin(event: FormSubmitEvent<LoginSchema>) {
	login(event.data)
}
async function onSubmitRegister(event: FormSubmitEvent<RegisterSchema>) {
	register(event.data)
}

const items = [
	{
		label: 'Регистрация',
		description:
			"Make changes to your account here. Click save when you're done.",
		icon: 'i-lucide-user',
		slot: 'account' as const
	},
	{
		label: 'Вход',
		description:
			"Change your password here. After saving, you'll be logged out.",
		icon: 'i-lucide-lock',
		slot: 'password' as const
	}
]

// const {} = useMutation()
</script>

<template>
	<div class="flex flex-col justify-center items-center h-screen w-full">
		<div
			v-if="!authStore.user.id"
			class="mx-auto bg-root-700 p-6 min-size-50 rounded-lg shadow-lg"
		>
			<div class="flex items-center mb-4">
				<h1 class="text-2xl font-semibold text-white">
					<span class="block font-bold">Пользователь</span>
					<span class="text-xl">{{ data?.data.user.displayName }}</span>
				</h1>
			</div>

			<div class="border-t border-white/30 pt-4">
				<h2 class="text-lg text-white font-semibold">
					<span class="font-bold">Пригласил вас в рабочее пространство:</span>
					<span class="italic">{{ data?.data.workbench.title }}</span>
				</h2>
			</div>

			<div class="mt-6 flex justify-end text-white opacity-75">
				<UButton variant="soft" class="text-lg">Принять приглашение</UButton>
			</div>
		</div>
		<div
			v-else
			class="mx-auto bg-root-700 p-6 min-size-50 rounded-lg shadow-lg"
		>
			<div class="flex items-center mb-4">
				<h1 class="text-2xl font-semibold text-white">
					<span class="block font-bold">Пользователь</span>
					<span class="text-xl">{{ data?.data.user.displayName }}</span>
				</h1>
			</div>

			<div class="border-t border-white/30 pt-4">
				<h2 class="text-lg text-white font-semibold">
					<span class="font-bold">Пригласил вас в рабочее пространство:</span>
					<span class="italic">{{ data?.data.workbench.title }}</span>
				</h2>
			</div>
			<div>
				<h1 class="text-2xl font-semibold text-white">
					<span class="block font-bold"
						>Для начала авторизуйтесь в сервисе</span
					>
				</h1>
				<UTabs
					:items="items"
					variant="link"
					class="gap-4 w-full"
					:ui="{ trigger: 'flex-1' }"
				>
					<template #account>
						<UForm
							:schema="registerSchema"
							:state="registerState"
							class="space-y-4 mt-5 flex flex-col"
							@submit="onSubmitRegister"
						>
							<UFormField label="Name" name="displayName">
								<UInput
									v-model="registerState.email"
									class="w-full"
									variant="soft"
								/>
							</UFormField>
							<UFormField label="Email" name="email">
								<UInput
									v-model="registerState.email"
									class="w-full"
									variant="soft"
								/>
							</UFormField>

							<UFormField label="Password" name="password">
								<UInput
									v-model="registerState.password"
									type="password"
									class="w-full"
									variant="soft"
								/>
							</UFormField>

							<UButton type="submit" class="ml-auto" :loading="isRLoading">
								Зарегистрироваться
							</UButton>
						</UForm>
					</template>

					<template #password>
						<UForm
							:schema="loginSchema"
							:state="loginState"
							class="space-y-4 mt-5 flex flex-col"
							@submit="onSubmitLogin"
						>
							<UFormField label="Email" name="email">
								<UInput
									v-model="loginState.email"
									class="w-full"
									variant="soft"
								/>
							</UFormField>

							<UFormField label="Password" name="password">
								<UInput
									v-model="loginState.password"
									type="password"
									class="w-full"
									variant="soft"
								/>
							</UFormField>

							<UButton type="submit" class="ml-auto" :loading="isLoading">
								Войти
							</UButton>
						</UForm>
					</template>
				</UTabs>
			</div>
		</div>
	</div>
</template>

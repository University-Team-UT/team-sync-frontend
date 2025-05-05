<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

import ColorModeButton from '../settings/theme/ColorModeButton.vue'
import { ROUTES } from '~~/src/shared/config/routes'

import LanguageSwitchButtonGroup from './LanguageSwitchButtonGroup.vue'
import AvatarPic from '~/shared/components/AvatarPic.vue'
import { useAuthStore } from '~/shared/stores/AuthStore'

const { handleLogout } = useAuthStore()

const { t } = useI18n()
const items = ref<DropdownMenuItem[][]>([
	[
		{
			type: 'label',
			slot: 'profile' as const
		}
	],
	[
		{
			label: t('avatar.dropdown.settings'),
			icon: 'i-lucide-cog',
			to: ROUTES.SETTINGS.PROFILE
		},
		{
			label: t('avatar.dropdown.logout'),
			icon: 'lucide:door-open',
			onSelect: () => {
				handleLogout()
			}
		},
		{
			label: t('avatar.dropdown.theme'),
			icon: 'lucide:moon',
			type: 'label',
			slot: 'theme' as const
		}
	],
	[
		{
			class: 'mt-2',
			label: t('avatar.dropdown.help'),
			icon: 'lucide:circle-help',
			to: 'https://github.com/nuxt/ui',
			target: '_blank'
		},
		{
			label: t('avatar.dropdown.support'),
			icon: 'lucide:message-circle-code',
			to: '/components/dropdown-menu'
		},
		{
			label: t('avatar.dropdown.suggestion'),
			icon: 'lucide:lightbulb'
		},
		{
			label: t('avatar.dropdown.keys'),
			icon: 'lucide:keyboard'
		},
		{
			label: t('avatar.dropdown.partners'),
			icon: 'material-symbols:groups-sharp'
		},
		{ class: 'hover:bg-transparent', slot: 'language', type: 'label' }
	]
])

const auth = useAuthStore()
</script>

<template>
	<UDropdownMenu
		:content="{
			sideOffset: 16
		}"
		:items="items"
		:ui="{
			item: 'text-sm font-bold cursor-pointer mb-2',
			content: 'w-67 p-1 bg-root-900  text-2xl'
		}"
	>
		<slot />
		<template #theme-trailing>
			<ColorModeButton />
		</template>
		<template #profile-leading>
			<div class="w-full flex items-center gap-2">
				<AvatarPic />
				<div class="flex flex-col gap-1">
					<b>{{ auth.user.displayName }}</b>
					<span class="font-medium text-root-600">{{ auth.user.email }}</span>
				</div>
			</div>
		</template>
		<template #language>
			<LanguageSwitchButtonGroup />
		</template>
	</UDropdownMenu>
</template>

<style scoped></style>

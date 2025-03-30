<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

import LanguageSwitchButtonGroup from './LanguageSwitchButtonGroup.vue'
import AvatarPic from '~/shared/components/AvatarPic.vue'

const items = ref<DropdownMenuItem[][]>([
	[
		{
			type: 'label',
			slot: 'profile' as const
		}
	],
	[
		{
			label: 'Settings',
			icon: 'i-lucide-cog'
		},
		{
			label: 'Log out',
			icon: 'lucide:door-open'
		},
		{
			label: 'Dark-theme',
			icon: 'lucide:moon',
			type: 'label',
			slot: 'theme' as const
		}
	],
	[
		{
			class: 'mt-2',
			label: 'Help center',
			icon: 'lucide:circle-help',
			to: 'https://github.com/nuxt/ui',
			target: '_blank'
		},
		{
			label: 'Technical support',
			icon: 'lucide:message-circle-code',
			to: '/components/dropdown-menu'
		},
		{
			label: 'Suggestions',
			icon: 'lucide:lightbulb'
		},
		{
			label: 'Hot keys',
			icon: 'lucide:keyboard'
		},
		{
			label: 'For partners',
			icon: 'material-symbols:groups-sharp'
		},
		{ class: 'hover:bg-transparent', slot: 'language', type: 'label' }
	]
])
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
					<b>User Name</b>
					<span class="font-medium text-root-600">usersEmail@gmail.com</span>
				</div>
			</div>
		</template>
		<template #language>
			<LanguageSwitchButtonGroup />
		</template>
	</UDropdownMenu>
</template>

<style scoped></style>

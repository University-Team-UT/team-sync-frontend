<script lang="ts" setup>
import type { StepperItem } from '@nuxt/ui'

import AccentColorTemplate from '~/shared/components/WelcomeTemplates/AccentColorTemplate.vue'
import InvitationTemplate from '~/shared/components/WelcomeTemplates/InvitationTemplate.vue'
import StartingTemplate from '~/shared/components/WelcomeTemplates/StartingTemplate.vue'
import ThemeTemplate from '~/shared/components/WelcomeTemplates/ThemeTemplate.vue'
import WorkspaceTemplate from '~/shared/components/WelcomeTemplates/WorkspaceTemplate.vue'

definePageMeta({
	layout: 'auth'
})

const items: StepperItem[] = [
	{
		slot: 'Starting',
		title: 'Начало',
		icon: 'lucide:handshake'
	},
	{
		slot: 'Theme',
		title: 'Тема',
		icon: 'lucide:stretch-vertical'
	},
	{
		slot: 'AccentColor',
		title: 'Акцентный Цвет',
		icon: 'lucide:palette'
	},
	{
		slot: 'Workspace',
		title: 'Проект',
		icon: 'lucide:proportions'
	},
	{
		slot: 'Invitation',
		title: 'Приглашение',
		icon: 'lucide:mail'
	}
]

const active = ref(0)

const nextStep = () => {
	active.value = (active.value + 1) % items.length
}
</script>

<template>
	<div class="flex flex-col bg-root-900 h-screen z-1">
		<UStepper
			v-model="active"
			:disabled="true"
			:items="items"
			class="flex min-w-2/5 m-auto p-10 rounded-xl relative"
		>
			<template #Starting>
				<StartingTemplate @next-step="nextStep" />
			</template>
			<template #Theme>
				<ThemeTemplate @next-step="nextStep" />
			</template>
			<template #AccentColor>
				<AccentColorTemplate @next-step="nextStep" />
			</template>
			<template #Workspace>
				<WorkspaceTemplate @next-step="nextStep" />
			</template>
			<template #Invitation>
				<InvitationTemplate @next-step="nextStep" />
			</template>
		</UStepper>
	</div>
</template>

<style scoped></style>

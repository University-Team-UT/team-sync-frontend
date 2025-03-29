<script setup lang="ts">
import RoleItem from './RoleItem.vue'
import type { IRoleItemProps } from './types'
import { BaseRoles } from '~/types/common.types'

const { t } = useI18n()

const roleItems = ref<IRoleItemProps[]>([
	{
		role: BaseRoles.SUPER_ADMIN,
		icon: 'lucide:crown',
		desc: /* t('roles_super-admin') */ 'super-admin'
	},
	{
		role: BaseRoles.ADMIN,
		icon: 'lucide:flame',
		desc: /* t('roles_super-admin') */ 'admin'
	},
	{
		role: BaseRoles.PARTICIPANT,
		icon: 'lucide:handshake',
		desc: /* t('roles_super-admin') */ 'remlorem loremloremloremlorem'
	}
])
</script>

<template>
	<div class="flex gap-8">
		<UInput
			id="email"
			:placeholder="t('invite.tabs.mail')"
			size="lg"
			class="w-full"
			variant="soft"
		/>
		<UPopover
			:content="{
				align: 'end',
				side: 'bottom',
				sideOffset: 8
			}"
		>
			<UButton
				:ui="{
					base: 'px-6 '
				}"
				icon="lucide:handshake"
				:label="t('invite.tabs.role')"
				color="neutral"
				variant="soft"
			/>

			<template #content>
				<div class="max-w-56 m-4 flex flex-col">
					<div class="flex flex-col p-2 gap-1 items-center justify-center">
						<RoleItem v-for="item in roleItems" :key="item.icon" :item="item" />
					</div>
				</div>
			</template>
		</UPopover>
		<UButton icon="lucide:x" color="neutral" variant="link" />
	</div>
	<UButton
		icon="lucide:circle-fading-plus"
		size="md"
		class="text-root-400 self-start"
		variant="link"
		>{{ t('invite.tabs.more') }}</UButton
	>
</template>

<style scoped></style>

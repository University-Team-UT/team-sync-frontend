<script setup lang="ts">
import RoleItem from './RoleItem.vue'
import { WorkbenchRole } from '~/types/common.types'

const { t } = useI18n()

const emit = defineEmits<{
	setRole: [role: WorkbenchRole]
}>()

const roleItems = [
	{
		role: WorkbenchRole.ADMIN,
		icon: 'lucide:crown',
		desc: t('roles.admin')
	},
	{
		role: WorkbenchRole.WORKER,
		icon: 'lucide:flame',
		desc: t('roles.worker')
	},
	{
		role: WorkbenchRole.VISITOR,
		icon: 'lucide:handshake',
		desc: t('roles.visitor')
	}
]

const isOpen = ref(false)
const currentRole = ref(WorkbenchRole.WORKER)

const onRoleItemClick = (role: WorkbenchRole) => {
	emit('setRole', role)
	currentRole.value = role
	isOpen.value = false
}
const selectedRole = computed(() => {
	return roleItems.find(item => item.role === currentRole.value)
})
</script>

<template>
	<UPopover
		v-model:open="isOpen"
		:content="{
			align: 'end',
			side: 'bottom',
			sideOffset: 8
		}"
	>
		<UButton
			:ui="{ base: 'px-6' }"
			:icon="selectedRole!.icon"
			:label="selectedRole!.desc"
			color="neutral"
			variant="soft"
			class="w-1/2"
		/>

		<template #content>
			<div class="max-w-56 m-4 flex flex-col">
				<div class="flex flex-col p-2 gap-1 items-center justify-center">
					<RoleItem
						v-for="item in roleItems"
						:key="item.role"
						:item="item"
						@click="onRoleItemClick(item.role)"
					/>
				</div>
			</div>
		</template>
	</UPopover>
</template>

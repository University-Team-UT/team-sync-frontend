<script setup lang="ts">
import { MembersService } from '../workspace/api/members.service'

import { useAppStore } from '~/shared/stores/AppStore'

const { initialMemberId = undefined } = defineProps<{
	initialMemberId?: string | undefined
}>()

const items = ref<{ label: string; value: string | null }[]>([
	{ label: 'unassigned', value: null }
])

const appStore = useAppStore()

const emit = defineEmits<{ updateExecutorId: [value: string | undefined] }>()

useQuery({
	queryFn: () =>
		MembersService.getWorkbenchMembers(appStore.currentWorkspace!.id),
	onSuccess: data => {
		data.data.forEach(member => {
			items.value.push({
				label: member.user.displayName!,
				value: member!.user!.id!
			})
		})
		initialMember.value = items.value.find(
			item => item.value === initialMemberId
		)
	},
	enabled: true
})
const initialMember = ref<{ value: string; label: string } | undefined>(
	undefined
)

const selectedValue = ref<{ value: string; label: string } | undefined>(
	initialMember
)

watch(selectedValue, val => {
	if (val?.value !== initialMemberId) {
		emit('updateExecutorId', val?.value)
	}
})
const slots = defineSlots<{
	default?: () => any
}>()
</script>

<template>
	<UPopover :content="{ side: 'bottom', align: 'end' }">
		<div v-if="slots.default">
			<slot></slot>
		</div>

		<UButton v-else icon="lucide:user" size="xs" variant="soft">{{
			selectedValue?.label || 'unassigned'
		}}</UButton>

		<template #content>
			<UCommandPalette
				v-model="selectedValue"
				placeholder="Search labels..."
				:groups="[{ id: 'members', items }]"
				:ui="{ input: '[&>input]:h-8 [&>input]:text-sm' }"
			/>
		</template>
	</UPopover>
</template>

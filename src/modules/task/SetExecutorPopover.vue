<script setup lang="ts">

import { MembersService } from '../workspace/api/members.service'

import { useAppStore } from '~/shared/stores/AppStore'

const items = ref([])

const appStore = useAppStore()

const emit = defineEmits<{ updateExecutorId: [value: string | undefined] }>()

useQuery({
	queryFn: () =>
		MembersService.getWorkbenchMembers(appStore.currentWorkspace!.id),
	onSuccess: data => {
		items.value = data.data.map(member => {
			return {
				label: member.user.displayName!,
				value: member.user.id!
			}
		})
	},
	enabled: true
})

const selectedValue = ref<{ value: string; label: string } | undefined>(
	undefined
)

watch(selectedValue, val => {
	emit('updateExecutorId', val?.value)
})

</script>

<template>
	<UPopover :content="{ side: 'bottom', align: 'end' }">
		<slot></slot>

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

<script setup lang="ts">
import { Priority } from '~/types/common.types'

const items = ref([
	{
		label: 'Заморожен',
		value: Priority.FROZEN
	},
	{
		label: 'Высокий',
		value: Priority.HIGH
	},
	{
		label: 'Низкий',
		value: Priority.LOW
	},
	{
		label: 'Средний',
		value: Priority.MEDIUM
	}
])

const emit = defineEmits<{ updatePriority: [value: Priority | undefined] }>()
const selectedValue = ref<{ value: string; label: string } | undefined>(
	undefined
)

watch(selectedValue, val => {
	emit('updatePriority', val?.value as Priority)
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

<script setup lang="ts">
import { ref } from 'vue'

import { TaskService } from '../../api/task.service'
import type { ISubtask } from '../../lib/types'
import { useTaskStore } from '../../TaskStore'

const props = defineProps<{ item: ISubtask }>()
const toast = useToast()
const taskStore = useTaskStore()

const isChecked = ref(props.item.isCompleted)

const { mutate } = useMutation({
	mutationFn: (value: boolean) =>
		TaskService.toggleSubtask(props.item.id, value),
	onSuccess() {
		taskStore.getColumns()
	},
	onError: err => {
		toast.add({
			title: 'Error',
			description: err.message,
			color: 'error'
		})
	}
})

const handleChange = (value: boolean) => {
	mutate(value)
}
</script>

<template>
	<label
		:class="[
			'inline-flex w-full items-center gap-2 cursor-pointer select-none'
		]"
	>
		<UCheckbox
			v-model="isChecked"
			:ui="{ base: 'rounded-full' }"
			@update:model-value="e => handleChange(e as boolean)"
		/>
		<span :class="['text-md', isChecked && 'line-through']">{{
			item.title
		}}</span>
	</label>
</template>

<style scoped></style>

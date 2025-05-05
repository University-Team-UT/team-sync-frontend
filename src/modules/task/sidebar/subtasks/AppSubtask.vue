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

const { mutate: deleteSubtask } = useMutation({
	mutationFn: () => TaskService.removeSubtask(props.item.id),
	onSuccess() {
		toast.add({
			title: 'created',
			color: 'success'
		})
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

const { mutate: updateSubtask } = useMutation({
	mutationFn: () =>
		TaskService.updateSubtask(props.item.id, { title: value.value }),
	onSuccess() {
		toast.add({
			title: 'updated',
			color: 'success'
		})
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

const handleUpdate = async () => {
	if (value.value.length > 0 && value.value !== props.item.title) {
		await updateSubtask()
		isEditing.value = false
	}
}

const isEditing = ref(false)

const value = ref(props.item.title)
</script>

<template>
	<div class="flex items-center w-full justify-between gap-2">
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
			<span
				v-if="!isEditing"
				:class="['text-md', isChecked && 'line-through']"
				>{{ item.title }}</span
			>
			<UInput v-else v-model="value" size="sm" variant="soft" class="w-full" />
		</label>
		<UButton
			v-if="!isEditing"
			variant="ghost"
			size="sm"
			icon="lucide:pen"
			@click="isEditing = true"
		/>
		<UButton
			v-if="isEditing"
			variant="ghost"
			size="sm"
			icon="lucide:x"
			@click="isEditing = false"
		/>
		<UButton
			v-if="isEditing"
			variant="ghost"
			size="sm"
			icon="lucide:check"
			color="success"
			@click="handleUpdate"
		/>
		<UButton
			v-if="!isEditing"
			variant="ghost"
			size="sm"
			icon="lucide:trash"
			@click="deleteSubtask"
		/>
	</div>
</template>

<style scoped></style>

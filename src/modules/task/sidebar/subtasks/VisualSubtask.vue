<script setup lang="ts">
import type { ISubtask } from '../../lib/types'

defineProps<{ subtask: ISubtask }>()
</script>

<template>
	<div class="flex gap-1">
		<UButton
			:icon="subtask.isCompleted ? 'lucide:check' : 'lucide:circle'"
			variant="soft"
			size="xs"
		/>
		<h1 :class="[subtask.isCompleted ? 'line-through' : '']">
			{{ subtask.title }}
		</h1>
	</div>
</template>

<style scoped></style>

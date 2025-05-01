<script setup lang="ts">
import AppTask from './AppTask.vue'
import type { ITask } from './lib/types'

defineProps<{ tasks: ITask[] }>()
</script>

<template>
	<AppTask v-for="task in tasks" :key="task.id" :task="task" />
</template>

<style scoped></style>

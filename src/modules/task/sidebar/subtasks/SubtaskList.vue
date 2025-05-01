<script setup lang="ts">
import { TaskKey } from '../../lib/keys'

import AppSubtask from './AppSubtask.vue'
import CreateSubtask from './CreateSubtask.vue'

const { isAppTask = false } = defineProps<{ isAppTask?: boolean }>()

const isShown = ref(true)
const injected = inject(TaskKey)
</script>

<template>
	<div class="flex flex-col gap-6">
		<div
			v-if="!isAppTask"
			class="flex gap-2 items-center cursor-pointer"
			@click="isShown = !isShown"
		>
			<UIcon name="lucide:chevron-right" />
			<span>Подзадачи</span>
		</div>
		<div v-if="isShown" class="flex flex-col gap-6">
			<div
				v-for="item in injected!.subtasks.sort(
					(a, b) =>
						new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
				)"
				:key="item.id"
				class="flex gap-2 items-center"
			>
				<AppSubtask :item="item" />
			</div>
			<CreateSubtask v-if="!isAppTask" />
		</div>
	</div>
</template>

<style scoped></style>

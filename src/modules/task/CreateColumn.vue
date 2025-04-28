<script setup lang="ts">
import { ColumnService } from './api/column.service'
import { useTaskStore } from './TaskStore'
import { useAppStore } from '~/shared/stores/AppStore'

const color = ref('#00C16A')

const chip = computed(() => ({ backgroundColor: color.value }))

const title = ref('')

const isCreating = ref(false)
const toast = useToast()
const appStore = useAppStore()
const taskStore = useTaskStore()

const { mutate, isLoading } = useMutation({
	mutationFn: () =>
		ColumnService.createColumn(
			appStore.currentBoard!.id,
			title.value,
			color.value
		),
	onSuccess: () => {
		toast.add({
			title: 'Колонка создана',
			color: 'success'
		})
		taskStore.getColumns()
		isCreating.value = false
		title.value = ''
	},
	onError: err => {
		toast.add({
			title: err.message,
			color: 'error'
		})
	}
})
</script>

<template>
	<div class="flex flex-col gap-1 w-fit">
		<div
			:class="[
				'rounded-sm border-dashed p-1 w-fit  hover:bg-root-900/50 flex gap-1 items-center transition-colors',
				isCreating ? 'bg-root-900/50' : 'bg-transparent'
			]"
		>
			<UIcon name="lucide:plus" />
			<UInput
				v-model="title"
				autofocus
				variant="none"
				placeholder="Создать колонку"
				@click="isCreating = true"
				:disabled="isLoading"
			/>
			<UPopover>
				<UButton color="neutral" variant="soft">
					<template #leading>
						<span :style="chip" class="size-3 rounded-full" />
					</template>
				</UButton>

				<template #content>
					<UColorPicker v-model="color" class="p-2" :disabled="isLoading" />
				</template>
			</UPopover>
		</div>
		<div v-if="isCreating" class="flex justify-between">
			<UButton
				icon="lucide:x"
				variant="soft"
				size="xs"
				color="error"
				@click="isCreating = false"
			/>
			<UButton
				icon="lucide:check"
				variant="soft"
				size="xs"
				color="success"
				@click="mutate"
				:loading="isLoading"
			/>
		</div>
	</div>
</template>

<style scoped></style>

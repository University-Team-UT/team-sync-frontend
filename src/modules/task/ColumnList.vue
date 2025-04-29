<script setup lang="ts">
import type { SlotItemMapArray, Swapy } from 'swapy'
import { createSwapy, utils } from 'swapy'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

import { ColumnService } from './api/column.service'
import ColumnDropdown from './ColumnDropdown.vue'
import CreateColumn from './CreateColumn.vue'
import { useTaskStore } from './TaskStore'

const taskStore = useTaskStore()

const container = ref<HTMLElement | null>()
const swapy = ref<Swapy | null>(null)
const items = computed(() => taskStore.currentColumns)

const itemToChangePosition = reactive<{
	id: string | null
	newPos: number | null
}>({
	id: null,
	newPos: null
})
const toast = useToast()

const { mutate } = useMutation({
	mutationFn: (data: { id: string; newPos: number }) =>
		ColumnService.updatePosition(data.id, data.newPos),
	onSuccess: () => {
		toast.add({
			title: 'Pos update',
			color: 'success'
		})
	},
	onError: err => {
		toast.add({
			title: err.message,
			color: 'error'
		})
	}
})

const slotItemMap = ref<SlotItemMapArray>([
	...utils.initSlotItemMap(items.value, 'position')
])
watch(
	items,
	() =>
		utils.dynamicSwapy(
			swapy.value,
			items.value,
			'position',
			slotItemMap.value,
			(value: SlotItemMapArray) => (slotItemMap.value = value)
		),
	{ deep: true }
)
const slottedItems = computed(() =>
	utils.toSlottedItems(items.value, 'position', slotItemMap.value)
)
const isDragging = ref(false)

watch(isDragging, async () => {
	if (isDragging.value === false) {
		if (itemToChangePosition.id && itemToChangePosition.newPos !== null) {
			const currentItem = items.value.find(
				col => col.id === itemToChangePosition.id
			)

			if (
				currentItem &&
				Number(currentItem.position) === itemToChangePosition.newPos
			) {
				itemToChangePosition.id = null
				itemToChangePosition.newPos = null
				return
			}

			await mutate({
				id: itemToChangePosition.id,
				newPos: +itemToChangePosition.newPos
			})
		}
	}
})
onMounted(() => {
	if (container.value) {
		swapy.value = createSwapy(container.value, {
			manualSwap: true,
			dragAxis: 'x',
			animation: 'dynamic'
			// autoScrollOnDrag: true,
			// enabled: true,
			// dragOnHold: true
		})
		swapy.value.onSwap(event => {
			requestAnimationFrame(() => {
				slotItemMap.value = event.newSlotItemMap.asArray
				itemToChangePosition.newPos = +event.toSlot
			})
		})

		swapy.value.onSwapStart(() => {
			isDragging.value = true
		})
		swapy.value.onSwapEnd(() => {
			isDragging.value = false
		})
	}
})

onUnmounted(() => {
	swapy.value?.destroy()
})
</script>
<template>
	<div ref="container" class="grid gap-1 grid-cols-6">
		<div v-for="i in slottedItems" :key="i.slotId" :data-swapy-slot="i.slotId">
			<div
				:key="i.itemId"
				class="flex flex-col bg-root-800 border-t-2 rounded-t-sm w-full gap-4 scroll-auto"
				:style="{
					borderColor: i.item?.color
				}"
				:data-swapy-item="i.itemId"
				@mousedown="itemToChangePosition.id = i.item!.id"
			>
				<div
					class="flex py-2 gap-1 px-1 justify-between rounded-t-sm bg-root-700 items-center"
				>
					<div class="w-fit cursor-grab">
						<UButton
							icon="lucide:grip-vertical"
							size="sm"
							variant="link"
							class="cursor-grab"
						/>
					</div>
					<div class="flex-1" data-swapy-no-drag>
						<span>{{ i.item?.title }}</span>
					</div>
					<ColumnDropdown
						:title="i.item!.title"
						:id="i.item!.id"
						:color="i.item!.color"
					>
						<UButton
							icon="lucide:ellipsis-vertical"
							data-swapy-no-drag
							variant="soft"
							size="xs"
						/>
					</ColumnDropdown>
				</div>
				<UButton
					data-swapy-no-drag
					label="Добавить задачу"
					variant="solid"
					class="w-full bg-root-700 rounded-sm text-primary-400 px-4 py-2 hover:bg-root-700/50"
				/>
			</div>
		</div>
		<CreateColumn />
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
import { TagsService } from './api/tags.service'
import AppTag from './AppTag.vue'
import ColorCircle from './ColorCircle.vue'
import { tagsKey } from './lib/keys'
import { tagsColors } from './lib/tagsColors'
import type { TagColor } from './types'
import { useAppStore } from '~/shared/stores/AppStore'

const appStore = useAppStore()
const toast = useToast()

const isCreating = ref<boolean>(false)
const currentColor = ref<TagColor>(tagsColors[0])
const input = ref<string>('')

const cancelCreation = () => {
	isCreating.value = false
	currentColor.value = tagsColors[0]
	input.value = ''
}

const injected = inject(tagsKey)

const { mutate, isLoading } = useMutation({
	mutationFn: () =>
		TagsService.createTag(
			appStore.currentWorkspace!.id,
			input.value,
			currentColor.value.primary
		),
	onSuccess: () => {
		toast.add({
			title: 'Создан новый тэг',
			color: 'success'
		})
		injected?.()
		cancelCreation()
	},
	onError: err => {
		toast.add({
			title: 'Не удалось создать тэг',
			description: `${err.message}`,
			color: 'error'
		})
	}
})
</script>

<template>
	<div class="flex flex-col justify-end gap-2">
		<UButton
			icon="lucide:circle-plus"
			class="self-end mt-2"
			@click="isCreating = true"
			>Создать тэг</UButton
		>
		<div v-if="isCreating" class="items-center gap-4 flex justify-between">
			<UPopover
				:content="{
					align: 'start'
				}"
			>
				<div
					class="flex gap-1 items-center hover:bg-root-800 transition-colors w-fit p-1 rounded-lg"
				>
					<ColorCircle :color="currentColor" />
					<UIcon name="lucide:chevron-down" size="10" />
				</div>

				<template #content>
					<div class="p-2 flex flex-col gap-1 cursor-default">
						<span class="text-xs font-bold">Поменять цвет тэга</span>
						<div class="grid grid-cols-6 gap-1">
							<ColorCircle
								v-for="color in tagsColors"
								:key="color.primary"
								:color="color"
								:is-active="currentColor.primary === color.primary"
								@click="currentColor = color"
							/>
						</div>
					</div>
				</template>
			</UPopover>
			<UInput
				v-model="input"
				variant="soft"
				class="flex-1"
				maxlength="25"
				placeholder="Введите название для тэга"
			/>
			<AppTag :color="currentColor" :title="input" />
			<div class="flex items-center gap-1">
				<UButton icon="lucide:arrow-left" variant="soft" @click="cancelCreation"
					>Отменить</UButton
				>
				<UButton :loading="isLoading" variant="ghost" @click="mutate"
					>Save</UButton
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { type ITagsDto, TagsService } from './api/tags.service'
import AppTag from './AppTag.vue'
import { tagsKey } from './lib/keys'
import UpdateTag from './UpdateTag.vue'

const editingId = ref<string>('')

defineProps<{ tags: ITagsDto[] }>()

const clearEditingId = () => (editingId.value = '')

const toast = useToast()
const injected = inject(tagsKey)

const { mutate } = useMutation({
	mutationFn: (id: string) => TagsService.deleteTag(id),
	onSuccess: () => {
		toast.add({
			title: 'Тэг удален',
			color: 'success'
		})
		injected?.()
	},
	onError: err => {
		toast.add({
			title: 'Не удалось удалить тэг',
			description: `${err.message}`,
			color: 'error'
		})
	}
})
</script>

<template>
	<div class="flex flex-col gap-1 mt-5">
		<div v-for="item in tags" :key="item.id">
			<UpdateTag
				v-if="item.id === editingId"
				:id="item.id"
				:title="item.title"
				:color="getTagColorByPrimary(item.color)"
				@clear-id="clearEditingId"
			/>
			<div v-else class="w-full flex justify-between gap-4">
				<AppTag :title="item.title" :color="getTagColorByPrimary(item.color)" />
				<div class="flex items-center gap-1">
					{{ new Date(item.createdAt).toLocaleDateString('ru-RU') }}
					<UButton
						icon="lucide:pen"
						variant="ghost"
						size="sm"
						@click="editingId = item.id"
					/>
					<UButton
						icon="lucide:trash"
						variant="ghost"
						size="sm"
						@click="mutate(item.id)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

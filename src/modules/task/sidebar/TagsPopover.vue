<script lang="ts" setup>
import { TaskKey } from '../lib/keys'
import { useTaskStore } from '../TaskStore'

import {
	type ITagsDto,
	TagsService
} from '~/modules/workspace/tags/api/tags.service'
import AppTag from '~/modules/workspace/tags/AppTag.vue'
import { useAppStore } from '~/shared/stores/AppStore'

const appStore = useAppStore()
const taskStore = useTaskStore()
const tags = ref<ITagsDto[]>([])
const toast = useToast()

const { data, fetch: fetchTags } = useQuery({
	queryFn: () =>
		TagsService.getTagsByWorkbenchId(appStore.currentWorkspace!.id),
	onSuccess: data => {
		tags.value = data.data
	},

	enabled: true
})

const tagsInSearchTerms = computed(() =>
	tags.value.filter(tag => tag.title.includes(search.value))
)

const { mutate: assignTag } = useMutation({
	mutationFn: (tagId: string) =>
		TagsService.assignTag(injected!.value.id, tagId),
	onSuccess: () => {
		taskStore.getColumns()
	},
	onError: error => {
		toast.add({
			title: error.message,
			color: 'error'
		})
	}
})

const { mutate: unAssignTag } = useMutation({
	mutationFn: (tagId: string) =>
		TagsService.unAssignTag(injected!.value.id, tagId),
	onSuccess: () => {
		taskStore.getColumns()
	},
	onError: error => {
		toast.add({
			title: error.message,
			color: 'error'
		})
	}
})

const search = ref('')

const { mutate, isLoading } = useMutation({
	mutationFn: (color: string) =>
		TagsService.createTag(appStore.currentWorkspace!.id, search.value, color),
	onSuccess: () => {
		toast.add({
			title: 'Создан новый тэг',
			color: 'success'
		})
		fetchTags?.()
		taskStore.getColumns()
	},
	onError: err => {
		toast.add({
			title: 'Не удалось создать тэг',
			description: `${err.message}`,
			color: 'error'
		})
	}
})

const createTag = () => {
	const color = generateTagColor()
	mutate(color.primary)
}

const injected = inject(TaskKey)
</script>
<template>
	<UPopover>
		<div
			class="w-full flex items-center flex-wrap justify-start bg-neutral-800 rounded-lg p-2"
		>
			<div
				v-for="tag in injected!.tags"
				:key="tag.id"
				class="group flex items-center z-40"
			>
				<AppTag
					:tag="tag"
					:title="tag.title"
					:color="getTagColorByPrimary(tag.color)"
					class=""
				/>
				<UButton
					icon="lucide:x"
					size="xs"
					variant="soft"
					color="error"
					class="opacity-0 group-hover:opacity-100 transition-all z-50 duration-300 ease-in-out"
					@click.stop="unAssignTag(tag.id)"
				/>
			</div>
		</div>

		<template #content>
			<div class="w-56 min-h-26 p-1 flex flex-col gap-1">
				<UInput v-model="search" variant="soft" placeholder="Search" />
				<div class="flex flex-wrap gap-1 items-start">
					<div
						v-for="tag in tagsInSearchTerms"
						:key="tag.id"
						@click="assignTag(tag.id)"
					>
						<AppTag
							v-if="!injected!.tags.map(t => t.id).includes(tag.id)"
							:tag="tag"
							:title="tag.title"
							:color="getTagColorByPrimary(tag.color)"
						/>
					</div>

					<div v-if="tagsInSearchTerms.length === 0" class="flex items-center">
						<AppTag :title="search" :color="getTagColorByPrimary(search)" />
						<UButton
							icon="lucide:check"
							size="xs"
							variant="soft"
							color="success"
							@click="createTag"
						/>
					</div>
				</div>
			</div>
		</template>
	</UPopover>
</template>

<script lang="ts" setup>
import { TagsService } from '~/modules/workspace/tags/api/tags.service'
import CreateTag from '~/modules/workspace/tags/CreateTag.vue'
import { tagsKey } from '~/modules/workspace/tags/lib/keys'
import TagsList from '~/modules/workspace/tags/TagsList.vue'
import { useAppStore } from '~/shared/stores/AppStore'

useSyncCurrentWorkspace()
definePageMeta({
	layout: 'workspace'
})
const appStore = useAppStore()

const { data, fetch: fetchTags } = useQuery({
	queryFn: () =>
		TagsService.getTagsByWorkbenchId(appStore.currentWorkspace!.id),

	enabled: true
})

provide(tagsKey, fetchTags)
</script>

<template>
	<div
		class="flex flex-col bg-root-950 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
	>
		<h1 class="text-xl">Тэги</h1>
		<h2 class="text-xs">Используйте тэги чтобы организовать вашу работу</h2>
		<h2 class="text-xs">
			Tags created in this section are available in deals and tasks.
		</h2>
		<CreateTag />
		<TagsList v-if="data" :tags="data.data" />
	</div>
</template>

<style scoped></style>

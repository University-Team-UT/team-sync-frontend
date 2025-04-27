<script setup lang="ts">
import WorkspaceIcon from '../workspace/WorkspaceIcon.vue'

defineProps<{
	icon?: string
	text?: string
	to?: string
	isActive?: boolean
	isCollapsed: boolean
}>()
</script>

<template>
	<div>
		<UButton
			:class="[
				'bg-transparent  hover:bg-root-800 w-full px-1 ',
				isCollapsed && 'justify-center',
				isActive && 'bg-root-800'
			]"
			:to="to"
			size="lg"
			variant="soft"
			color="neutral"
		>
			<!-- <template #trailing>
				<UIcon
					v-if="!isCollapsed"
					class="ml-auto"
					size="20"
					name="lucide:chevron-down"
				/>
			</template> -->
			<p v-if="!isCollapsed" class="line-clamp-1 font-semibold">{{ text }}</p>
			<template #leading>
				<WorkspaceIcon v-if="icon" :icon="icon" :size="30" />
			</template>
		</UButton>
	</div>
</template>

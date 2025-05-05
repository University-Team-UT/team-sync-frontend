<script setup lang="ts">
import InvitationModal from '../common/invitation/InvitationModal.vue'
import ServicesMenu from '../services/ServicesMenu.vue'

import AvatarDropdown from './AvatarDropdown.vue'
import { useAppStore } from '~/shared/stores/AppStore'

const { t } = useI18n()

const { isCollapsed } = useSidebar()
useSyncCurrentProject()
const appStore = useAppStore()

const currentProject = computed(() =>
	appStore.currentProject ? appStore.currentProject : null
)
</script>

<template>
	<header
		:class="[
			'h-16 bg-root-800 flex items-center   fixed p-4 border-b border-root-950 z-10',
			'left-14 right-0 ',
			{ 'left-62': !isCollapsed },
			currentProject ? 'justify-between' : 'justify-end'
		]"
	>
		<div v-if="currentProject" class="flex gap-14 items-center p-2">
			<div class="flex gap-3 items-center">
				<div
					class="flex bg-primary-400 rounded-lg size-12 justify-center items-center"
				>
					Ts
				</div>
				<span class="text-2xl">{{ currentProject?.title }}</span>
				<div class="flex bg-root-700 rounded-xl gap-1 px-2 py-1">
					<UChip standalone inset color="success" />
					<span class="text-xs">{{ currentProject?.status }}</span>
				</div>
			</div>
		</div>
		<div class="flex items-center gap-2 justify-self-end">
			<InvitationModal>
				<template #trigger>
					<UButton
						icon="lucide:user-plus"
						:label="t('invite.index')"
						color="primary"
						variant="soft"
						class="self-center py-2 px-6 size-xl h-10"
				/></template>
			</InvitationModal>
			<ServicesMenu class="my-auto" />
			<AvatarDropdown> <AvatarPic /></AvatarDropdown>
		</div>
	</header>
</template>

<style scoped></style>

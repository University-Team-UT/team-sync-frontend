<script setup lang="ts">
import InvitationModal from '../common/invitation/InvitationModal.vue'

import AddWorkspaceModal from './AddWorkspaceModal.vue'
import WorkspaceCard from './WorkspaceCard.vue'
import { ROUTES } from '~/shared/config/routes'
import { useAppStore } from '~/shared/stores/AppStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const { t } = useI18n()

const workspaceStore = useWorkspaceStore()
const appStore = useAppStore()
const open = ref(false)
</script>

<template>
	<UPopover
		v-model:open="open"
		:content="{
			align: 'center',
			side: 'bottom',
			sideOffset: 13.5
		}"
		mode="click"
	>
		<slot></slot>
		<template #content>
			<div class="flex flex-col w-100 rounded-lg bg-root-800">
				<div @click="open = false">
					<WorkspaceCard
						v-if="appStore.currentWorkspace"
						:title="appStore.currentWorkspace!.title"
						:members-count="appStore.currentWorkspace?.membersCount"
						:user-role="appStore.currentWorkspace?.userRole"
						is-current
					/>
				</div>
				<div
					v-if="appStore.currentWorkspace"
					class="flex flex-col bg-root-900 gap-1 py-2"
				>
					<NuxtLink
						:to="ROUTES.WORKSPACE(appStore.currentWorkspace.id).SETTINGS"
						@click="open = false"
					>
						<UButton
							class="bg-transparent hover:text-primary-400 w-full text-md px-10"
							variant="link"
							color="neutral"
							icon="lucide:settings"
							>Настройки</UButton
						>
					</NuxtLink>
					<InvitationModal>
						<template #trigger>
							<UButton
								variant="link"
								color="neutral"
								icon="lucide:user-plus"
								:label="t('invite.index')"
								class="bg-transparent hover:text-primary-400 w-full text-md px-10"
						/></template>
					</InvitationModal>
				</div>
				<NuxtLink
					v-for="item in workspaceStore.workspaces.filter(item =>
						appStore.currentWorkspace
							? item.id !== appStore.currentWorkspace.id
							: true
					)"
					:key="item.id"
					:to="ROUTES.WORKSPACE(item.id).BASE"
					class="cursor-pointer"
					@click="open = false"
				>
					<WorkspaceCard
						:title="item.title"
						:members-count="item.membersCount"
						:user-role="item.userRole"
					/>
				</NuxtLink>
				<div class="flex justify-center">
					<AddWorkspaceModal />
				</div>
			</div> </template
	></UPopover>
</template>

<style scoped></style>

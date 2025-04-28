<script setup lang="ts">
import SidebarProject from './SidebarProject.vue'
import { ROUTES } from '~/shared/config/routes'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

defineProps<{ isCollapsed: boolean }>()

const wStore = useWorkspaceStore()
const route = useRoute()
</script>

<template>
	<div class="flex flex-col">
		<SidebarProject
			v-for="item in wStore.projects"
			:id="item.id"
			:key="item.id"
			:is-collapsed="isCollapsed"
			:text="item.title"
			:to="ROUTES.WORKSPACE(item.workbenchId).PROJECT(item.id).BASE"
			:is-active="
				route.path === ROUTES.WORKSPACE(item.workbenchId).PROJECT(item.id).BASE
			"
		/>
	</div>
</template>

<style scoped></style>

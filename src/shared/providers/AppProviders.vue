<script setup lang="ts">
import { useWorkspaceStore } from '../stores/WorkspaceStore'

import AuthProvider from './AuthProvider.vue'
import CollapseProvider from './CollapseProvider.vue'
import ServicesProvide from './ServicesProvide.vue'
import ThemeProvider from './ThemeProvider.vue'

useWorkspaceStore()
const { isLoading } = useGetWorkspaceInfo()
</script>

<template>
	<AuthProvider>
		<div v-if="!isLoading">
			<CollapseProvider>
				<ServicesProvide>
					<ThemeProvider>
						<slot />
					</ThemeProvider>
				</ServicesProvide>
			</CollapseProvider>
		</div>
		<div v-else>ITS LOADING</div>
	</AuthProvider>
</template>

<style scoped></style>

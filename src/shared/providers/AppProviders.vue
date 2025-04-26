<script setup lang="ts">
import { useWorkspaceStore } from '../stores/WorkspaceStore'

import AuthProvider from './AuthProvider.vue'
import CollapseProvider from './CollapseProvider.vue'
import ServicesProvide from './ServicesProvide.vue'
import ThemeProvider from './ThemeProvider.vue'

useWorkspaceStore()
</script>

<template>
	<AuthProvider>
		<CollapseProvider>
			<ServicesProvide>
				<ThemeProvider>
					<slot />
				</ThemeProvider>
			</ServicesProvide>
		</CollapseProvider>
	</AuthProvider>
</template>

<style scoped></style>

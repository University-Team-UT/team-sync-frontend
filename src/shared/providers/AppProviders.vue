<script setup lang="ts">
import AuthProvider from './AuthProvider.vue'
import CollapseProvider from './CollapseProvider.vue'
import ServicesProvide from './ServicesProvide.vue'
import ThemeProvider from './ThemeProvider.vue'
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

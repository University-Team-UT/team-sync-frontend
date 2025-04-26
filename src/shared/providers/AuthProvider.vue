<script setup>
import { onMounted } from 'vue'

import { useAuthStore } from '../stores/AuthStore'

const authStore = useAuthStore()

onMounted(() => {
	authStore.initializeAuth()
})
</script>

<template>
	<slot v-if="!authStore.isLoading" />
	<div v-else><h1>LOADING</h1></div>
</template>

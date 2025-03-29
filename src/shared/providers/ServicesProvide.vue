<script setup lang="ts">
import ServiceNotification from '~/modules/services/notification/ServiceNotification.vue'
</script>

<template>
	<div>
		<slot />
		<ServiceNotification />
	</div>
</template>

<style scoped></style>

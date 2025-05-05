<script lang="ts" setup>
import ServiceNotification from '~/modules/services/notification/ServiceNotification.vue'

useHead({
	title: 'Главная'
})
</script>

<template>
	<div>
		<ServiceNotification />
		<!-- <UButton to="/test">to tests</UButton> -->
	</div>
</template>

<style scoped></style>

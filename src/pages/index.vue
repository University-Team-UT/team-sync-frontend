<script lang="ts" setup>
import TaskMain from '~/modules/dashboard/TaskMain.vue'
import ServiceNotification from '~/modules/services/notification/ServiceNotification.vue'

useHead({
	title: 'Главная'
})
</script>

<template>
	<div>
		<ServiceNotification />
		<!-- <UButton to="/test">to tests</UButton> -->
		<TaskMain />
	</div>
</template>

<style scoped></style>

<script lang="ts" setup>
import ProjectBoards from '~/modules/board/projectBoards.vue'
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
		<ProjectBoards />
		<USeparator :ui="{ border: 'border-root-950' }" class="mt-3" />
		<TaskMain />
	</div>
</template>

<style scoped></style>

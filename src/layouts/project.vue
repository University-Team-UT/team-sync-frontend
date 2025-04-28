<script setup lang="ts">
import ProjectBoards from '~/modules/board/projectBoards.vue'
import AppSidebar from '~/modules/sidebar/AppSidebar.vue'
import DefaultLayout from '~/shared/components/DefaultLayout.vue'
</script>

<template>
	<DefaultLayout>
		<template #sidebar>
			<AppSidebar :is-main="true" />
		</template>
		<div>
			<ProjectBoards />
			<slot />
		</div>
	</DefaultLayout>
</template>

<script setup lang="ts">
import AppSidebar from '~/modules/sidebar/AppSidebar.vue'
import DefaultLayout from '~/shared/components/DefaultLayout.vue'
</script>

<template>
	<DefaultLayout>
		<template #sidebar>
			<AppSidebar :is-main="true" />
		</template>
		<div>
			<div>clo clo clo</div>
			<slot />
		</div>
	</DefaultLayout>
</template>

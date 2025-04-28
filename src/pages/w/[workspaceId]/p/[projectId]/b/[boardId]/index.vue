<script lang="ts" setup>
import ColumnList from '~/modules/task/ColumnList.vue'

definePageMeta({
	layout: 'project'
})
useSyncCurrentProject()
useSyncCurrentBoard()
</script>

<template>
	<div class="p-4">
		<div>filters</div>
		<div><ColumnList /></div>
	</div>
</template>

<style scoped></style>

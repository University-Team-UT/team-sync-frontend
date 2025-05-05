<script lang="ts" setup>
import ColumnList from '~/modules/task/columns/ColumnList.vue'

definePageMeta({
	layout: 'project'
})
useSyncCurrentProject()
useSyncCurrentBoard()
</script>

<template>
	<div class="p-2">
		<div class=""><ColumnList /></div>
	</div>
</template>

<style scoped></style>

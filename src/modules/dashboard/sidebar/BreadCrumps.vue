<script setup lang="ts">
const BreadCrumps = [
	{ id: '0', name: 'lucide:plus', title: 'Подзадача' },
	{ id: '1', name: 'lucide:plus', title: 'Время' }
]
</script>

<template>
	<div class="flex gap-2 items-center">
		<div
			v-for="item in BreadCrumps"
			:key="item.id"
			class="flex items-center gap-2"
		>
			<UIcon :name="item.name" size="16" />
			<span class="text-sm">{{ item.title }}</span>
		</div>
	</div>
</template>

<style scoped></style>

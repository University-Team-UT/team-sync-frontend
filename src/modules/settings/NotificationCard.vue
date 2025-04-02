<script setup lang="ts">
defineProps<{ text: string; icon: string }>()

const isChecked = ref<boolean>(false)
</script>

<template>
	<div
		class="flex flex-col bg-root-900 rounded-xl py-3 items-center text-center relative px-5 hover:bg-root-800 transition duration-200"
	>
		<UCheckbox
			v-model="isChecked"
			class="absolute top-1 right-2 rounded-full"
		/>

		<UIcon
			:name="icon"
			:class="['size-7', isChecked && 'text-primary-500 ']"
			color="primary"
		/>
		<span class="text-wrap text-xs">{{ text }}</span>
	</div>
</template>

<style scoped></style>

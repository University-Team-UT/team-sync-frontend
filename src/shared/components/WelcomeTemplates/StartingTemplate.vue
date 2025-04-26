<script setup lang="ts">
const emit = defineEmits(['nextStep'])
</script>

<template>
	<div
		class="flex flex-col h-130 bg-root-800 min-w-1/3 z-1000 p-10 rounded-xl items-center justify-center gap-10 relative"
	>
		<span class="absolute top-8 text-3xl">Начало Работы</span>
		<span class="text-4xl"
			>Добро пожаловать в Team<span class="text-primary-400 font-bold"
				>Sync</span
			></span
		>
		<UButton
			label="Продолжить"
			color="primary"
			size="lg"
			variant="solid"
			class="px-8 text-xl font-bold absolute bottom-8"
			@click="emit('nextStep')"
		/>
	</div>
</template>

<style scoped></style>

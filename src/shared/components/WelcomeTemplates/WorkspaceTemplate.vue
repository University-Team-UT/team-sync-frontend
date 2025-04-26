<script setup lang="ts">
const emit = defineEmits(['nextStep'])
</script>

<template>
	<div
		class="flex flex-col h-130 bg-root-800 min-w-2/5 z-1000 p-10 rounded-xl items-center justify-center gap-10 relative"
	>
		<span class="text-2xl absolute top-8 text-center"
			>Настрой Team<span class="text-primary-400 font-bold">Sync</span></span
		>
		<span class="text-xl absolute top-18 text-center"
			>Выберите стиль интерфейса для рабочего пространства</span
		>
		<div class="flex items-center justify-center gap-8">
			<UButton
				label="Продолжить"
				color="primary"
				size="lg"
				variant="solid"
				class="px-8 text-xl font-bold absolute bottom-8"
				@click="emit('nextStep')"
			/>
		</div>
	</div>
</template>

<style scoped></style>

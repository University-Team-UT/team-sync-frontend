<script setup lang="ts">
import CurrentTask from './ColumnTask.vue'
</script>

<template>
	<div class="flex flex-col gap-14 p-4">
		<header class="flex gap-14 items-center">
			<div class="flex gap-3 items-center">
				<div
					class="flex bg-primary-400 rounded-lg size-12 justify-center items-center"
				>
					Ts
				</div>
				<span class="text-2xl">Проект</span>
				<div class="flex bg-root-700 rounded-xl gap-1 px-2 py-1">
					<UChip standalone inset color="success" />
					<span class="text-xs">В работе</span>
				</div>
			</div>
			<div class="flex">
				<ul class="flex gap-3 list-none text-md">
					<li>Обзор</li>
					<li>Задачи</li>
					<li>Документы</li>
					<li>Приложения</li>
					<li>Настройка</li>
				</ul>
			</div>
		</header>
		<CurrentTask />
	</div>
</template>

<style scoped></style>

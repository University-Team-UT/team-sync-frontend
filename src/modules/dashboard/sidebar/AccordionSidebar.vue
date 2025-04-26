<script setup lang="ts">
const subTasks = [
	{
		id: 1,
		isChecked: false,
		taskTitle: 'Дополнительная задача'
	}
]
const timeSpent = [
	{
		id: 1,
		date: '7.02.2025',
		time: '1ч',
		emailEmployer: 'kargo69229@gmail.com',
		value: 1
	}
]
</script>

<template>
	<div class="flex flex-col gap-6">
		<div class="flex gap-2 items-center">
			<UIcon name="lucide:chevron-right" />
			<span>Подзадачи</span>
		</div>
		<!-- контент аккордиона -->
		<UButton
			icon="lucide:circle-fading-plus"
			variant="ghost"
			label="Добавить подзадачу"
			size="sm"
			class="p-0"
		/>
		<div
			v-for="item in subTasks"
			:key="item.id"
			class="flex gap-2 items-center"
		>
			<UCheckbox
				v-model="item.isChecked"
				:ui="{
					base: 'rounded-full'
				}"
			/>
			<span class="text-sm">{{ item.taskTitle }}</span>
		</div>

		<!-- низ контент аккордиона -->

		<div class="flex flex-col gap-4 justify-between">
			<div class="flex gap-2 items-center">
				<UIcon name="lucide:chevron-right" />
				<span>Время</span>
			</div>
			<div class="flex gap-2">
				<UButton
					icon="lucide:circle-fading-plus"
					variant="ghost"
					label="Добавить"
					size="sm"
					class="p-0"
				/>
			</div>
			<div
				v-for="item in timeSpent"
				:key="item.id"
				class="flex gap-2 justify-evenly w-full items-center"
			>
				<span class="text-sm">{{ item.date }}</span>
				<span>{{ item.emailEmployer }}</span>
				<UProgress v-model="item.value" :max="1" />
				<span>{{ item.time }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

<script setup lang="ts">
const TaskInformation = [
	{
		icon: 'lucide:user-round',
		title: 'Исполнители',
		description: 'Назначить'
	},
	{
		icon: 'lucide:folders',
		title: 'Проект',
		project: 'Ts',
		dashboard: 'Текстовая доска',
		subDashboard: 'К работе'
	},
	{
		icon: 'lucide:calendar-range',
		title: 'Дата',
		description: 'Выбрать дату'
	},
	{
		icon: 'lucide:timer-reset',
		title: 'Оценка времени',
		description: 'Оценить'
	},
	{
		icon: 'lucide:layers-2',
		title: 'Тип',
		description: 'Действия'
	},
	{
		icon: 'lucide:chart-no-axes-column-increasing',
		title: 'Приоритет',
		description: 'Выбрать'
	},
	{
		icon: 'lucide:notebook-pen',
		title: 'Теги',
		description: 'Пусто...'
	},
	{
		icon: 'lucide:circle-fading-plus',
		title: 'Добавить'
	}
]
</script>

<template>
	<div class="flex flex-col gap-2">
		<div
			v-for="item in TaskInformation"
			:key="item.icon"
			class="grid grid-cols-[1fr_1fr] gap- items-center"
		>
			<div class="flex gap-3 text-primary-400 items-center justify-items-start">
				<UIcon :name="item.icon" />
				<span>{{ item.title }}</span>
			</div>
			<span v-if="item.description">{{ item.description }}</span>
			<div v-if="item.icon === 'lucide:folders'" class="flex items-center">
				<div class="bg-primary-700 flex p-1 text-sm rounded-md">
					{{ item.project }}
				</div>
				<UIcon name="lucide:chevron-right" />
				<span>{{ item.dashboard }}</span>
				<UIcon name="lucide:chevron-right" />
				<span>{{ item.subDashboard }}</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

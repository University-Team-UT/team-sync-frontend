<script setup lang="ts">
import BoardDropdown from './BoardDropdown.vue'

const allBoards = [
	{
		boardId: 1,
		boardTitle: 'Основа',
		isActive: true
	},
	{
		boardId: 2,
		boardTitle: 'Дизайн',
		isActive: false
	},
	{
		boardId: 3,
		boardTitle: 'Разработка',
		isActive: false
	}
]
</script>

<template>
	<div class="flex gap-2 ml-4">
		<div
			v-for="item in allBoards"
			:key="item.boardId"
			class="flex pl-3 pr-2 py-1 rounded-b-xl group justify-between items-center"
			:class="item.isActive ? 'bg-root-600' : ' hover:bg-root-600/40'"
		>
			<span>{{ item.boardTitle }}</span>
			<div
				class="flex opacity-0 transition duration-200 group-hover:opacity-100"
				:class="item.isActive ? 'opacity-100' : ''"
			>
				<BoardDropdown />
			</div>
		</div>
	</div>
</template>

<style scoped></style>

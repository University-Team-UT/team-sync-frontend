<script setup lang="ts">
const comments = [
	{
		id: 1,
		name: 'Булат',
		dateSent: '23:03',
		message: 'Впадлу делать'
	}
]
</script>

<template>
	<div class="flex flex-col w-full relative">
		<span class="mx-auto text-xl">01 Апреля 2025</span>
		<div class="flex flex-col w-full min-h-80 gap-6 mb-20">
			<div v-for="item in comments" :key="item.id" class="flex gap-2 relative">
				<div class="flex flex-col gap-2 bg-root-700/60 rounded-lg p-3">
					<span class="text-primary-400/50 text-sm">{{ item.name }}</span>
					<span class="">{{ item.message }}</span>
				</div>
				<span class="text-xs self-end">{{ item.dateSent }}</span>
			</div>
		</div>
		<UInput
			trailing-icon="lucide:message-square-more"
			placeholder="Комментарий"
			size="md"
			class="w-full absolute bottom-0"
		/>
	</div>
</template>

<style scoped></style>

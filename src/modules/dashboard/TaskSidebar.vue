<script setup lang="ts">
import AccordionSidebar from './sidebar/AccordionSidebar.vue'
import BreadCrumps from './sidebar/BreadCrumps.vue'
import TaskDescription from './sidebar/TaskDescription.vue'
import TaskInfo from './sidebar/TaskInfo.vue'
</script>

<template>
	<div class="min-w-180 max-w-180 min-h-full size-full m-4">
		<div class="flex flex-col gap-4">
			<header class="flex p-2"></header>
			<USeparator />
			<section class="flex flex-col gap-6 p-6">
				<div class="flex justify-between w-full items-center">
					<div class="flex gap-4 items-center">
						<UButton
							icon="lucide:circle"
							label="Выполнить"
							variant="outline"
							class="text-primary-400/60 bg-root-800"
						/>
					</div>
					<div class="flex gap-1 items-center">
						<UAvatar />
						<div class="flex flex-col">
							<span>Тайлер Дерден</span>
							<span>23.06.2025 23:07</span>
						</div>
					</div>
				</div>
				<span class="text-2xl">Сделать таски, лучше чем Роман Семенов</span>
				<BreadCrumps />
				<TaskInfo />
				<USeparator />
				<TaskDescription />
				<USeparator />
				<AccordionSidebar />
				<CommentSidebar />
			</section>
		</div>
	</div>
</template>

<style scoped></style>

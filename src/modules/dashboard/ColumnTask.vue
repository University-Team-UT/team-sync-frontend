<script setup lang="ts">
import { ref } from 'vue'

import TaskSidebar from './TaskSidebar.vue'

const value = ref(3)
</script>

<template>
	<UDrawer direction="right" :overlay="false">
		<div
			class="flex flex-col border-t-2 rounded-t-sm border-primary-400 w-1/6 gap-4"
		>
			<!-- Заголовки задач -->
			<div
				class="flex py-2 px-4 justify-between rounded-t-sm bg-root-700 items-center"
			>
				<span>Дизайн</span>
				<UButton
					icon="lucide:settings-2"
					size="md"
					color="primary"
					variant="link"
				/>
				<!-- кнопка добавить задачу -->
			</div>
			<UButton
				label="Добавить задачу"
				variant="solid"
				class="w-full bg-root-700 rounded-sm text-primary-400 px-4 py-2"
			/>
			<!-- Задача -->
			<div class="flex flex-col gap-6 bg-root-700 rounded-sm px-4 py-2">
				<div class="flex flex-col gap-2 w-full">
					<span class="rounded-lg bg-root-800/50 inline-flex w-fit p-1 pr-1.5"
						>#1</span
					>
					<div class="flex">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
						repudiandae cum? Amet expedita repellendus non eum impedit itaque
						magni cum voluptates veniam voluptatibus, voluptatem numquam labore,
						molestiae, quae debitis dolorum.
					</div>
				</div>

				<!-- подзадачи -->
				<div class="flex justify-between w-full items-center">
					<UAvatar src="/img/avatarDefault.svg" />
					<div class="flex gap-4 items-center">
						<span>29 марта</span>
						<UCheckbox
							:ui="{ base: 'rounded-full text-white' }"
							default-value="indeterminate"
							indeterminate-icon="lucide:check"
							size="lg"
						/>
					</div>
				</div>
				<!-- прогресс бар -->
				<div class="grid grid-cols-[24px_1fr] w-full gap-4 items-center">
					<UIcon name="lucide:network" class="size-6 rotate-90" />
					<div class="flex gap-4 w-full items-center">
						<UProgress
							v-model="value"
							:ui="{
								base: 'bg-slate-200 rounded-xs',
								indicator: 'rounded-xs'
							}"
							:max="4"
							color="primary"
						/>
						<span>3/4</span>
					</div>
				</div>
				<!-- подзадачи -->
				<div class="flex flex-col gap-4">
					<!-- подзадача -->
					<div class="flex items-center gap-4">
						<UCheckbox
							:ui="{ base: 'rounded-full text-white' }"
							default-value="indeterminate"
							indeterminate-icon="lucide:check"
							size="lg"
						/>
						<span class="text-lg">Сабтаски</span>
					</div>
				</div>
			</div>
		</div>
		<template #content>
			<TaskSidebar />
		</template>
	</UDrawer>
</template>

<style scoped></style>

import WorkspaceIcon from '~/modules/workspace/WorkspaceIcon.vue';
<script lang="ts" setup>
import WorkspaceIcon from '~/modules/workspace/WorkspaceIcon.vue'

definePageMeta({
	layout: 'workspace'
})
</script>

<template>
	<div>
		<div
			class="flex flex-col bg-root-950 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
		>
			<div class="flex">
				<span class="text-2xl"> Основные настройки </span>
			</div>
			<div class="my-5">
				<WorkspaceIcon icon="lucide:star" :size="120" />
			</div>
			<div class="flex flex-col gap-4 text-xl">
				<span>Название рабочего пространства</span>
				<UInput
					placeholder="Введите название"
					variant="soft"
					color="alt"
					size="xl"
				/>
				<span>Описание</span>
				<UInput
					placeholder="Введите описание"
					variant="soft"
					color="alt"
					size="xl"
				/>
				<UButton
					class="flex items-center text-white py-2.5 px-5 self-end"
					color="primary"
					size="xl"
				>
					Сохранить
				</UButton>
			</div>
		</div>
		<div
			class="flex flex-col bg-root-950 h-auto rounded-xl w-150 py-8 px-5 my-5 ml-5"
		>
			<div class="flex mx-2 justify-between items-center">
				<span class="text-2xl"> Удаление рабочего пространства </span>
				<UButton
					class="flex items-center text-white py-2.5 px-7"
					color="primary"
					size="xl"
				>
					Удалить
				</UButton>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

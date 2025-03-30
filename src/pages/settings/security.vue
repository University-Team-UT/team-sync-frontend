<script lang="ts" setup>
import WorkspaceSelector from '~/modules/workspace/WorkspaceSelector.vue'
</script>

<template>
	<div
		class="flex flex-col bg-root-950 h-auto rounded-xl w-200 p-5 relative my-5 ml-5"
	>
		<div class="flex flex-col mb-4">
			<span class="text-2xl"> Настройки уведомлений </span>
		</div>
		<div class="flex flex-col gap-6">
			<span class="text-xl">Выберите рабочее пространство</span>
			<WorkspaceSelector />
		</div>
		<div class="flex mt-15">
			<div
				class="flex flex-col bg-root-900 rounded-xl p-5 text-wrap items-center text-center"
			>
				<UIcon name="lucide:bell-ring" class="size-9" color="primary" />
				<span>Центр <br />уведомлений</span>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

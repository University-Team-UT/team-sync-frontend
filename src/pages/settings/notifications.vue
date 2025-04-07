<script lang="ts" setup>
import NotificationCard from '~/modules/settings/NotificationCard.vue'
import SoundEffect from '~/modules/settings/SoundEffect.vue'
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
		<div class="grid grid-cols-5 mt-15 gap-x-5">
			<NotificationCard text="Центр уведомлений" icon="lucide:bell-ring" />
			<NotificationCard text="Web - Push уведомление" icon="lucide:touchpad" />
			<NotificationCard text="В мессенджеры" icon="lucide:messages-square" />
			<NotificationCard text="Внутри сервиса" icon="lucide:zap" />
			<NotificationCard text="По почте" icon="lucide:mail" />
		</div>
		<div class="mt-10"><SoundEffect /></div>
	</div>
</template>

<style scoped></style>

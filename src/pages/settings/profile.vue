<script lang="ts" setup>
import EditProfileFrom from '~/modules/settings/profile/EditProfileFrom.vue'

definePageMeta({
	layout: 'settings'
})
</script>

<template>
	<div
		class="flex flex-col bg-root-900 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
	>
		<div class="flex flex-col gap-2">
			<span class="text-2xl"> Профиль </span>
			<span class="text-gray-500"
				>Здесь настраивается учетная запись Team Sync.
			</span>
		</div>

		<div class="grid grid-cols-[130px_1fr] my-2"></div>
		<EditProfileFrom />
	</div>
</template>

<style scoped></style>

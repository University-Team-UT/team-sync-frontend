<script lang="ts" setup>
import type Input from '@nuxt/ui/runtime/components/Input.vue'

definePageMeta({
	layout: 'settings'
})
const isEditing = ref(false)

const editToggle = () => {
	isEditing.value = !isEditing.value
}
</script>

<template>
	<div
		class="flex flex-col bg-root-900 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
	>
		<div class="flex flex-col gap-2">
			<span class="text-2xl"> Workspaces </span>
			<span class="text-gray-500"
				>Здесь настраивается учетная запись teamsync. Профиль для рабочего
				пространства меняется в разделе Пользователь”</span
			>
		</div>

		<div class="flex flex-col gap-2 mt-5">
			<span>Рабочее пространство</span>
			<div
				class="flex bg-root-900 rounded-[0.5rem] items-center p-2 transition-colors duration-200 ease-in-out gap-2 self-start justify-between w-70"
			>
				<div class="flex gap-2 items-center">
					<UIcon name="lucide:school" class="size-5" />
					<Input
						:disabled="isEditing"
						class="text-gray-300 text-sm outline-none disabled:hover:bg-root-900 w-59 disabled:text-neutral-500 transition-colors duration-200 ease-in-out"
						placeholder="Название рабочего пространства"
					>
					</Input>
				</div>
				<div class="flex gap-2 items-center">
					<UIcon
						name="lucide:pencil-line"
						class="size-5 transition-colors duration-200 ease-in-out hover:bg-green-500 cursor-pointer px-2 justify-self-end"
						@click="editToggle"
					/>
					<UIcon
						name="lucide:trash"
						class="size-5 transition-colors duration-200 ease-in-out hover:bg-red-500 cursor-pointer justify-self-end"
					/>
				</div>
			</div>
			<UButton
				icon="lucide:circle-fading-plus"
				class="flex text-primary-400 self-start"
				variant="ghost"
				color="primary"
			>
				Добавить организацию
			</UButton>
		</div>
		<div class="flex justify-between mt-20 items-center">
			<span class="text-gray-500 text-sm">Есть несохраненные изменения</span>
			<UButton
				class="flex justify-center text-white px-10 py-2"
				color="primary"
			>
				Сохранить
			</UButton>
		</div>
	</div>
</template>

<style scoped></style>

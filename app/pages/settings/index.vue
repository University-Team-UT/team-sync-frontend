<script lang="ts" setup>
import type Input from '@nuxt/ui/runtime/components/Input.vue'

const items = ref([
	{
		label: 'Русский',
		icon: 'twemoji:flag-russia'
	},
	{
		label: 'Английский',
		icon: 'twemoji:flag-united-states'
	}
])

const toggler = ref(false)

const editToggle = () => {
	toggler.value = !toggler.value
}
</script>

<template>
	<div
		class="flex flex-col bg-root-950 h-auto rounded-xl w-150 p-5 relative my-5 ml-5"
	>
		<div class="flex flex-col gap-2">
			<span class="text-2xl"> Профиль </span>
			<span class="text-gray-500"
				>Здесь настраивается учетная запись teamsync. Профиль для рабочего
				пространства меняется в разделе Пользователь”</span
			>
		</div>

		<div class="grid grid-cols-[130px_1fr] my-2">
			<img class="py-5" width="100" src="/public/img/avatar.png" alt="logo" />
			<div class="flex flex-col gap-1">
				<span>Имя</span>
				<UInput placeholder="Ваше имя" variant="soft" color="alt" />
				<span>Фамилия</span>
				<UInput placeholder="Ваша фамилия" variant="soft" color="alt" />
			</div>
		</div>
		<div class="flex flex-col gap-2 mb-2">
			<span>Обо мне</span>
			<UTextarea
				placeholder="Введите описание"
				variant="soft"
				:rows="8"
				color="alt"
			/>
		</div>
		<div class="flex flex-col gap-2 mb-2">
			<span>Электронная почта</span>
			<UInput
				placeholder="Введите ваш Email"
				trailing-icon="lineicons:locked-2"
				variant="soft"
				color="alt"
			/>
		</div>
		<div class="flex flex-col gap-2 mb-2">
			<span>Язык</span>
			<USelectMenu
				placeholder="Выберите язык"
				:items="items"
				class="w-48"
				variant="soft"
				color="alt"
			/>
		</div>
		<div class="flex flex-col gap-2">
			<span>Организации</span>

			<div
				class="flex bg-root-900 rounded-[0.5rem] items-center p-2 transition-colors duration-200 ease-in-out gap-2 self-start justify-between w-70"
			>
				<div class="flex gap-2 items-center">
					<UIcon name="lucide:school" class="size-5" />
					<Input
						:disabled="toggler"
						class="text-gray-300 text-sm outline-none disabled:hover:bg-root-900 disabled:text-neutral-500 transition-colors duration-200 ease-in-out"
						placeholder="Название организации"
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
	</div>
</template>

<style scoped></style>

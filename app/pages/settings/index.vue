<script lang="ts" setup></script>

<template>
	<div
		class="flex flex-col bg-root-950 h-[calc(80vh-10px)] rounded-xl w-150 p-5 relative my-5 ml-5"
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
		<div class="flex flex-col gap-2">
			<span>Язык</span>
			<UInput
				placeholder="Введите ваш Email"
				trailing-icon="lineicons:locked-2"
				variant="soft"
				color="alt"
			/>
		</div>
	</div>
</template>

<style scoped></style>

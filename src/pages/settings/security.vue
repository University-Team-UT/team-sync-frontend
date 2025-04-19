<script lang="ts" setup>
const { t } = useI18n()
definePageMeta({
	layout: 'settings'
})
</script>

<template>
	<div>
		<div
			class="flex flex-col bg-root-950 h-auto rounded-xl w-125 p-5 relative my-5 ml-5"
		>
			<div class="flex mb-4">
				<span class="text-2xl"> Аутентификация </span>
			</div>
			<div class="flex flex-col gap-4 text-xl">
				<span>Старый пароль</span>
				<UInput
					placeholder="Введите старый пароль"
					variant="soft"
					color="alt"
					size="xl"
				/>
				<span>Новый пароль</span>
				<UInput
					placeholder="Введите новый пароль"
					variant="soft"
					color="alt"
					size="xl"
				/>
				<span>Повторите пароль</span>
				<UInput
					placeholder="Повторите новый пароль"
					variant="soft"
					color="alt"
					size="xl"
				/>
				<UButton
					class="flex self-end justify-center text-gray-500 text-sm"
					variant="ghost"
					color="primary"
				>
					Изменить пароль</UButton
				>
			</div>
			<div class="flex flex-col gap-3 my-4">
				<span>Способы авторизации</span>
				<div class="grid grid-cols-2 gap-5">
					<AuthProviderButton
						:name="t('auth.providers.yandex')"
						image-src="/img/yandex.png"
					/>
					<AuthProviderButton
						:name="t('auth.providers.vk')"
						image-src="/img/vk.png"
					/>
				</div>
			</div>
		</div>
		<div
			class="flex flex-col bg-root-950 h-auto rounded-xl w-125 p-5 relative my-5 ml-5"
		>
			<div class="flex flex-col mx-2">
				<span class="text-xl"> Удаление аккаунта </span>
				<div class="text-gray-500">
					<ul class="list-disc">
						<li>Аккаунт нельзя будет восстановить</li>
						<li>Все сохранённые на аккаунте данные будут потеряны</li>
						<li>Аккаунт будет анонимным у других пользователей</li>
					</ul>
				</div>
				<UButton
					class="flex self-end text-white mt-5 px-3"
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

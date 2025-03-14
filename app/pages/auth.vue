<script lang="ts" setup></script>

<template>
	<div
		class="fixed inset-0 bg-[url(/assets/images/background-image.png)] bg-center bg-cover bg-no-repeat"
	>
		<div class="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
		<div class="grid grid-cols-[450px_1fr] m-15">
			<div class="w-full bg-root-950 rounded-l-xl z-10 px-20 text-nowrap">
				<div class="flex mt-35 gap-5 justify-center">
					<img class="h-15" src="/assets/images/logo.svg" alt="logo" />
					<div class="flex items-center text-4xl text-nowrap gap-2 font-bold">
						<span>Team</span>
						<span class="text-blue-500">Sync</span>
					</div>
				</div>
				<div class="flex flex-col gap-5 justify-center text-center py-10">
					<span>Войти или зарегистрироваться с</span>
					<UButton class="flex justify-center text-white"
						><img src="/assets/images/yandex.png" alt="Yandex" />
						<span>Войти с Яндекс ID</span>
					</UButton>
					<UButton class="flex justify-center text-white"
						><img src="/assets/images/vk.png" alt="Yandex" />
						<span>Войти через VK</span>
					</UButton>
					<UButton class="flex justify-center text-white"
						><img src="/assets/images/email.png" alt="Yandex" />
						<span>Продолжить с Email</span>
					</UButton>
				</div>
				<div>
					<USeparator
						size="lg"
						label="Или"
						:ui="{
							border: 'border-gray-400 rounded-xl'
						}"
					/>
				</div>
				<div class="flex flex-col mb-35 pt-5 gap-3">
					<span>Email</span>
					<UInput placeholder="Введите ваш Email" variant="soft" color="alt" />
					<UButton class="flex justify-center text-white" color="primary">
						<span>Продолжить</span>
					</UButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>

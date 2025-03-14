<script lang="ts" setup>
import AuthForm from '~/modules/auth/AuthForm.vue'

//TODO input поменять
</script>

<template>
	<div
		class="fixed inset-0 bg-[url(/assets/images/background-image.png)] h-screen bg-center bg-cover bg-no-repeat"
	>
		<div class="absolute -z-10 inset-0 bg-black/80 backdrop-blur-md" />

		<div class="grid grid-cols-[450px_1fr] h-[calc(100vh-80px)] m-10">
			<div
				class="w-full flex relative flex-col h-[calc(100vh-80px)] bg-root-950 rounded-l-xl px-20 text-nowrap"
			>
				<div class="absolute top-5 right-5">
					<LocaleSwitchButton />
				</div>
				<div class="my-auto">
					<AuthForm />
				</div>
			</div>
			<div class="bg-red-950 w-full h-"></div>
		</div>
	</div>
</template>

<style scoped></style>

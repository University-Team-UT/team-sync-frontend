<script setup lang="ts"></script>

<template>
	<UModal title="Connect">
		<UButton
			:ui="{
				base: 'bg-root-800/50  hover:bg-root-900 rounded-lg text-root-400 text-xs'
			}"
			:avatar="{
				src: 'https://api.iconify.design/cib:telegram.svg?color=%2327a7e7'
			}"
			label="Connect Telegram"
			size="lg"
			class="px-3 py-2"
		/>

		<template #body>
			<div class="flex h-32 p-2 relative">
				<span
					>In order to receive notifications in Telegram
					<UAvatar
						src="https://api.iconify.design/cib:telegram.svg?color=%2327a7e7"
						class="size-6 ml-2"
					/>
					<br />
					Click the "Bind" button</span
				><UButton label="Bind" class="absolute right-4 bottom-2 px-10" /></div
		></template>
	</UModal>
</template>

<style scoped></style>

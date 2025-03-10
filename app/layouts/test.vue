import { LocaleSwitchButton } from '../../.nuxt/components';
<script lang="ts" setup></script>

<template>
	<main>
		<div class="flex justify-between items-center">
			<h1 class="text-2xl">TeamSync Test</h1>
			<div class="flex gap-2">
				<ColorModeButton />
				<LocaleSwitchButton />
			</div>
		</div>

		<slot />
	</main>
</template>

<style scoped></style>

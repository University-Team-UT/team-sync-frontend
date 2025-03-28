<script setup lang="ts"></script>

<template>
	<UPopover>
		<slot />

		<template #content>
			<div class="bg-green-500 size-20">1</div>
		</template>
	</UPopover>
</template>

<style scoped></style>

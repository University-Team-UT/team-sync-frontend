<script setup lang="ts">
const { setTheme } = useColorTheme()
onMounted(() => {
	const color = localStorage.getItem('colorMode')
	console.log(color)

	if (color) {
		setTheme(color)
	}
})
</script>

<template>
	<slot />
</template>

<style scoped></style>

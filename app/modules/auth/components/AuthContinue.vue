<script lang="ts" setup>
const emit = defineEmits(['setPageTab'])
</script>

<template>
	<div @click="emit('setPageTab', 'start')">123</div>
</template>

<style scoped></style>

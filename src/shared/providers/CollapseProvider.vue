<script setup lang="ts">
import { isCollapsedKey } from '#imports'

const isCollapsed = ref(false)
provide(isCollapsedKey, isCollapsed)
</script>

<template>
	<slot />
</template>

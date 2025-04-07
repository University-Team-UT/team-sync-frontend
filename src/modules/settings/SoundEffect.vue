<script setup lang="ts">
const isSwitched = ref<boolean>(false)
</script>

<template>
	<div
		class="flex bg-root-900 rounded-lg items-center justify-between hover:bg-root-800 transition duration-200"
	>
		<div class="flex items-center gap-1">
			<div class="flex items-center bg-root-700 m-3 rounded-xl py-2 px-3">
				<Icon
					name="lucide:volume-2"
					:class="['size-10', isSwitched && 'text-primary-500']"
				/>
			</div>
			<span class="text-lg">Звуковой эффект</span>
		</div>
		<div class="px-5">
			<USwitch
				v-model="isSwitched"
				unchecked-icon="i-lucide-x"
				checked-icon="i-lucide-check"
				default-value
				size="xl"
			/>
		</div>
	</div>
</template>

<style scoped></style>

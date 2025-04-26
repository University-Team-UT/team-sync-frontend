<script setup lang="ts">
const open = ref(false)
</script>
<template>
	<UModal
		v-model:open="open"
		title="Новое рабочее пространство"
		:close="{
			color: 'primary',
			variant: 'outline',
			class: 'rounded-full'
		}"
	>
		<UButton
			label="Создать пространство"
			color="primary"
			class="flex justify-center text-white p-2 w-full m-5"
		></UButton>

		<template #header>
			<div class="flex justify-between w-full">
				<span class="text-2xl">Новое рабочее пространство</span>
				<UButton
					class="hover:bg-root-800 px-1.5"
					variant="ghost"
					@click="open = false"
				>
					<UIcon name="iconify i-lucide:x" class="size-5 bg-white" />
				</UButton>
			</div>
		</template>
		<template #body>
			<div class="flex flex-col gap-3 text-lg">
				<div class="flex flex-col gap-3">
					<span>Название рабочего пространства</span>
					<UInput
						placeholder="Введите название"
						variant="soft"
						color="alt"
						size="xl"
					/>
				</div>
				<div class="flex flex-col gap-2 mb-2">
					<span>Описание</span>
					<UTextarea
						placeholder="Введите описание"
						variant="soft"
						:rows="4"
						size="xl"
						color="alt"
						autoresize
						:maxrows="4"
						:ui="{
							base: 'resize-none'
						}"
					/>
				</div>
			</div>
		</template>
		<template #footer>
			<div class="flex justify-end w-full">
				<UButton
					label="Создать пространство"
					color="primary"
					class="text-white p-3"
				/>
			</div>
		</template>
	</UModal>
</template>

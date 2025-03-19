<script lang="ts" setup>
import AuthForm from '~/modules/auth/components/AuthForm.vue'
import type { PageTabType } from '~/modules/auth/types'

useHead({
	title: 'Auth'
})

const currentPageTab = ref<PageTabType>('start')

const setPageTab = (tab: PageTabType) => {
	currentPageTab.value = tab
}

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
					<AuthForm
						v-if="currentPageTab === 'start'"
						@set-page-tab="setPageTab"
					/>
					<AuthContinue
						v-else-if="currentPageTab === 'continue'"
						@set-page-tab="setPageTab"
					/>
				</div>
			</div>
			<div class="rounded-r-xl">
				<img
					src="/assets/images/background-image.png"
					class="h-full rounded-r-xl object-cover"
					alt="auth-background"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>

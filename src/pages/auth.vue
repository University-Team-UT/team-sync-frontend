<script lang="ts" setup>
import type { PageTabType } from '~~/src/modules/auth/types'

import AuthForm from '~/modules/auth/components/AuthForm.vue'

definePageMeta({
	layout: 'auth'
})

useHead({
	title: 'Auth'
})

const currentPageTab = ref<PageTabType>('start')
const router = useRouter()

const setPageTab = (tab: PageTabType) => {
	currentPageTab.value = tab
	router.push({ query: { step: tab } })
}

onMounted(() => {
	if (router.currentRoute.value.query.step) {
		currentPageTab.value = router.currentRoute.value.query.step as PageTabType
	}
})

//TODO input поменять
</script>

<template>
	<div
		class="bg-[url(/assets/images/background-image.png)] bg-center bg-cover bg-no-repeat h-screen fixed inset-0"
	>
		<div class="bg-black/80 -z-10 absolute backdrop-blur-md inset-0" />

		<div class="grid grid-cols-[450px_1fr] h-[calc(100vh-80px)] m-10">
			<div
				class="flex flex-col bg-root-950 h-[calc(100vh-80px)] rounded-l-xl text-nowrap w-full px-20 relative"
			>
				<div class="absolute right-5 top-5">
					<IconLanguageSwitch />
				</div>
				<div class="h-full my-auto">
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

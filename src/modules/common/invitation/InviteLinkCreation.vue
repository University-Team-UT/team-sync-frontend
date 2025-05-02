<script setup lang="ts">
import { MembersService } from '~/modules/workspace/api/members.service'
import { useAppStore } from '~/shared/stores/AppStore'
import { useAuthStore } from '~/shared/stores/AuthStore'

const { t } = useI18n()

const value = ref('')
const copied = ref(false)

function copy() {
	navigator.clipboard.writeText(value.value)
	copied.value = true

	setTimeout(() => {
		copied.value = false
	}, 2000)
}
const switched = ref(false)
const authStore = useAuthStore()
const appStore = useAppStore()

const { fetch, isLoading } = useQuery({
	queryFn: () =>
		MembersService.getInviterLink(
			authStore.user.id as string,
			appStore.currentWorkspace!.id
		),
	onSuccess(data) {
		value.value = data.data
	}
})

watch(switched, newVal => newVal === true && fetch())
</script>

<template>
	<div class="flex items-center">
		<p>{{ t('invite.tabs.content.title') }}</p>
		<UTooltip
			arrow
			:text="t('invite.tabs.content.tooltip')"
			:ui="{
				content: 'h-auto max-w-68',
				text: 'text-wrap text-justify'
			}"
			:content="{
				align: 'start',
				side: 'bottom',
				sideOffset: 8
			}"
		>
			<UButton
				icon="lucide:circle-help"
				color="neutral"
				variant="link"
				class="hover:text-primary-400"
				size="sm"
			/>
		</UTooltip>
		<USwitch v-model="switched" size="sm" />
	</div>
	<div class="flex gap-5 justify-between">
		<UInput
			v-model="value"
			:ui="{ trailing: 'pr-0.5' }"
			color="neutral"
			:loading="isLoading"
			variant="soft"
			disabled
			:placeholder="t('invite.link')"
			class="w-full"
			><template v-if="value?.length" #trailing
				><UButton
					:icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
					:aria-label="t('invite.copy')"
					color="neutral"
					variant="ghost"
					class="hover:bg-transparent hover:text-primary-400"
					@click="copy"
			/></template>
		</UInput>
	</div>
</template>

<style scoped></style>

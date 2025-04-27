<script setup lang="ts">
import type { IInvites } from './InvitationModal.vue'

const { t } = useI18n()

defineProps<{ invites: IInvites[] }>()

defineEmits<{
	removeInvite: [id: string]
	addInvite: []
	onUpdateEmail: [id: string, value: string]
}>()
</script>

<template>
	<div class="flex flex-col gap-1">
		<div v-for="item in invites" :key="item.id" class="flex gap-8">
			<UInput
				:model-value="item.email"
				:placeholder="t('invite.tabs.mail')"
				size="lg"
				class="w-full"
				variant="soft"
				@update:model-value="$emit('onUpdateEmail', item.id, $event as string)"
			/>

			<UButton
				disabled
				:ui="{
					base: 'px-6 '
				}"
				icon="lucide:handshake"
				:label="t('invite.tabs.guest')"
				color="neutral"
				variant="soft"
			/>

			<UButton
				icon="lucide:x"
				color="neutral"
				variant="link"
				@click="$emit('removeInvite', item.id)"
			/>
		</div>
	</div>
	<UButton
		icon="lucide:circle-fading-plus"
		size="md"
		class="not-disabled:text-root-400 self-start"
		variant="link"
		:disabled="invites.length > 5"
		@click="$emit('addInvite')"
		>{{ t('invite.tabs.more') }}</UButton
	>
</template>

<style scoped></style>

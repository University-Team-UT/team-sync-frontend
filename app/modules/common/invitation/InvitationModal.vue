<script setup lang="ts">
import AddParticipant from './AddParticipant.vue'
import InviteLinkCreation from './InviteLinkCreation.vue'

const { t } = useI18n()

const items = ref([
	{
		label: t('invite.tabs.team'),
		slot: 'team'
	},
	{
		label: t('invite.tabs.guest'),
		slot: 'guest'
	}
])
</script>

<template>
	<UModal
		:title="t('invite.title')"
		:description="t('invite.description')"
		:ui="{
			content: 'p-2 min-w-150'
		}"
	>
		<slot name="trigger" />

		<template #body>
			<UTabs :items="items" class="w-full">
				<template #team>
					<div class="flex flex-col gap-5">
						<InviteLinkCreation />
						<AddParticipant />
					</div>
				</template>

				<template #guest> 2 </template>
			</UTabs>
		</template>

		<template #footer>
			<div class="flex flex-col w-full gap-4">
				<div class="flex justify-end w-full gap-2">
					<UButton
						color="primary"
						:label="t('invite.footer.cancel')"
						variant="outline"
					/>
					<UButton
						color="primary"
						:label="t('invite.footer.send')"
						variant="ghost"
					/>
				</div>
			</div>
		</template>
	</UModal>
</template>

<style scoped></style>

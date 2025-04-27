<script setup lang="ts">
import AddGuest from './AddGuest.vue'
import AddParticipant from './AddParticipant.vue'
import InviteLinkCreation from './InviteLinkCreation.vue'
import { MembersService } from '~/modules/workspace/api/members.service'
import { useAppStore } from '~/shared/stores/AppStore'
import { useAuthStore } from '~/shared/stores/AuthStore'
import { WorkbenchRole } from '~/types/common.types'

const { t } = useI18n()

export interface IInvites {
	email: string
	role: WorkbenchRole
	id: string
}
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
const invites = ref<IInvites[]>([
	{ email: '', role: WorkbenchRole.WORKER, id: new Date().toString() }
])

const toast = useToast()

const addInvite = () => {
	if (invites.value.length >= 5) return
	invites.value.push({
		email: '',
		role: WorkbenchRole.WORKER,
		id: new Date().toString()
	})
}
const removeInvite = (id: string) => {
	invites.value = invites.value.filter(invite => invite.id !== id)
}

const setInviteRoleById = (id: string, role: WorkbenchRole) => {
	invites.value = invites.value.map(invite => {
		if (invite.id === id) {
			return { ...invite, role }
		}
		return invite
	})
}

const { mutate } = useMutation({
	mutationFn: (data: {
		memberId: string
		workbenchId: string
		emails: IInvites[]
	}) =>
		MembersService.inviteMembers(data.memberId, data.workbenchId, data.emails),
	onSuccess: () => {
		toast.add({
			description: 'Приглашения были отосланы.',
			color: 'success'
		})
	},
	onError: err => {
		toast.add({
			description: err.message,
			color: 'neutral'
		})
	}
})

const app = useAppStore()
const auth = useAuthStore()

const onClickSendData = () => {
	mutate({
		memberId: auth.user!.id!,
		workbenchId: app.currentWorkspace!.id,
		emails: invites.value
	})
}
function onUpdateInvite(id: string, value: string) {
	const target = invites.value.find(i => i.id === id)
	if (target) target.email = value
}
const open = ref(false)
</script>

<template>
	<UModal
		v-model:open="open"
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
						<AddParticipant
							:invites="invites"
							@add-invite="addInvite"
							@remove-invite="removeInvite"
							@set-invite-role-by-id="setInviteRoleById"
							@on-update-email="onUpdateInvite"
						/>
					</div>
				</template>

				<template #guest>
					<div class="flex flex-col mt-5">
						<AddGuest
							:invites="invites"
							@add-invite="addInvite"
							@remove-invite="removeInvite"
							@on-update-email="onUpdateInvite"
						/>
					</div>
				</template>
			</UTabs>
		</template>

		<template #footer>
			<div class="flex flex-col w-full gap-4">
				<div class="flex justify-end w-full gap-2">
					<UButton
						color="primary"
						:label="t('invite.footer.cancel')"
						variant="outline"
						@click="open = false"
					/>
					<UButton
						color="primary"
						:label="t('invite.footer.send')"
						variant="ghost"
						@click="onClickSendData"
					/>
				</div>
			</div>
		</template>
	</UModal>
</template>

<style scoped></style>

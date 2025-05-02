<script setup lang="ts">
import AddGuest from '~/modules/common/invitation/AddGuest.vue'
import AddParticipant from '~/modules/common/invitation/AddParticipant.vue'
import InviteLinkCreation from '~/modules/common/invitation/InviteLinkCreation.vue'
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

const emit = defineEmits(['nextStep'])
</script>

<template>
	<div
		class="flex flex-col h-130 bg-root-800 min-w-2/5 z-1000 p-10 rounded-xl items-center justify-center gap-10 relative"
	>
		<span class="text-2xl absolute top-8 text-center"
			>Настрой Team<span class="text-primary-400 font-bold">Sync</span></span
		>
		<span class="text-xl absolute top-18 text-center"
			>Пригласите свою команду в TeamSync</span
		>

		<div
			class="flex flex-col w-6/7 min-h-3/6 bg-root-900 rounded-xl p-2 z-1000"
		>
			<div>
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
						<div class="flex flex-col mt-10">
							<AddGuest
								:invites="invites"
								@add-invite="addInvite"
								@remove-invite="removeInvite"
								@on-update-email="onUpdateInvite"
							/>
						</div>
					</template>
				</UTabs>
			</div>

			<div>
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
							@click="onClickSendData"
						/>
					</div>
				</div>
			</div>
		</div>
		<UButton
			label="Продолжить"
			color="primary"
			size="lg"
			variant="solid"
			class="px-8 text-xl font-bold absolute bottom-8"
			@click="emit('nextStep')"
		/>
	</div>
</template>

<style scoped></style>

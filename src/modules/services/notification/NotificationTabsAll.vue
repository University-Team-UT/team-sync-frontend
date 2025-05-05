<script setup lang="ts">
import BreadCrumps from './BreadCrumps.vue'
import type { INotification, ServiceNotification } from './notifications.types'
import { MembersService } from '~/modules/workspace/api/members.service'

defineProps<{
	notifications: INotification[]
}>()

const toast = useToast()

// const { mutate } = useMutation({
// 	mutationFn: (inviteId: string) =>
// 		MembersService.acceptInvite(inviteId, workspaceId),

// 	onSuccess: () => {
// 		toast.add({
// 			title: 'Вы успешно добавлены в рабочее пространство',
// 			color: 'success'
// 		})
// 	},

// 	onError: err => {
// 		toast.add({
// 			title: 'Ошибка',
// 			description: err.message,
// 			color: 'error'
// 		})
// 	}
// })
</script>

<template>
	<USeparator class="w-full mt-4" />
	<div
		v-for="notification in notifications"
		:key="notification.id"
		class="flex flex-col items-start relative border-b-1 last:border-b-0 border-neutral-900 py-6"
	>
		<div class="flex w-full gap-4 items-center group">
			<div class="flex bg-root-800/50 rounded-lg p-2">
				<UIcon name="ci:timer" class="size-8" />
			</div>
			<div class="flex gap-2 flex-col items-center w-full">
				<span class="line-clamp">
					<span class="mr-2">{{ notification.title }}</span>
					{{ notification.content.split('-')[0] }}
				</span>
				<div class="flex items-center self-start">
					<span
						class="px-2 inline-flex rounded-lg bg-error-500/30 mr-2 text-error-400 font-bold"
						>{{
							new Date(notification.createdAt).toLocaleDateString('ru-RU', {
								month: 'long',
								day: 'numeric'
							})
						}}</span
					>
					<a :href="notification.content.split(' - ')[1]">
						<UButton size="xs" variant="soft" label="принять" />
					</a>
				</div>
			</div>

			<UButton
				:ui="{
					base: 'opacity-0 group-hover:opacity-100 hover:primary-400 group-hover:text-neutral-400 transition group-hover:ease-out duration:100'
				}"
				size="lg"
				icon="lucide:ellipsis"
				variant="link"
			/>
		</div>
	</div>
</template>

<style scoped></style>

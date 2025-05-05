<script setup lang="ts">
import { CommentsService, type IComment } from '../api/comments.service'

import SendComment from './SendComment.vue'
import { useAccountStore } from '~/shared/stores/AccountStore'
import { useAppStore } from '~/shared/stores/AppStore'
import { useAuthStore } from '~/shared/stores/AuthStore'
import { useWorkspaceStore } from '~/shared/stores/WorkspaceStore'

const authStore = useAuthStore()
const appStore = useAppStore()

defineProps<{
	comments: IComment[]
}>()

const isMine = computed(() => (id: string) => id === authStore.userId)
const emit = defineEmits<{ getComments: [] }>()
const toast = useToast()
const wStore = useWorkspaceStore()

const { mutate: deleteComment } = useMutation({
	mutationFn: (id: string) =>
		CommentsService.deleteComment(
			id,
			authStore.userId!,
			appStore.currentWorkspace!.id
		),
	onSuccess: () => {
		toast.add({
			title: 'Комментарий удален',
			color: 'success'
		})
		emit('getComments')
	},
	onError: error => {
		toast.add({
			title: 'Ошибка при удалении комментария',
			color: 'error',
			description: error.message
		})
	}
})
</script>

<template>
	<div class="flex flex-col w-full relative">
		<div class="flex flex-col w-full min-h-80 gap-6 mb-20 overflow-y-auto">
			<div
				v-for="item in comments"
				:key="item.id"
				class="flex group gap-2 relative"
				:class="[isMine(item.author.user.id) ? 'justify-end' : 'justify-start']"
			>
				<div
					class="flex flex-col bg-root-700/60 rounded-lg p-2"
					:class="[isMine(item.author.user.id) ? 'order-2' : 'order-1']"
				>
					<div class="flex justify-between items-center">
						<span class="text-primary-400 text-sm">
							{{ item.author.user.displayName }}
						</span>
						<UButton
							v-if="
								authStore.userId === item.author.user.id ||
								appStore.currentWorkspace?.userRole === 'ADMIN'
							"
							icon="lucide:trash"
							size="xs"
							variant="soft"
							@click="deleteComment(item.id)"
						/>
					</div>
					<span class="min-w-30 max-w-70 break-words">{{ item.content }}</span>
					<span
						class="text-xs self-end"
						:class="[isMine(item.author.user.id) ? 'order-1' : 'order-2']"
					>
						{{
							new Date(item.createdAt).toLocaleDateString('ru-RU', {
								day: '2-digit',
								month: '2-digit'
							})
						}}
						/
						{{
							new Date(item.createdAt).toLocaleTimeString('ru-RU', {
								hour: '2-digit',
								minute: '2-digit'
							})
						}}
					</span>
				</div>
			</div>
		</div>

		<div
			class="fixed bottom-0 inset-x-0 p-2 pb-5 pt-5 backdrop-blur-2xl bg-gradient-to-t from-root-900 via-root-900/80 to-transparent"
		>
			<SendComment @get-comments="$emit('getComments')" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { TaskKey } from '../../lib/keys'
import { CommentsService } from '../api/comments.service'

import { useAppStore } from '~/shared/stores/AppStore'
import { useAuthStore } from '~/shared/stores/AuthStore'

const text = ref('')

const emit = defineEmits<{ getComments: [] }>()

const sendComment = async () => {
	if (text.value.trim() === '') return
	await mutate()
	text.value = ''
}

const injected = inject(TaskKey)
const appStore = useAppStore()
const authStore = useAuthStore()
const toast = useToast()
const { mutate } = useMutation({
	mutationFn: () =>
		CommentsService.sendComment(
			injected!.value.id,
			appStore.currentWorkspace!.id,
			{ authorId: authStore.user.id!, content: text.value }
		),
	onSuccess: () => {
		emit('getComments')
	},
	onError: error => {
		toast.add({
			title: 'Ошибка при отправке комментария',
			color: 'error',
			description: error.message
		})
	}
})
</script>

<template>
	<UButtonGroup class="w-full">
		<UInput
			v-model="text"
			trailing-icon="lucide:message-square-more"
			placeholder="Комментарий"
			variant="soft"
			class="w-full"
			@keyup.enter="sendComment"
		/>
		<UTooltip text="send">
			<UButton
				:disabled="text.trim().length === 0"
				variant="soft"
				icon="lucide:send"
				@click="sendComment"
			/>
		</UTooltip>
	</UButtonGroup>
</template>

<style scoped></style>

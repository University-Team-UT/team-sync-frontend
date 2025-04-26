<script setup lang="ts">
import { getKeyByWorkspaceMember } from '~/shared/lib/roles.util'
import type { WorkbenchRole } from '~/types/common.types'

const { isCurrent } = defineProps<{
	title: string
	membersCount?: number
	userRole?: WorkbenchRole
	isCurrent?: boolean
}>()

const { t } = useI18n()
</script>

<template>
	<div
		:class="[
			'flex transition-colors gap-2 border border-transparent p-2 items-center rounded-lg',
			isCurrent ? 'cursor-default' : ' border-primary-500 cursor-pointer '
		]"
	>
		<WorkspaceIcon icon="lucide:star" />
		<div class="flex flex-col flex-1">
			<h2 class="text-md line-clamp-1 font-bold">{{ title }}</h2>
			<h2 class="text-sm font-semibold text-gray-400">
				Участников: {{ membersCount }}
				<span v-if="userRole">
					•{{ t(getKeyByWorkspaceMember(userRole).i18nKey) }}</span
				>
			</h2>
		</div>
		<UIcon v-if="isCurrent" name="lucide:check" class="bg-primary-400 size-5" />
	</div>
</template>

<style scoped></style>

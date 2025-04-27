<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'
import type { Row } from '@tanstack/table-core'

import { MembersService } from '~/modules/workspace/api/members.service'
import type { IWorkspaceMember } from '~/modules/workspace/types'
import { getKeyByWorkspaceMember } from '~/shared/lib/roles.util'
import { useAppStore } from '~/shared/stores/AppStore'

useSyncCurrentWorkspace()

definePageMeta({
	layout: 'workspace'
})

const appStore = useAppStore()
const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')
const toast = useToast()

const { mutate: deleteMember, isLoading: loadingAfterDelete } = useMutation({
	mutationFn: (id: string) =>
		MembersService.excludeMember(id, appStore.currentWorkspace!.id),
	onSuccess: () => {
		toast.add({
			title: 'Участник удален из рабочего пространства',
			color: 'error'
		})
	},
	onError: err => {
		toast.add({
			title: err.message,
			color: 'error'
		})
	}
})

const { data: members, isLoading } = useQuery({
	queryFn: () =>
		MembersService.getWorkbenchMembers(appStore.currentWorkspace!.id),
	onSuccess: data => {
		console.log(data)
	},
	enabled: true
})

const columns: TableColumn<IWorkspaceMember>[] = [
	{
		accessorKey: 'user.displayName',
		header: 'Имя'
	},
	{
		accessorKey: 'user.telegramUsername',
		header: 'Telegram'
	},
	{
		accessorKey: 'user.email',
		header: 'Email'
	},
	{
		accessorKey: 'role',
		cell: ({ row }) => {
			return getKeyByWorkspaceMember(row.getValue('role')).i18nKey
		}
	},
	{
		id: 'actions',
		cell: ({ row }) => {
			return (
				appStore.currentWorkspace?.userRole === 'ADMIN' &&
				h(
					'div',
					{ class: 'text-right' },
					h(
						UDropdownMenu,
						{
							content: {
								align: 'end'
							},
							items: getRowItems(row),
							'aria-label': 'Actions dropdown'
						},
						() =>
							h(UButton, {
								icon: 'i-lucide-ellipsis-vertical',
								color: 'neutral',
								variant: 'ghost',
								class: 'ml-auto',
								'aria-label': 'Actions dropdown'
							})
					)
				)
			)
		}
	}
]

function getRowItems(row: Row<IWorkspaceMember>) {
	return (
		appStore.currentWorkspace?.userRole !== 'ADMIN' && [
			{
				type: 'label',
				label: 'Действия'
			},
			{
				label: 'Выгнать из рабочего пространства',
				onSelect() {
					const memberId = row.original.id
					deleteMember(memberId)
				}
			},
			{
				type: 'separator'
			},
			{
				label: 'Поменять роль',
				onSelect() {},
				class: 'opacity-50 disabled hover:bg-transparent'
			}
		]
	)
}
</script>

<template>
	<div class="flex flex-col flex-1 w-full">
		<UTable
			ref="table"
			:data="members?.data"
			:loading="isLoading"
			:columns="columns"
		/>
	</div>
</template>

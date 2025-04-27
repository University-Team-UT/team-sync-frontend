import type { IUserAccount, WorkbenchRole } from '~/types/common.types'

export type TripleExclusiveProps<A, B, C> =
	| (A & { [K in keyof (B & C)]?: never })
	| (B & { [K in keyof (A & C)]?: never })
	| (C & { [K in keyof (A & B)]?: never })

export interface IWorkspace {
	id: string
	title: string
	description: string
	userRole: WorkbenchRole
	membersCount: number
}

export interface IWorkspaceMember {
	id: string
	role: WorkbenchRole
	user: IUserAccount
}

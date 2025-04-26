export enum BaseRoles {
	SUPER_ADMIN = 'SUPER_ADMIN',
	ADMIN = 'ADMIN',
	PARTICIPANT = 'PARTICIPANT',
	GUEST = 'GUEST'
}

export interface IUser {
	id: string | null
	email: string | null
	displayName: string | null
}

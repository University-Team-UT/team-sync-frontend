export enum BaseRoles {
	SUPER_ADMIN = 'SUPER_ADMIN',
	ADMIN = 'ADMIN',
	PARTICIPANT = 'PARTICIPANT',
	GUEST = 'GUEST'
}

export interface IUser {
	id: string | undefined
	email: string | undefined
	displayName: string | undefined
}

export interface IUserAccount {
	telegramUsername: string | undefined
	about: string | undefined
	email: string | undefined
	displayName: string | undefined
}

import * as z from 'zod'

export const registerSchema = z
	.object({
		email: z.string().email('Некорректный email'),
		password: z.string().min(4, 'Пароль должен содержать минимум 4 символов'),
		confirmPassword: z.string().min(4, 'Пароли должны совпадать'),
		displayName: z.string().nonempty('Имя обязательно')
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword']
	})

export type RegisterSchema = z.output<typeof registerSchema>

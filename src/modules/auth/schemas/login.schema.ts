import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email('Неверный email'),
	password: z.string().min(4, 'Минимальная длина пароля - 4 символа')
})

export type LoginSchema = z.output<typeof loginSchema>

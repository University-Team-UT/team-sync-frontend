import type { InjectionKey } from 'vue'

export const tagsKey = Symbol() as InjectionKey<() => void>

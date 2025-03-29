import type { InjectionKey, Ref } from 'vue'

export const isCollapsedKey = Symbol() as InjectionKey<Ref<boolean>>

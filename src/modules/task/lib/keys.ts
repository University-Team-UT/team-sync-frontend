import type { ShallowRef } from 'vue'

import type { ITask } from './types'

export const TaskKey = Symbol() as InjectionKey<ShallowRef<ITask>>

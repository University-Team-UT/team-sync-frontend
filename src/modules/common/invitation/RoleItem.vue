<script setup lang="ts">
import { getKeyByWorkspaceMember } from '~~/src/shared/lib/roles.util'

import type { IRoleItemProps } from './types'

defineProps<{ item: IRoleItemProps }>()
defineEmits<{ click: [] }>()

const { t } = useLocale()
</script>

<template>
	<div @click="$emit('click')" class="flex w-full cursor-pointer">
		<div
			class="flex items-center self-center justify-center bg-root-800 p-6 rounded-lg"
		>
			<UIcon :name="item.icon" class="size-5" />
		</div>

		<div class="flex flex-col items-start justify-center p-2 gap-1">
			<H1 class="text-root-100 text-sm">{{
				t(getKeyByWorkspaceMember(item.role).i18nKey)
			}}</H1>
			<p class="text-root-600 text-xs">{{ item.desc }}</p>
		</div>
	</div>
</template>

<style scoped></style>

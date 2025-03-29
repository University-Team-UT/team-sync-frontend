<script setup lang="ts">
import type { IRoleItemProps } from './types'
import { getKeyByUserRole } from '~/shared/lib/roles.util'

defineProps<{ item: IRoleItemProps }>()

const { t } = useLocale()
</script>

<template>
	<div class="flex w-full">
		<div
			class="flex items-center self-center justify-center bg-root-800 p-6 rounded-lg"
		>
			<UIcon :name="item.icon" class="size-5" />
		</div>

		<div class="flex flex-col items-start justify-center p-2 gap-1">
			<H1 class="text-root-100 text-sm">{{
				t(getKeyByUserRole(item.role).i18nKey)
			}}</H1>
			<p class="text-root-600 text-xs">{{ item.desc }}</p>
		</div>
	</div>
</template>

<style scoped></style>

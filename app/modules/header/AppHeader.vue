<script setup lang="ts">
import SearchInput from '~/modules/common/search/SearchInput.vue'

const { t } = useI18n()

const items = ref([
	{
		label: t('invite.tabs.team'),
		slot: 'team'
	},
	{
		label: t('invite.tabs.guest'),
		slot: 'guest'
	}
])
</script>

<template>
	<header class="w-full h-16 bg-root-800 ml-62 fixed flex">
		<SearchInput class="my-auto" />
		<UModal :title="t('invite.title')" :description="t('invite.description')">
			<UButton
				icon="lucide:search"
				:label="t('invite.index')"
				color="primary"
				variant="soft"
				class="self-center py-2 px-6 size-xl h-10"
			/>

			<template #body>
				<UTabs :items="items" class="w-full">
					<template #team>
						<div class="flex items-center">
							<p>{{ t('invite.tabs.content.title') }}</p>
							<UTooltip
								arrow
								:text="t('invite.tabs.content.tooltip')"
								:ui="{
									content: 'h-auto max-w-68',
									text: 'text-wrap text-justify'
								}"
								:content="{
									align: 'start',
									side: 'bottom',
									sideOffset: 8
								}"
							>
								<UButton
									icon="lucide:circle-help"
									color="neutral"
									variant="link"
									class="hover:text-primary-400"
									size="sm"
								/>
							</UTooltip>
							<USwitch default-value size="sm"/>
						</div>
					</template>

					<template #guest> 2 </template>
				</UTabs>
			</template>

			<template #footer>
				<div class="flex justify-end w-full gap-2">
					<UButton color="primary" label="Dismiss" variant="outline" />
					<UButton color="primary" label="Success" variant="ghost" />
				</div>
			</template>
		</UModal>
	</header>
</template>

<style scoped></style>

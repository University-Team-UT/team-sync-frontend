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
		<UModal
			:title="t('invite.title')"
			:description="t('invite.description')"
			:ui="{
				content: 'p-2 min-w-150'
			}"
		>
			<UButton
				icon="lucide:user-plus"
				:label="t('invite.index')"
				color="primary"
				variant="soft"
				class="self-center py-2 px-6 size-xl h-10"
			/>

			<template #body>
				<UTabs :items="items" class="w-full">
					<template #team>
						<div class="flex flex-col gap-2">
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
								<USwitch default-value size="sm" />
							</div>
							<div class="flex gap-5 justify-between">
								<UButtonGroup class="w-full">
									<UInput
										color="neutral"
										variant="soft"
										:placeholder="t('invite.link')"
										class="w-full"
									/>

									<UButton color="neutral" variant="soft" icon="lucide-files" />
								</UButtonGroup>
								<UButton
									color="primary"
									class="font-bold self-center px-7"
									size="sm"
									>{{ t('invite.copy') }}</UButton
								>
							</div>
						</div>
					</template>

					<template #guest> 2 </template>
				</UTabs>
			</template>

			<template #footer>
				<div class="flex flex-col w-full gap-4">
					<div class="flex gap-8">
						<UInput
							:placeholder="t('invite.footer.mail')"
							size="lg"
							class="w-full"
							variant="soft"
						/>
						<UPopover
							:content="{
								align: 'end',
								side: 'bottom',
								sideOffset: 8
							}"
						>
							<UButton
								:ui="{
									base: 'px-6 '
								}"
								icon="lucide:handshake"
								:label="t('invite.footer.role')"
								color="neutral"
								variant="soft"
							/>

							<template #content>
								<Placeholder class="max-w-56 m-4 flex flex-col">
									<div
										class="grid items-center justify-center grid-cols-8 gap-x-4"
									>
										<div
											class="col-span-2 flex flex-col items-center justify-center bg-root-800 p-4 px-6 rounded-lg"
										>
											<UIcon name="lucide:crown" class="h-4 w-4" />
										</div>

										<div
											class="flex col-span-6 flex-col items-start justify-center p-2 gap-1"
										>
											<H1 class="text-root-100 text-sm">Админ супер</H1>
											<p class="text-root-600 text-xs">
												Управляет настройками проекта в целом
											</p>
										</div>

										<div
											class="col-span-2 flex flex-col items-center justify-center bg-root-800 p-4 px-6 rounded-lg"
										>
											<UIcon name="lucide:flame" class="h-4 w-4" />
										</div>

										<div
											class="col-span-6 flex flex-col items-start p-2 rounded-lg gap-1"
										>
											<H1 class="text-root-100">Админ </H1>
											<p class="text-root-600 text-xs">Управляет настройками</p>
										</div>

										<div
											class="col-span-2 flex flex-col items-center justify-center bg-root-800 p-4 px-6 rounded-lg"
										>
											<UIcon name="lucide:handshake" class="h-4 w-4" />
										</div>

										<div
											class="col-span-6 flex flex-col items-start p-2 rounded-lg gap-1"
										>
											<H1 class="text-root-100">Участник </H1>
											<p class="text-root-600 text-xs">
												Работает и может приглашать других
											</p>
										</div>
									</div>
								</Placeholder>
							</template>
						</UPopover>
						<UButton icon="lucide:x" color="neutral" variant="link" />
					</div>
					<UButton
						icon="lucide:circle-fading-plus"
						size="md"
						class="text-root-400"
						variant="link"
						>{{ t('invite.footer.more') }}</UButton
					>
					<div class="flex justify-end w-full gap-2">
						<UButton
							color="primary"
							:label="t('invite.footer.cancel')"
							variant="outline"
						/>
						<UButton
							color="primary"
							:label="t('invite.footer.send')"
							variant="ghost"
						/>
					</div>
				</div>
			</template>
		</UModal>
	</header>
</template>

<style scoped></style>

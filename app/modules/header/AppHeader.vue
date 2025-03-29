<script setup lang="ts">
import InvitationModal from '../common/invitation/InvitationModal.vue'
import ServicesMenu from '../services/ServicesMenu.vue'

import AvatarDropdown from './AvatarDropdown.vue'

const { t } = useI18n()

const { isCollapsed } = useSidebar()
</script>

<template>
	<header
		:class="[
			'h-16 bg-root-800 flex items-center justify-end fixed p-4 border-b border-root-950 z-10',
			'left-14 right-0 ',
			{ 'left-62': !isCollapsed }
		]"
	>
		<div class="flex items-center gap-2 justify-self-end">
			<InvitationModal>
				<template #trigger>
					<UButton
						icon="lucide:user-plus"
						:label="t('invite.index')"
						color="primary"
						variant="soft"
						class="self-center py-2 px-6 size-xl h-10"
				/></template>
			</InvitationModal>
			<ServicesMenu class="my-auto" />
			<AvatarDropdown> <AvatarPic /></AvatarDropdown>
		</div>
	</header>
</template>

<style scoped></style>

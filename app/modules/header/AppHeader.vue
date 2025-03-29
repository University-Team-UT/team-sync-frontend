<script setup lang="ts">
import InvitationModal from '../common/invitation/InvitationModal.vue'
import ServicesMenu from '../services/ServicesMenu.vue'

import AvatarDropdown from './AvatarDropdown.vue'
import SearchInput from '~/modules/common/search/SearchInput.vue'

const { t } = useI18n()
</script>

<template>
	<header
		class="h-16 bg-root-800 ml-62 w-[calc(100%-248px)] items-center justify-between fixed flex p-4 border-b border-root-900 z-10"
	>
		<SearchInput class="justify-self-center items-center" />
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

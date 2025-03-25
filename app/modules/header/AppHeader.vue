<script setup lang="ts">
import InvitationModal from '../common/invitation/InvitationModal.vue'
import HeaderMenu from './HeaderMenu.vue'
import SearchInput from '~/modules/common/search/SearchInput.vue'

const { t } = useI18n()
</script>

<template>
	<header class="w-full h-16 bg-root-800 ml-62 fixed flex">
		<SearchInput class="my-auto" />
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
		<HeaderMenu/>
	</header>
</template>

<style scoped></style>

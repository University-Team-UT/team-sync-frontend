<script setup lang="ts">
import SearchInput from '~/modules/common/search/SearchInput.vue'
const { t } = useI18n()
</script>

<template>
	<header class="w-full h-16 bg-root-800 ml-62 fixed  flex">
		<SearchInput class="my-auto" />
	 <UModal
    :title="t('invite_title')"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  >
    <UButton icon="lucide:search" :label= "t('invite')" color="primary" variant="soft" class="self-center py-2 px-6 size-xl h-10" />

    <template #body>

    </template>
  </UModal>	

	</header>
	
</template>

<style scoped></style>

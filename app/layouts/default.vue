<script setup lang="ts">
import  SearchInput from '~/modules/common/search/SearchInput.vue';

</script>

<template>
	<div class="flex">
		<aside class="bg-green-400 fixed inset-y-0 w-62">1</aside>

		<header class="w-full h-16 bg-[#252527] ml-62 fixed inst-x-0 flex">
			<SearchInput class="my-auto" />
		</header>
		<div class="flex flex-col mt-16 ml-62 w-full">
			<main>
				<slot /> 
			</main>
		</div>
	</div>
</template>

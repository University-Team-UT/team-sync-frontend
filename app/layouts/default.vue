<template>
	<div class="flex">
		<aside class="bg-green-400 fixed inset-y-0 w-[250px]">1</aside>

		<header class="w-full h-[65px] bg-red-400 ml-[250px] fixed inst-x-0">
			1
		</header>
		<div class="flex flex-col mt-[65px] ml-[250px] w-full">
			<main>
				<slot />
			</main>
		</div>
	</div>
</template>

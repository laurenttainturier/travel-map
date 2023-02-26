<script lang="ts">
	import { Navbar, NavBrand, NavHamburger } from 'flowbite-svelte';

	export let toggle: () => void;
</script>

<Navbar
	navClass="md:hidden w-full px-3 py-3 mx-auto max-w-8xl lg:px-4"
	navDivClass="flex items-center justify-between"
>
	<NavBrand>
		<img src="/japan_flag.svg" class="mr-3 h-8" alt="Japan flag" />
		<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Japan</span>
	</NavBrand>
	<NavHamburger btnClass="mr-2" on:click={toggle} />
</Navbar>

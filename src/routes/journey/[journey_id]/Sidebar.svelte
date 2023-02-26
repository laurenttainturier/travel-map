<script lang="ts">
	import {
		Sidebar,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarWrapper,
	} from 'flowbite-svelte';

	import { ICON_MARKERS } from '$lib/point-of-interest/categories';
	import type { PointOfInterest } from '$lib/point-of-interest/type';

	export let show: boolean;
	export let categories: Record<string, PointOfInterest[]>;
	export let openInfoWindow: (id: string) => void;
</script>

<Sidebar asideClass="{!show ? 'hidden' : ''} md:visible w-64">
	<SidebarWrapper divClass="overflow-y-auto h-full py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
		<SidebarGroup>
			{#each Object.entries(categories) as [category, items]}
				<SidebarDropdownWrapper
					label={category}
					spanClass="flex-1 ml-3 text-left whitespace-nowrap"
					btnClass="flex items-center p-1 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
				>
					<svelte:fragment slot="icon">
						{#if ICON_MARKERS[category]}
							<img src={ICON_MARKERS[category]} alt={category} />
						{/if}
					</svelte:fragment>
					{#each items as item}
						<SidebarDropdownItem
							aClass="flex items-center pl-5 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
							class="cursor-pointer"
							label={item.name}
							href={undefined}
							on:click={() => openInfoWindow(item.id)}
						/>
					{/each}
				</SidebarDropdownWrapper>
			{/each}
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>

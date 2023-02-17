<script lang='ts'>
	import { Sidebar, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarWrapper } from 'flowbite-svelte';

	export let categories;
</script>

<div class='hidden md:visible md:flex w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'>
	<Sidebar>
		<!--<Sidebar asideClass="hidden md:visible md:flex">-->
		<SidebarWrapper>
			<SidebarGroup>
				{#each Object.entries(categories) as [category, items]}
					<SidebarDropdownWrapper
						label={category}
						spanClass='flex-1 ml-3 text-left whitespace-nowrap'
						btnClass='flex items-center w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
					>
						<svelte:fragment slot='icon'>
							<!--{#if ICON_MARKERS[category]}-->
							<!--	<img src={ICON_MARKERS[category]} alt={category}>-->
							<!--{/if}-->
						</svelte:fragment>
						{#each items as item}
							<SidebarDropdownItem class='cursor-pointer' label={item.name} href={null} on:click={() => {
				                            //$markerStore.openMarkerInfo(item.id)
				                        }} />
						{/each}
					</SidebarDropdownWrapper>
				{/each                                  }
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</div>
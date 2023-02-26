<script lang='ts'>
	import groupBy from '$lib/utils/groupBy';
	import Map from '$lib/map/Map.svelte';
	import MapMarker from '$lib/map/MapMarker.svelte';

	import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: categories = groupBy(data.data.points, (it) => it.mainCategory);

	let showSidebar = true;
	let openedMarkerWindowId: string;

	const openWindow = (id: string) => {
		openedMarkerWindowId = id;
	};
</script>

<svelte:head>
	<title>Japan</title>
</svelte:head>

<div class='w-screen h-screen max-h-screen flex flex-col'>
	<Navbar toggle={() => (showSidebar = !showSidebar)} />
	<div class='h-full w-full max-h-screen flex'>
		<Sidebar {categories} openInfoWindow={openWindow} show={showSidebar} />
		<Map journeyMap={data.map}>
			{#each data.data.points as point}
				<MapMarker
					pointOfInterest={point}
					openInfoWindow={openWindow}
					isOpen={point.id === openedMarkerWindowId}
				/>
			{/each}
		</Map>
	</div>
</div>

<script lang="ts">
	/*global google*/
	import { setContext } from 'svelte';

	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';

	import { MAP_CONTEXT_KEY } from './map';

	import type { JourneyMap } from '$lib/journey';

	export let journeyMap: JourneyMap;

	let map: google.maps.Map | undefined;
	let container: HTMLElement;

	setContext(MAP_CONTEXT_KEY, {
		getMap: () => map,
	});

	window.initMap = () => {
		map = new google.maps.Map(container, {
			zoom: journeyMap.zoomLevel,
			center: journeyMap.center,
		});
	};
</script>

<svelte:head>
	<script
		src="https://maps.googleapis.com/maps/api/js?key={PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap"
	>
	</script>
</svelte:head>

<div class="w-full h-full" bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

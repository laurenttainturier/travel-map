<script lang='ts'>
	import type { JourneyMap } from '$lib/journey';

	import { PUBLIC_GOOGLE_MAPS_API_KEY } from '$env/static/public';

	export let map: JourneyMap;

	let container;

	declare global {
		interface Window {
			initMap: () => void;
		}
	}

	window.initMap = () => {
		new google.maps.Map(container, {
			zoom: map.zoomLevel,
			center: map.center,
		});
	};
</script>

<svelte:head>
	<script
		src='https://maps.googleapis.com/maps/api/js?key={PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap'>
	</script>
</svelte:head>

<div class='w-full h-full' bind:this={container}></div>

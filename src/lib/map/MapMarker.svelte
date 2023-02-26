<script lang="ts">
	/*global google*/
	import { getContext, onMount } from 'svelte';

	import type { PointOfInterest } from '$lib/point-of-interest/type';

	import { MAP_CONTEXT_KEY } from './map';
	import { buildInfoWindow } from './infowindow';

	export let pointOfInterest: PointOfInterest;
	export let openInfoWindow: (id: string) => void;
	export let isOpen: boolean;

	const { getMap } = getContext(MAP_CONTEXT_KEY) satisfies { getMap: () => google.maps.Map };
	const map: google.maps.Map = getMap();

	let infoWindow: google.maps.InfoWindow | undefined;

	const marker = new google.maps.Marker({
		map: map,
		icon: pointOfInterest.iconMarker
			? {
					url: pointOfInterest.iconMarker,
					scaledSize: new google.maps.Size(30, 30),
			  }
			: undefined,
		position: new google.maps.LatLng(pointOfInterest.latitude, pointOfInterest.longitude),
	});

	onMount(() => {
		infoWindow = new google.maps.InfoWindow({
			content: buildInfoWindow(pointOfInterest),
		});

		marker.addListener('click', () => {
			openInfoWindow(pointOfInterest.id);
		});
	});

	function handleInfoWindow(
		map: google.maps.Map,
		marker: google.maps.Marker,
		isOpen: boolean,
		infoWindow: google.maps.InfoWindow | undefined
	) {
		if (!infoWindow) {
			return;
		}

		if (isOpen) {
			infoWindow.open({
				map: map,
				anchor: marker,
			});
		} else {
			infoWindow.close();
		}
	}

	$: handleInfoWindow(map, marker, isOpen, infoWindow);
</script>

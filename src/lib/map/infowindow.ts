import type { PointOfInterest, SelectProperty } from '$lib/point-of-interest/type';

export function buildInfoWindow(pointOfInterest: PointOfInterest) {
	return `
		<div class='infoWindow'>
			<!-- Title -->
			<h2 class='text-xl my-2 font-bold'>${pointOfInterest.name}</h2>
			${pointOfInterest.categories.map(buildInfoWindowCategory)}

			<!-- Description -->
			<p class='text-sm my-2 w-64'>${pointOfInterest.description}</p>
			
			<!-- Links -->
			${buildInfoWindowLink(pointOfInterest.notionUrl, 'Notion', '/notion.svg')}
			${buildInfoWindowLink(pointOfInterest.googleMapUrl, 'Google Maps', '/google_maps.svg')}
		</div>
	`;
}

function buildInfoWindowCategory(category: SelectProperty) {
	const color = category.color;

	return `
		<span class='bg-${color}-100 text-${color}-800 text-sm font-medium mr-1.5 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300'>
			${category.name}
		</span>
	`;
}

function buildInfoWindowLink(href: string, name: string, icon: string) {
	return `
		<a href='${href}' target='_blank' rel='noopener noreferrer'>
			<button
				disabled
				type='button'
				class='py-1 px-2 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 cursor-pointer focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center'
			>
				<img class='w-5 h-5 mr-2 -ml-1' src='${icon}' alt='${name}' />
				<div>${name}</div>
			</button>
		</a>
	`;
}

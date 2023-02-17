import { error } from '@sveltejs/kit';

import { getJourneyInfo } from '$lib/server/internal/journey/decrypt';
import { getPointsOfInterest } from '$lib/point-of-interest/get-points-of-interest';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const journeyInfo = getJourneyInfo(params.journey_id);

	if (journeyInfo == null) {
		throw error(404, 'Not found');
	}

	return {
		data: await getPointsOfInterest(journeyInfo.notionKey, journeyInfo.databaseId),
		map: journeyInfo.map,
	};
};

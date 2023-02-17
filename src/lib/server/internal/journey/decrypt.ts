import NodeRSA from 'node-rsa';
import { RSA_PRIVATE_KEY } from '$env/static/private';
import type { JourneyMap } from '../../../journey';

const rsa = new NodeRSA(RSA_PRIVATE_KEY);

export function getJourneyInfo(journeyKey: string | undefined): JourneyInfo | null {
	try {
		const rawJourneyInfo = rsa.decrypt(journeyKey ?? '', 'utf8');

		return JSON.parse(rawJourneyInfo);
	} catch (e) {
		return null;
	}
}

export interface JourneyInfo {
	notionKey: string;
	databaseId: string;
	map: JourneyMap;
}

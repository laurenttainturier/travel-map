import { PUBLIC_NOTION_API } from '$env/static/public';

import type { Database } from './type';

export async function getItemsFromDatabase(notionKey: string, databaseId: string) {
	const headers = {
		Authorization: `Bearer ${notionKey}`,
		'Notion-Version': '2022-06-28',
		'Content-Type': 'application/json',
	};
	const body = {};
	const requestOptions = {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(body),
	};

	return (
		(await fetch(`${PUBLIC_NOTION_API}/databases/${databaseId}/query`, requestOptions)
			.then((response) => response.json())
			// .then(JSON.stringify)
			// .then(result => result.results.map(mapRawResponse))
			// .then(console.debug)
			.catch((error) => console.log('error', error))) satisfies Database
	);
}

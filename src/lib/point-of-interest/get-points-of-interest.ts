import type { PointsOfInterest } from './type';
import { getItemsFromDatabase } from '../server/api/notion/database/get-notion-database-items';
import { mapDatabaseToPointsOfInterest } from './mapper';

export async function getPointsOfInterest(
	notionKey: string,
	databaseId: string
): Promise<PointsOfInterest> {
	const database = await getItemsFromDatabase(notionKey, databaseId);

	return mapDatabaseToPointsOfInterest(database);
}

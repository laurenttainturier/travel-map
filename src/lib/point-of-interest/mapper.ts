import { v4 as uuidv4 } from 'uuid';

import type { Database, DatabaseItem } from '$lib/server/api/notion/database/type';
import type { FormulaProperty, TextProperty } from '$lib/server/api/notion/database/type';

import type { PointOfInterest, PointsOfInterest } from './type';
import { ICON_MARKERS } from './categories';

export function mapDatabaseToPointsOfInterest(database: Database): PointsOfInterest {
	return {
		points: database.results.map(mapDatabaseItemToPointOfInterest),
	};
}

function mapDatabaseItemToPointOfInterest(databaseItem: DatabaseItem): PointOfInterest {
	const properties = databaseItem.properties;
	const mainCategory = properties.Catégorie.multi_select[0]?.name;

	return {
		id: uuidv4(),
		name: properties.Nom.title.map((it) => it.plain_text).join('\n'),
		description: getTextPropertyValue(properties.Description),
		latitude: Number(getFormulaPropertyValue(properties.Latitude)),
		longitude: Number(getFormulaPropertyValue(properties.Longitude)),
		mainCategory: mainCategory,
		categories: properties.Catégorie.multi_select,
		address: getTextPropertyValue(properties.Localité),
		notionUrl: databaseItem.url,
		googleMapUrl: properties.Localisation.url,
		iconMarker: ICON_MARKERS[mainCategory],
	};
}

function getTextPropertyValue(textProperty: TextProperty): string {
	return textProperty.rich_text.map((it) => it.plain_text).join('\n');
}

function getFormulaPropertyValue(formulaProperty: FormulaProperty): string {
	return formulaProperty.formula.string;
}

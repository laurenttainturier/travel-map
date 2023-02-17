import type { Database, DatabaseItem } from '$lib/server/api/notion/database/type';

import type { PointOfInterest, PointsOfInterest } from './type';
import type { FormulaProperty, TextProperty } from '../server/api/notion/database/type';

export function mapDatabaseToPointsOfInterest(database: Database): PointsOfInterest {
	return {
		points: database.results.map(mapDatabaseItemToPointOfInterest)
	};
}

function mapDatabaseItemToPointOfInterest(databaseItem: DatabaseItem): PointOfInterest {
	const properties = databaseItem.properties;
	return {
		id: '',
		name: properties.Nom.title.map((it) => it.plain_text).join('\n'),
		description: getTextPropertyValue(properties.Description),
		latitude: Number(getFormulaPropertyValue(properties.Latitude)),
		longitude: Number(getFormulaPropertyValue(properties.Longitude)),
		mainCategory: properties.Catégorie.multi_select[0]?.name,
		categories: properties.Catégorie.multi_select,
		address: getTextPropertyValue(properties.Localité),
		notionUrl: databaseItem.url,
		googleMapUrl: properties.Localisation.url,
		iconMarker: ''
	};
}

function getTextPropertyValue(textProperty: TextProperty): string {
	return textProperty.rich_text.map((it) => it.plain_text).join('\n');
}

function getFormulaPropertyValue(formulaProperty: FormulaProperty): string {
	return formulaProperty.formula.string;
}

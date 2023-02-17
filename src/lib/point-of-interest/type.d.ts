export interface PointsOfInterest {
	points: PointOfInterest[];
}

export interface PointOfInterest {
	id: string;
	name: string;
	description: string;
	latitude: number;
	longitude: number;
	mainCategory?: string;
	iconMarker?: string;
	categories: SelectProperty[];
	address: string;
	notionUrl: string;
	googleMapUrl: string;
}

interface SelectProperty {
	name: string;
	color: string;
}

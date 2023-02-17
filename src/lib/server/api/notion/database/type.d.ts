export interface Database {
	results: DatabaseItem[];
}

export interface DatabaseItem {
	url: string;
	properties: {
		Nom: TitleProperty;
		Description: TextProperty;
		Localité: TextProperty;
		Latitude: FormulaProperty;
		Longitude: FormulaProperty;
		Localisation: UrlProperty;
		Catégorie: MultiSelectProperty;
	};
}

interface TextProperty {
	rich_text: { plain_text }[];
}

interface UrlProperty {
	url: string;
}

interface TitleProperty {
	title: { plain_text: string }[];
}

interface MultiSelectProperty {
	multi_select: {
		name: string;
		color: string;
	}[];
}

interface FormulaProperty {
	formula: { string: string };
}

interface TextProperty {
	rich_text: string[];
}

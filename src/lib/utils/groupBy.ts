function groupBy<T, K extends keyof never>(
	items: T[],
	getKey: (item: T) => K | undefined
): Record<K, T[]> {
	return items.reduce((result, item) => {
		const key = getKey(item);

		if (!key) {
			return result;
		}

		return {
			...result,
			[key]: [...(result[key] || []), item],
		};
	}, {} as Record<K, T[]>);
}

export default groupBy;

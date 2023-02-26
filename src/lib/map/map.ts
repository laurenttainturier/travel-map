export const MAP_CONTEXT_KEY = Symbol();

declare global {
	interface Window {
		initMap: () => void;
	}
}

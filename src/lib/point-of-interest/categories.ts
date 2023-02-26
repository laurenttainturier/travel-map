import restaurantIcon from '$lib/assets/categories/restaurant.svg';
import onsenIcon from '$lib/assets/categories/onsen.svg';
import flowerIcon from '$lib/assets/categories/flower.svg';
import gameCenterIcon from '$lib/assets/categories/game_center.svg';
import hinduIcon from '$lib/assets/categories/hindu.svg';
import teaIcon from '$lib/assets/categories/tea.svg';
import beuverieIcon from '$lib/assets/categories/beuverie.svg';
import lieuIcon from '$lib/assets/categories/lieu.svg';
import festivalIcon from '$lib/assets/categories/festival.svg';

export const ICON_MARKERS = {
	Restaurants: restaurantIcon,
	Onsen: onsenIcon,
	Glycines: flowerIcon,
	Azalées: flowerIcon,
	Yaezakura: flowerIcon,
	Némophiles: flowerIcon,
	Sakura: flowerIcon,
	'Game Center': gameCenterIcon,
	Temple: hinduIcon,
	Sanctuaires: hinduIcon,
	'Salon de thé': teaIcon,
	Beuverie: beuverieIcon,
	Lieu: lieuIcon,
	Festival: festivalIcon,
} as Record<string, string>;

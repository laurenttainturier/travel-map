<script lang='ts'>
	import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';
	import Map from './Map.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	function groupBy<T>(items: Map[], key: string): { [key: string]: T[] } {
		return items.reduce((result, item) => {
			console.log(result);
			if (!item[key]) {
				return result;
			}

			return {
				...result,
				[item[key]]: [
					...(result[item[key]] || []),
					item,
				],
			};
		}, {}) as any;
	}

	$: categories = groupBy(data.data.points, 'mainCategory');

</script>

<div class='w-screen h-screen flex flex-col'>
	<Navbar />
	<div class='h-full w-full flex'>
		<Sidebar categories={categories} />
		<Map map={data.map} />
	</div>
</div>

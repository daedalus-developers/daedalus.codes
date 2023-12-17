<script lang="ts">
	import { page } from '$app/stores';
	import { afterUpdate } from 'svelte';
	import { queryParameters, ssp } from 'sveltekit-search-params';
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import { debounce } from '@utils';

	const queryStore = queryParameters({
		page: ssp.number(),
		perPage: ssp.number(),
		q: ssp.string()
	});

	let totalItems: number = 0;
	let totalPages: number = 0;

	afterUpdate(async () => {
		const { totalItems: _totalItems, totalPages: _totalPages } = await $page.data.events;
		totalItems = _totalItems;
		totalPages = _totalPages;
	});

	let paginationSettings = {
		page: 1,
		limit: 6,
		size: totalItems,
		amounts: [3, 6, 9]
	} satisfies PaginationSettings;

	$: paginationSettings.size = totalItems;
	$: paginationSettings.page = $queryStore.page ?? 0;
	$: paginationSettings.limit = $queryStore.perPage ?? 6;

	const onPageChange = (event: CustomEvent): void => {
		$queryStore.page = event.detail;
	};

	const onAmountChange = (event: CustomEvent): void => {
		$queryStore.perPage = event.detail;
	};

	const onQueryChange = (event: KeyboardEvent) => {
		$queryStore.q = (event.target as HTMLInputElement).value;
		return $queryStore.q;
	};
</script>

<div class="flex flex-col items-center gap-4 py-4">
	<input class="input" placeholder="Search..." type="search" on:keyup={debounce(onQueryChange)} />
	<div class="flex items-center gap-4">
		<p class="text-center text-lg font-bold">
			Total:<span class="text-lg text-primary-500">{totalItems}</span>
		</p>
		<p class="text-center text-lg font-bold">
			Page {$queryStore.page + 1} of {totalPages}
		</p>
		<Paginator
			bind:settings={paginationSettings}
			showPreviousNextButtons={true}
			showFirstLastButtons={true}
			on:page={onPageChange}
			on:amount={onAmountChange}
			showNumerals
			amountText=""
		/>
	</div>
</div>

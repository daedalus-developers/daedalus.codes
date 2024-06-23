<script lang="ts">
	import { queryParameters, ssp } from 'sveltekit-search-params';
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';
	import { debounce } from '@utils';
	import type { DaedalusEvent } from '@types';
	import type { ListResult } from 'pocketbase';

	const queryStore = queryParameters({
		page: ssp.number(),
		perPage: ssp.number(),
		q: ssp.string()
	});

	type Props = {
		events: ListResult<DaedalusEvent>;
	};
	const { events }: Props = $props();

	let totalItems: number = $derived(events?.totalItems ?? 0);
	let totalPages: number = $derived.by(() => {
		if ($queryStore.page >= events.totalPages) {
			$queryStore.page = events.totalPages - 1;
		}
		return events.totalPages;
	});

	let paginationSettings = $state<PaginationSettings>({
		page: $queryStore.page ?? 1,
		limit: $queryStore.perPage ?? 6,
		size: events?.totalItems ?? 0,
		amounts: [3, 6, 9]
	});

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
	<input
		class="input"
		placeholder="Search..."
		type="search"
		value={$queryStore.q}
		onkeyup={debounce(onQueryChange)}
	/>
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

<script lang="ts">
	import { queryParam, ssp } from 'sveltekit-search-params';
	import { page } from '$app/stores';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const filter = queryParam('filter', ssp.string('all'));
	$: currentKeyword = $page.url.searchParams.get('q') || '';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	$: currentLimit = $page.url.searchParams.get('limit') || '10';

	let filterOptions = [
		{
			name: 'All',
			value: 'all'
		},
		{
			name: 'Users',
			value: 'users'
		},
		{
			name: 'Events',
			value: 'events'
		}
	];
</script>

<div class="border-surface-300-600-token flex gap-2 border-b-2 pb-3">
	{#each filterOptions as { name, value }}
		<a
			href="/search?q={currentKeyword}&filter={value}"
			class="chip
      dark:variant-filled{value === $page.url.searchParams.get('filter') ? '' : '-surface'}
      {value === $page.url.searchParams.get('filter') ? 'bg-neutral-400' : ''}
      "
		>
			{name}</a
		>
	{/each}
</div>

<script lang="ts">
	import { queryParam, ssp } from 'sveltekit-search-params';
	import { page } from '$app/stores';
	const filter = queryParam('q', ssp.string(''));
	$: currentFilter = $page.url.searchParams.get('filter') || 'all';
</script>

<form action="/search" class="flex items-center gap-2">
	<input
		type="search"
		name="q"
		value={$page.url.searchParams.get('q') || ''}
		placeholder="Search here..."
		class="input
    bg-neutral-300
    dark:variant-filled-surface
    "
	/>
	<input
		type="hidden"
		name="filter"
		bind:value={currentFilter}
		class="input variant-filled-surface"
	/>
	<button class="variant-filled-primary btn">Search</button>
</form>

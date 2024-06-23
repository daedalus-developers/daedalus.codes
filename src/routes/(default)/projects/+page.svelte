<script lang="ts">
	import { page } from '$app/stores';
	import { ProjectCard } from '@components';
	import { ASSET_URL } from '@utils';
	const { data } = $props();

	let queryString = $derived($page.url.searchParams.get('q') || '');
</script>

<svelte:head>
	<title>Daedalus - Projects</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Daedalus - Projects" />
	<meta
		property="og:description"
		content={`We build digital solutions that are both beautiful, functional, efficient and user-friendly.
				We aim to inspire through our work, leaving a lasting impression on your users.`}
	/>
	<meta property="og:image" content={ASSET_URL + 'daedalus.png'} />
</svelte:head>

<!-- SEARCH BOX -->
<div class="py-5 pt-20">
	<form action="" class="flex items-center gap-2">
		<label class="label w-full">
			<input class="input px-4" type="search" placeholder="Search here..." />
		</label>
		<input type="hidden" class="input" name="perPage" />
		<button class="variant-filled btn flex-none">Search</button>
	</form>
</div>

<!-- RESULT ITEMS -->
<div class="min-h-[500px] py-10">
	{#await data.projects}
		Loading...
	{:then query}
		{@const { page, totalPages } = query}
		{@const itemCount = query.items.length}
		<div class="flex gap-2 pb-5 opacity-70">
			<p>
				<b>{query.items.length} </b>item{itemCount > 1 ? 's' : ''} found from page <b>{page}</b> of
				<b>{totalPages}</b>
			</p>
		</div>
		{@const projects = query.items}
		<section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</section>
	{/await}
</div>

<!-- PAGINATION -->
<div class="py-10 text-center">
	{#await data.projects}
		<!-- Dummy buttons -->
		<button class="variant-filled btn" disabled={true}>Prev</button>
		<button class="btn">1</button>
		<button class="variant-filled btn" disabled={true}>Next</button>
	{:then query}
		{@const { page, perPage, totalPages } = query}

		{#if page === 1}
			<button class="variant-filled btn" disabled={true}>Prev</button>
		{:else}
			<a
				href="/projects?q={queryString}&page={page - 1}&perPage={perPage}"
				class="variant-filled btn"
			>
				Prev
			</a>
		{/if}

		<button class="btn">{page}</button>

		{#if page === totalPages}
			<button class="variant-filled btn" disabled={true}>Next</button>
		{:else}
			<a
				href="/projects?q={queryString}&page={page + 1}&perPage={perPage}"
				class="variant-filled btn"
			>
				Next
			</a>
		{/if}
	{/await}
</div>

<script lang="ts">
	import { LOGO_URL } from '@utils';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	export let data: PageData;

	$: queryString = $page.url.searchParams.get('q') || '';
	$: currentPerPage = $page.url.searchParams.get('perPage') || '10';
</script>

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
		{@const { page, perPage, totalItems, totalPages } = query}
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
				<!-- TODO: export this to a card component  -->

				<a
					href={`/projects/${project.name.toLowerCase().replaceAll(' ', '-')}`}
					title={project.name}
					class="min-h-[400px]X borderX card block aspect-[12/15] w-full rounded-lg p-2"
				>
					<header class="bg-surface-50-900-token overflow-hidden rounded-[inherit]">
						<div class="flex aspect-video items-center justify-center overflow-hidden">
							{#if project.preview}
								<img
									class="h-auto max-w-full rounded-[inherit] object-cover"
									src={project.preview}
									alt={project.title}
								/>
							{:else}
								<img
									class="h-auto max-w-full rounded-[inherit] object-cover"
									src={LOGO_URL}
									alt={project.title}
								/>
							{/if}
						</div>
					</header>
					<div class="p-4">
						<section class="py-1">
							{#each project.tags as tag}
								<span class="variant-filled chip mb-2 mr-1">{tag}</span>
							{/each}
						</section>
						<h3 class="text-secondary h4 line-clamp-2 font-bold uppercase">{project.name}</h3>
					</div>
					<footer class="card-footer pb-8">
						<div class=" line-clamp-3">
							{project.description}
						</div>
					</footer>
				</a>
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

<script lang="ts">
	import { LOGO_URL } from '@utils';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	export let data: PageData;
	
	$:	queryString = $page.url.searchParams.get('q') || '';
	$:	currentPerPage = $page.url.searchParams.get('perPage') || '10';

</script>

<!-- SEARCH BOX -->
<div class="py-5 pt-20">
	<form 
		action="" 
		class="flex items-center gap-2">
		<label class="label w-full">
			<input 
				class="input px-4" 
				type="search" 
				placeholder="Search here..." />
		</label>
		<input type="hidden" class="input" name="perPage">
		<button class="btn variant-filled flex-none">Search</button>
	</form>
</div>

<!-- RESULT ITEMS -->
<div class="py-10 min-h-[500px]">
	{#await data.projects}
		Loading...
	{:then query}
		{@const {page, perPage, totalItems, totalPages} = query}
		{@const itemCount = query.items.length}
		<div class="pb-5 flex gap-2 opacity-70">

			<p><b>{query.items.length} </b>item{itemCount>1?'s':''} found from page <b>{page}</b> of <b>{totalPages}</b></p>
		</div>
		{@const projects = query.items}
		<section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, index}
				<!-- TODO: export this to a card component  -->
				
				<a 
					href={`/projects/${project.name.toLowerCase().replaceAll(' ', '-')}`}
					title={project.name}
					class="w-full block card p-2 rounded-lg min-h-[400px]X aspect-[12/15] borderX"
					>
					<header class="bg-surface-50-900-token rounded-[inherit] overflow-hidden">
						<div class="flex items-center justify-center aspect-video overflow-hidden">
							{#if project.preview}
								<img
									class="h-auto max-w-full object-cover rounded-[inherit]"
									src={project.preview}
									alt={project.title}
								/>
							{:else}
								<img 
									class="h-auto max-w-full object-cover rounded-[inherit]"
									src={LOGO_URL} 
									alt={project.title} />
							{/if}
						</div>
					</header>
					<div class="p-4">
						<section class="py-1">
							{#each project.tags as tag}
								<span class="variant-filled chip mr-1 mb-2">{tag}</span>
							{/each}
						</section>
						<h3 class="text-secondary h4 line-clamp-2 uppercase font-bold">{project.name}</h3>
					</div>
					<footer 
						class="card-footer pb-8"
						>
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
<div class="text-center py-10">
	
	{#await data.projects}
		<!-- Dummy buttons -->
		<button class="btn variant-filled" disabled={true}>Prev</button>
		<button class="btn">1</button>
		<button class="btn variant-filled" disabled={true}>Next</button>
	{:then query}
		{@const {page, perPage, totalItems, totalPages} = query}

		{#if page === 1}
		<button class="btn variant-filled" disabled={true}>Prev</button>
		{:else}
		<a 
			href="/projects?q={queryString}&page={page-1}&perPage={perPage}"
			class="btn variant-filled">
			Prev
		</a>
		{/if}
		
		<button class="btn">{page}</button>
		
		{#if page === totalPages}
		<button class="btn variant-filled" disabled={true}>Next</button>
		{:else}
		<a 
			href="/projects?q={queryString}&page={page+1}&perPage={perPage}"
			class="btn variant-filled">
			Next
		</a>
		{/if}

	{/await}
</div>
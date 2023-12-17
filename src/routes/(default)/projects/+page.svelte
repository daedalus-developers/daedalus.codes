<script lang="ts">
	import { LOGO_URL } from '@utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#await data.projects}
	Loading...
{:then query}
	<p>Total: {query.totalItems}</p>
	<p>page: {query.page}</p>
	<p>PerPage: {query.perPage}</p>
	{@const projects = query.items}
	<section class="grid grid-cols-2 gap-2 md:grid-cols-3">
		{#each projects as project}
			<!-- TODO: export this to a card component  -->
			<a href={`/projects/${project.name.toLowerCase().replaceAll(' ', '-')}`}>
				<div class="card">
					<header class="card-header mx-auto w-[75%]">
						<div class="">
							{#if project.preview}
								<img src={project.preview} alt={project.title} />
							{:else}
								<img src={LOGO_URL} alt={project.title} />
							{/if}
						</div>
					</header>
					<div class="mx-auto w-[95%]">
						<section class="p-4">
							{#each project.tags as tag}
								<span class="variant-filled chip mx-1">{tag}</span>
							{/each}
						</section>
						<h3 class="text-primary h3">{project.name}</h3>
					</div>
					<footer class="card-footer">{project.description}</footer>
				</div>
			</a>
		{/each}
	</section>
{/await}

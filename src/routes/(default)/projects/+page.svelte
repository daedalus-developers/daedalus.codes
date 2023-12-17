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
			<div class="w-full">
				<a href={`/projects/${project.name.toLowerCase().replaceAll(' ', '-')}`}>
					<div class="card rounded-none">
						<header class="">
							<div class="items-center">
								{#if project.preview}
									<img
										class="h-full w-full object-cover"
										src={project.preview}
										alt={project.title}
									/>
								{:else}
									<img src={LOGO_URL} alt={project.title} />
								{/if}
							</div>
						</header>
						<div>
							<section class="space-y-4 p-4">
								{#each project.tags as tag}
									<span class="variant-filled chip mx-1">{tag}</span>
								{/each}
							</section>
							<h3 class="text-secondary h3">{project.name}</h3>
						</div>
						<footer class="card-footer">{project.description}</footer>
					</div>
				</a>
			</div>
		{/each}
	</section>
{/await}

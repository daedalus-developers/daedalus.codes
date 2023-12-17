<script lang="ts">
	import type { PageData } from './$types';
	import { CartaViewer, Carta } from 'carta-md';
	import { LOGO_URL } from '@utils';

	export let data: PageData;

	const { project } = data;

	const carta = new Carta();
</script>

<svelte:head>
	<title>{project.name}</title>
</svelte:head>

<div class="flex flex-col">
	<div class="flex items-center justify-center">
		<h2 class="h1 mr-4 py-4 text-center">
			{project.name}
		</h2>
		<div class="grid grid-cols-4 gap-2">
			{#each project.tags as tag}
				<span class="variant-filled chip">{tag}</span>
			{/each}
		</div>
	</div>
	<h3 class="h3 py-4 text-center">
		{project.description}
	</h3>
	<div class="mx-auto w-[60%]">
		{#if project.preview}
			<img src={project.preview} alt={project.title} />
		{:else}
			<img src={LOGO_URL} alt={project.title} />
		{/if}
	</div>
	<article>
		<CartaViewer {carta} value={project.details} />
	</article>
</div>

<style lang="postcss">
	article {
		@apply prose mx-auto max-w-[85%] py-4;
	}
</style>

<script lang="ts">
	import type { PageData } from './$types';
	import { CartaViewer, Carta } from 'carta-md';
	import { ASSET_URL } from '@utils';

	export let data: PageData;

	const { project } = data;

	const carta = new Carta();
</script>

<svelte:head>
	<title>{`Daedalus` + project.name}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={project.name} />
	<meta property="og:description" content={project.description} />
	<meta
		property="og:image"
		content={project.preview ? project.preview : ASSET_URL + 'daedalus.png'}
	/>
</svelte:head>

<div class="flex flex-col">
	<div class="flex items-center">
		<h2 class="h2 mr-4 py-4">
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
		<img src={project.preview ? project.preview : ASSET_URL + 'daedalus.png'} alt={project.name} />
	</div>
	<article class="prose mx-auto max-w-[85%] py-4">
		<CartaViewer {carta} value={project.details} />
	</article>
</div>

<style lang="postcss">
	:global(article) {
		@apply prose mx-auto max-w-[85%] py-4;
	}
</style>

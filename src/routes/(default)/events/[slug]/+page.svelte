<script lang="ts">
	import type { PageData } from './$types';
	import { CartaViewer, Carta } from 'carta-md';
	import { ASSET_URL } from '@utils';

	export let data: PageData;

	const { event } = data;

	const carta = new Carta();
</script>

<svelte:head>
	<title>{`Daedalus` + event.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={event.title} />
	<meta property="og:description" content={event.description} />
	<meta property="og:image" content={event.preview ? event.preview : ASSET_URL + 'daedalus.png'} />
</svelte:head>

<div class="flex flex-col gap-4">
	<div class="mx-auto w-[80%] py-4">
		<div class=" flex">
			<h2 class="h2">
				{event.title}
				<span class="text-primary-600">.</span>
			</h2>
		</div>
		<div class="mx-auto max-w-[50%] py-4">
			<img src={event.preview ? event.preview : ASSET_URL + 'daedalus.png'} alt={event.title} />
		</div>
	</div>
	<article>
		<CartaViewer {carta} value={event.details} />
	</article>
</div>

<style lang="postcss">
	:global(article) {
		@apply prose mx-auto max-w-[85%] py-4;
	}
</style>

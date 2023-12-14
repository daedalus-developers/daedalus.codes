<script lang="ts">
	import type { PageData } from './$types';
	import { CartaViewer, Carta } from 'carta-md';
	export let data: PageData;

	const carta = new Carta();
</script>

{#await data.event}
	Loading....
{:then event}
	{event.title}
	<img src={event.preview} class="w-64" alt={event.title} />
	<article>
		<div class="prose prose-invert mx-12 max-w-none">
			<CartaViewer {carta} value={event.details} />
		</div>
	</article>
{:catch}
	Something went wrong
{/await}

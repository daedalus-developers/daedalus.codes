<script lang="ts">
	import type { PageData } from './$types';
	import { CartaViewer, Carta } from 'carta-md';
	import { LOGO_URL } from '@utils';

	export let data: PageData;

	const { event } = data;

	const carta = new Carta();
</script>

<svelte:head>
	<title>{event.title}</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<div class="mx-auto w-[80%] py-4">
		<div class=" flex">
			<h2
				class="h2 w-full text-center font-black underline md:w-auto md:flex-none md:text-left md:text-6xl"
			>
				{event.title}
				<span class="text-primary-600">.</span>
			</h2>
		</div>
		<div class="mx-auto max-w-[50%] py-4">
			{#if event.preview}
				<img src={event.preview} alt={event.title} />
			{:else}
				<img src={LOGO_URL} alt={event.title} />
			{/if}
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

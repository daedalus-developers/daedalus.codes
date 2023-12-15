<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { CartaViewer, Carta } from 'carta-md';
	import { formatDistance } from 'date-fns';

	const carta = new Carta();
</script>

<section class="relative z-10 bg-transparent py-20 dark:bg-surface-100-800-token">
	<Container>
		<div class="mb-20 flex">
			<h2
				class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
			>
				Events <span class="text-primary-600">.</span>
			</h2>
			<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
		</div>

		{#await $page.data.streamed.streamedData}
			<p class="py-10 text-center">Processing</p>
		{:then result}
			<div class="md:justify-space-between flex flex-col md:flex-row">
				<!-- <p>{JSON.stringify(result.events.items)}</p> -->
				{#each result.events.items as { collectionId, collectionName, created, date, details, id, preview, status, title, type, updated }, index}
					{@const imageSource = preview ? preview : 'https://storage.daedalus.codes/logo.png'}
					<div
						class="group relative mx-auto mb-10 w-full max-w-[340px] bg-white text-surface-900 md:w-[48%] md:max-w-[400px]"
					>
						<div
							class="variant-filled-primary absolute -right-4 top-4 z-[-1] h-full w-full group-hover:variant-filled-secondary"
						/>

						<h3
							class="flex items-center justify-center gap-2 py-4 text-center uppercase opacity-80"
						>
							<Icon icon="ri:calendar-line" class="text-2xl opacity-80" />
							{title}
						</h3>

						<img
							src={imageSource}
							alt={title}
							class="aspect-video w-full bg-white object-cover p-6"
						/>

						<div class="min-h-[190px] border-y-2 border-black px-6 py-6">
							<h2 class="line-clamp-2 text-2xl font-bold">Daedalus Hackathon</h2>
							<span class="prose line-clamp-3 max-w-none">
								<CartaViewer {carta} value={details} />
							</span>
						</div>
						<div class="flex items-center">
							<div class="w-full px-6 py-4 text-center">
								{formatDistance(new Date(date), new Date(), { addSuffix: true })}
							</div>
							<div class="w-full border-l border-black px-6 py-4 text-center capitalize">
								{status}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:catch}
			<p class="py-10 text-center">No items to display</p>
		{/await}
	</Container>
</section>

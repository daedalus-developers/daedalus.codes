<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { EventCard } from '@components';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let options = {
		loop: false,
		dragFree: true
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let plugins: any[] = [];
</script>

<section class="relative z-10 bg-transparent py-20 dark:bg-surface-100-800-token">
	<Container addClass="flex flex-col gap-10">
		<div class="flex flex-col md:flex-row">
			<h2
				class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
			>
				Events <span class="text-primary-600">.</span>
			</h2>
			<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
			<div class="w-64">
				<a href="/events" class="variant-filled-primary btn mx-auto hidden gap-2 md:flex">
					View all
					<Icon icon="carbon:arrow-right" class="text-2xl" />
				</a>
			</div>
		</div>

		<a href="/events" class="variant-filled-primary btn btn-xl mx-auto flex gap-2 md:hidden">
			View All Team
			<Icon icon="carbon:arrow-right" class="text-2xl" />
		</a>

		{#await $page.data.events}
			
		<ul class="flex animate-pulse flex-wrap justify-evenly md:flex-row">
			{#each Array(3) as _}
				<p class="hidden">{_}</p>
				<li
					class="mb-5 flex w-full max-w-[80%] flex-col gap-3 px-10 sm:max-w-[50%] md:max-w-[33.33%] md:px-2 lg:px-10"
				>
					<div class="aspect-[11/16] w-full rounded-lg bg-surface-600" />
				</li>
			{/each}
		</ul>
			
		{:then query}
			{@const events = query.items}

			<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
				<div class="embla__container">
					{#each events as event}
						<div
							class="embla__slide w-full max-w-[85%] p-3 sm:max-w-[50%] md:max-w-[45%] lg:max-w-[33.33%]"
						>
							<EventCard {event} />
						</div>
					{/each}
				</div>
			</div>
		{:catch}
			<p class="py-10 text-center">No items to display</p>
		{/await}
	</Container>
</section>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
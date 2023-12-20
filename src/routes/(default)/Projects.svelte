<script lang="ts">
	import { Container, ProjectCard } from '@components';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	let options = {
		loop: false,
		dragFree: true
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let plugins: any[] = [];

	const dummyCardCount = 6;
</script>

<section class="py-32 dark:bg-surface-100-800-token">
	<Container>
		<div class="mb-20 flex">
			<h2
				class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
			>
				Projects <span class="text-primary-600">.</span>
			</h2>
			<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
			<a href="/projects" class="variant-filled-primary btn mx-auto hidden gap-2 md:flex">
				View all
				<Icon icon="carbon:arrow-right" class="text-2xl" />
			</a>
		</div>

		<!-- CAROUSEL -->
		{#await $page.data.projects}
			<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
				<div class="embla__container">
					{#each Array(dummyCardCount) as _}
						<p class="hidden">{_}</p>
						<div
							class="embla__slide w-full max-w-[80%] p-3 sm:max-w-[60%] md:max-w-[40%] lg:max-w-[33.33%]"
						>
							<div class="card bg-surface-200-700-token cursor-pointer overflow-hidden">
								<div class="bg-surface-100-800-tokenX card relative aspect-[16/11] rounded-none">
									<div class="placeholder absolute inset-0 h-full w-full rounded-none" />
								</div>
								<div class="flex h-[300px] flex-col gap-5 px-4 py-8">
									<div class="placeholder max-w-[240px]"></div>
									<div class="placeholder max-w-[180px]"></div>
									<div class="placeholder"></div>
									<div class="placeholder"></div>
									<div class="placeholder"></div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{:then query}
			{@const projects = query.items}
			<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
				<div class="embla__container">
					{#each projects as project}
						<div
							class="embla__slide w-full max-w-[85%] p-3 sm:max-w-[50%] md:max-w-[45%] lg:max-w-[33.33%]"
						>
						<div class="dark:bg-surface-800-100-token h-full">
							<ProjectCard {project} />
						</div>
							
						</div>
					{/each}
				</div>
			</div>
		{:catch}
			<p>Nothing to display</p>
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

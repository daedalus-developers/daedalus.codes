<script lang="ts">
	import { Container } from '@components';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	// import Icon from '@iconify/svelte';
	// import Autoplay from 'embla-carousel-autoplay';
	import type { PageData } from './$types';

	export let projects: PageData['projects'];

	let options = {
		loop: false,
		dragFree: true
	};

	// let plugins = [Autoplay()];
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
		</div>
		<div class="embla" use:emblaCarouselSvelte={{ options }}>
			<div class="embla__container">
				{#each projects as { category, details, link, preview, title }}
					<div class="embla__slide w-full max-w-[75%] px-3 md:max-w-[50%] lg:max-w-[33.33%]">
						<div
							class="bg-initial Xdark:text-surface-900 card card-hover min-h-[455px] overflow-hidden rounded-none bg-neutral-100 dark:bg-surface-600"
						>
							{#if preview}
								<a href={link} target="_blank">
									<img src={preview} alt={title} class="aspect-video object-cover" />
								</a>
							{:else}
								<div class="placeholder h-[212px] animate-pulse rounded-none dark:bg-slate-400" />
							{/if}
							<div class="space-y-4 px-4 pb-10 pt-4">
								<h6 class="uppercase opacity-70">Industry : {category}</h6>
								<div class="line-clamp-2">
									<h3 class="text-xl font-bold uppercase text-primary-600">{title}</h3>
								</div>
								<article class="line-clamp-4">
									{details}
								</article>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
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

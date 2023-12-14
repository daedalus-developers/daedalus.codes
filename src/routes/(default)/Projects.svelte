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
		<div class="flex mb-20">
			<h2
				class="text-5xl text-center md:text-left md:text-6xl font-black w-full md:w-auto md:flex-none"
			>
				Projects <span class="text-primary-600">.</span>
			</h2>
			<span class="w-[60%] border-b-2 border-neutral-500 ms-5 hidden md:block"></span>
		</div>
		<div class="embla" use:emblaCarouselSvelte={{ options }}>
			<div class="embla__container">
				{#each projects as { category, details, link, preview, title }}
					<div class="embla__slide w-full max-w-[75%] md:max-w-[50%] lg:max-w-[33.33%] px-3">
						<div
							class="card bg-initial card-hover overflow-hidden bg-neutral-100 dark:bg-surface-600 Xdark:text-surface-900 rounded-none min-h-[455px]"
						>
							{#if preview}
								<a href={link} target="_blank">
									<img src={preview} alt={title} class="aspect-video object-cover" />
								</a>
							{:else}
								<div class="placeholder dark:bg-slate-400 h-[212px] animate-pulse rounded-none" />
							{/if}
							<div class="px-4 pt-4 pb-10 space-y-4">
								<h6 class="uppercase opacity-70">Industry : {category}</h6>
								<div class="line-clamp-2">
									<h3 class="text-primary-600 font-bold text-xl uppercase">{title}</h3>
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

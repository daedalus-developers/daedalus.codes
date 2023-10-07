<script lang="ts">
	import { eventsData as events } from '$lib/data';
	import { onMount } from 'svelte';
	// @ts-ignore
	import Icon from '@iconify/svelte';
	import EmblaCarousel from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';

	// @ts-ignore
	let data: any[] = [];

	onMount(async () => {
		setTimeout(() => {
			data = events;
			console.log(data)
		}, 300);
	})

	let options = {
		loop: true,
		align: 0,
		dragFree: false
	};
	let plugins: any[] = [Autoplay()];
</script>

<div class="container">
	<div class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="flex flex-col sm:flex-col lg:flex-row gap-2 items-center">
				<div class="w-full max-w-[100%] sm:max-w-[100%] lg:max-w-[40%]">
					<!-- Large Screen -->
					<div class="hidden lg:flex flex-col gap-2 py-5">
						<p class="text-secondary">Events</p>
						<h2 class="flex flex-col md:text-5xl lg:text-7xl font-extrabold">
							<span>See our</span>
							<span class="text-accent">journey</span>
							<span>and <span class="text-accent">events</span></span>
							<span>within the</span>
							<div class="text-secondary">community</div>
						</h2>
						<div>
							<a
								class="relative mt-6 rounded-full bg-accent py-5 px-[64px] inline-block hover:bg-surface"
								href="#!">See more</a
							>
						</div>
					</div>
					<!-- End -->

					<!-- Smaller Screen -->
					<div class="flex flex-col  md:items-start items-center gap-1 py-5 lg:hidden">
						<p class="text-secondary text-3xl">Events</p>
						<h2 class="text-5xl md:text-6xl text-center md:text-left font-extrabold" style="text-wrap:balance;">
							See our <span class="text-accent">journey</span> and <span class="text-accent">events</span> <span>within the</span> <div class="text-secondary">community</div>
						</h2>
						<div>
							<a
								class="relative mt-3 rounded-full bg-accent py-5 px-[64px] inline-block hover:bg-surface text-center"
								href="#!">See more</a
							>
						</div>
					</div>
					<!-- end -->
				</div>

				<div class="w-full">
					<div class="embla" use:EmblaCarousel={{plugins, options}}>
						<div class="embla__container">
							{#if data.length === 0}
								{#each [1,2,3] as dt}
									<div class="embla__slide md:p-3 md:py-4">
										<div class="__item aspect-video rounded-2xl bg-neutral-800"></div>
									</div>
								{/each}
							{:else}
								{#each data as dt}
									<div class="embla__slide md:p-3 md:py-4">
										<div class="__item aspect-video rounded-2xl bg-neutral-800 relative overflow-hidden">
											<a href="https://google.com">
												<div class="__img_container absolute top-0 left-0 w-full h-full">
													<img src="{dt.backgroundImage}"
													alt="thumbnail">
												</div>
												<div class="__content text-white absolute py-3 px-5 bottom-0">
													<p class="font-bold">{dt.title}</p>
													<p class="text-sm">{dt.shortDescription}</p>
												</div>
											</a>
										</div>
									</div>
								{/each}
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@property --gradient-angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}
	@keyframes rotation {
		0% {
			--gradient-angle: 0deg;
		}
		100% {
			--gradient-angle: 360deg;
		}
	}
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 100%;
	}
	@media (min-width: 768px) {
		.embla__slide {
			flex: 0 0 90%;
			min-width: 90%;
		}
	}
  .__item {
		position: relative;
		z-index: 1;
	}

	.__item > a {
		position: absolute;
		top: 2px;
		left: 2px;
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		border-radius: inherit;
		overflow: hidden;
	}

	.__img_container {
		background: #000000;
	}
	.__img_container::before,
	.__img_container::after {
		content: '';
		position: absolute;
		z-index: 1;
	}
	.__img_container::before {
		top: 0;
		left: 0;
		background: linear-gradient( to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5) );
		filter: blur(6px);
		border-radius: 50%;
		width: 1rem;
		height: 100%;
		margin-left: 10px;
	}
	.__img_container::after {
		top: 0;
    right: 0;
    background: linear-gradient( to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5) );
    filter: blur(7px);
    border-radius: 25%;
    width: 1rem;
    height: 100%;
	}

	.__item img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.88;
	}

	.__item::before,
	.__item::after {
		content: '';
		position: absolute;
		inset: 0;
		background: conic-gradient(
			from var(--gradient-angle),
			var(--color-primary),
			var(--color-secondary),
			var(--color-accent),
			var(--color-surface),
			var(--color-accent),
			var(--color-secondary),
			var(--color-primary)
		);
		border-radius: inherit;
		animation: rotation 5s linear infinite;
		z-index: -1;
	}
</style>



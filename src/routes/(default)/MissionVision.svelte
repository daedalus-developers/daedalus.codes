<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import { Container } from '@components/utilities';
</script>

<section class="py-20 dark:bg-surface-200-700-token">
	<Container>
		<div class="embla" use:emblaCarouselSvelte>
			<div class="embla__container">
				<div class="embla__slide cursor-pointer">
					<div class="border border-transparent p-4 text-center">
						<h3 class="mb-5 text-3xl font-black md:text-5xl">Our Mission</h3>
						<hr class="mx-auto mb-10 max-w-[150px] rounded-full bg-primary-700 py-1 sm:max-w-xs" />
						<p class="md:text-xl lg:text-3xl">
							To build a abrand, <span class="text-primary-700">known to the world</span>, of all
							the things we stand for. We pledge to become a profitable consultancy firm by 2024
							which will serve as the main pillar toward our long-term goal of a
							<span class="text-primary-700">fully-independent community</span>
						</p>
					</div>
				</div>
				<div class="embla__slide cursor-pointer">
					<div class="border border-transparent p-4 text-center">
						<h3 class="mb-5 text-3xl font-black md:text-5xl">Our Vision</h3>
						<hr
							class="mx-auto mb-10 max-w-[150px] rounded-full bg-secondary-700 py-1 sm:max-w-xs"
						/>
						<p class="md:text-xl lg:text-3xl">
							To build a abrand, <span class="text-secondary-700">known to the world</span>, of all
							the things we stand for. We pledge to become a profitable consultancy firm by 2024
							which will serve as the main pillar toward our long-term goal of a
							<span class="text-secondary-700">fully-independent community</span>
						</p>
					</div>
				</div>
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

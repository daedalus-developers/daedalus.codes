<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { Container } from '@components/utilities';
</script>

<section class="py-32 bg-transparent dark:bg-surface-100-800-token">
  <Container>
    <div class="embla" use:emblaCarouselSvelte>
      <div class="embla__container">
        <div class="embla__slide cursor-pointer">
          <div class="p-4 border border-transparent hover:border-surface-700 text-center">
            <h3 class="text-3xl md:text-5xl font-black mb-5">Our Mission</h3>
            <hr class="bg-primary-600 max-w-[150px] sm:max-w-xs mx-auto py-1 mb-10 rounded-full">
            <p class="md:text-xl lg:text-3xl">
              To build a abrand, <span class="text-primary-600">known to the world</span>, of all the things we stand for. We pledge to become a profitable consultancy firm by 2024 which will serve as the main pillar toward our long-term goal of a <span class="text-primary-600">fully-independent community</span>
            </p>
          </div>
        </div>
        <div class="embla__slide cursor-pointer">
          <div class="p-4 border border-transparent hover:border-surface-700 text-center">
            <h3 class="text-3xl md:text-5xl font-black mb-5">Our Vision</h3>
            <hr class="bg-secondary-600 max-w-[150px] sm:max-w-xs mx-auto py-1 mb-10 rounded-full">
            <p class="md:text-xl lg:text-3xl">
              To build a abrand, <span class="text-secondary-600">known to the world</span>, of all the things we stand for. We pledge to become a profitable consultancy firm by 2024 which will serve as the main pillar toward our long-term goal of a <span class="text-secondary-600">fully-independent community</span>
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

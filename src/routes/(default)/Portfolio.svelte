<script lang="ts">
  import { Container } from '@components/utilities';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import Icon from '@iconify/svelte';

  let options = {
    loop: false,
    dragFree: true
  }
  let plugins: any = []

</script>

<section class="py-32 dark:bg-surface-100-800-token">
  <Container>
    <div class="flex mb-20">
      <h2 class="text-5xl text-center md:text-left md:text-6xl font-black w-full md:w-auto md:flex-none">Portfolio <span class="text-primary-600">.</span></h2>
      <span class="w-[60%] border-b-2 border-neutral-500 ms-5 hidden md:block"></span>
    </div>
    <div class="embla" use:emblaCarouselSvelte="{{ options, plugins }}">
      <div class="embla__container">
        <div class="embla__slide w-full max-w-[75%] md:max-w-[50%] lg:max-w-[33.33%] px-3">
          <div class="card bg-initial card-hover overflow-hidden bg-neutral-100 dark:bg-surface-600 Xdark:text-surface-900 rounded-none min-h-[500px]">
            <img 
              src="https://images5.alphacoders.com/132/1329226.jpeg" 
              alt="card-thumbnail"
              class="aspect-video object-cover"
              >
              <div class="px-4 pt-4 pb-10 space-y-4">
                <h6 class="uppercase opacity-70">Industry : Universal</h6>
                <div class="line-clamp-2">
                  <h3 class="text-primary-600 font-bold text-xl uppercase">Dragon Ball</h3>
                </div>
                <article class="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore provident odit optio fugit rerum maiores dolorem doloremque veniam numquam consectetur rem assumenda blanditiis vitae ducimus nostrum eius, obcaecati omnis?
                </article>
              </div>
          </div>
        </div>
        <div class="embla__slide w-full max-w-[75%] md:max-w-[50%] lg:max-w-[33.33%] px-3">
          <div class="card bg-initial card-hover overflow-hidden bg-neutral-100 dark:bg-surface-600 Xdark:text-surface-900 rounded-none min-h-[500px]">
            <img 
              src="https://moewalls.com/wp-content/uploads/2023/08/gojo-sunglasses-monochrome-jujutsu-kaisen-thumb.jpg" 
              alt="card-thumbnail"
              class="aspect-video object-cover"
              >
              <div class="px-4 pt-4 pb-10 space-y-4">
                <h6 class="uppercase opacity-70">Industry : Curse Spirit</h6>
                <div class="line-clamp-2">
                  <h3 class="text-primary-600 font-bold text-xl uppercase">Jujutsu Kaisen</h3>
                </div>
                <article class="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore provident odit optio fugit rerum maiores dolorem doloremque veniam numquam consectetur rem assumenda blanditiis vitae ducimus nostrum eius, obcaecati omnis?
                </article>
              </div>
          </div>
        </div>
        <div class="embla__slide w-full max-w-[75%] md:max-w-[50%] lg:max-w-[33.33%] px-3">
          <div class="card bg-initial card-hover overflow-hidden bg-neutral-100 dark:bg-surface-600 Xdark:text-surface-900 rounded-none min-h-[500px]">
            <img 
              src="https://w0.peakpx.com/wallpaper/734/515/HD-wallpaper-anime-the-misfit-of-demon-king-academy-anos-voldigoad-lay-glanzudlii-misha-necron-sasha-necron.jpg" 
              alt="card-thumbnail"
              class="aspect-video object-cover"
              >
              <div class="px-4 pt-4 pb-10 space-y-4">
                <h6 class="uppercase opacity-70">Industry : Demon King</h6>
                <div class="line-clamp-2">
                  <h3 class="text-primary-600 font-bold text-xl uppercase">The Misfit of Demon King Academy</h3>
                </div>
                <article class="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore provident odit optio fugit rerum maiores dolorem doloremque veniam numquam consectetur rem assumenda blanditiis vitae ducimus nostrum eius, obcaecati omnis?
                </article>
              </div>
          </div>
        </div>




        <div class="embla__slide w-full max-w-[75%] md:max-w-[50%] lg:max-w-[33.33%] px-3">
          <div class="card bg-initial card-hover overflow-hidden bg-neutral-100 dark:bg-surface-600 Xdark:text-surface-900 rounded-none min-h-[500px]">
            <img 
              src="https://images5.alphacoders.com/132/1329226.jpeg" 
              alt="card-thumbnail"
              class="aspect-video object-cover"
              >
              <div class="px-4 pt-4 pb-10 space-y-4">
                <h6 class="uppercase opacity-70">Industry : Universal</h6>
                <div class="line-clamp-2">
                  <h3 class="text-primary-600 font-bold text-xl uppercase">Dragon Ball</h3>
                </div>
                <article class="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore provident odit optio fugit rerum maiores dolorem doloremque veniam numquam consectetur rem assumenda blanditiis vitae ducimus nostrum eius, obcaecati omnis?
                </article>
              </div>
          </div>
        </div>
        <div class="embla__slide w-full max-w-[75%] md:max-w-[50%] lg:max-w-[33.33%] px-3">
          <div class="card bg-initial card-hover overflow-hidden bg-neutral-100 dark:bg-surface-600 Xdark:text-surface-900 rounded-none min-h-[500px]">
            <img 
              src="https://moewalls.com/wp-content/uploads/2023/08/gojo-sunglasses-monochrome-jujutsu-kaisen-thumb.jpg" 
              alt="card-thumbnail"
              class="aspect-video object-cover"
              >
              <div class="px-4 pt-4 pb-10 space-y-4">
                <h6 class="uppercase opacity-70">Industry : Curse Spirit</h6>
                <div class="line-clamp-2">
                  <h3 class="text-primary-600 font-bold text-xl uppercase">Jujutsu Kaisen</h3>
                </div>
                <article class="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore provident odit optio fugit rerum maiores dolorem doloremque veniam numquam consectetur rem assumenda blanditiis vitae ducimus nostrum eius, obcaecati omnis?
                </article>
              </div>
          </div>
        </div>
        <div class="embla__slide w-full max-w-[75%] md:max-w-[50%] lg:max-w-[33.33%] px-3">
          <div class="card bg-initial card-hover overflow-hidden bg-neutral-100 dark:bg-surface-600 Xdark:text-surface-900 rounded-none min-h-[500px]">
            <img 
              src="https://w0.peakpx.com/wallpaper/734/515/HD-wallpaper-anime-the-misfit-of-demon-king-academy-anos-voldigoad-lay-glanzudlii-misha-necron-sasha-necron.jpg" 
              alt="card-thumbnail"
              class="aspect-video object-cover"
              >
              <div class="px-4 pt-4 pb-10 space-y-4">
                <h6 class="uppercase opacity-70">Industry : Demon King</h6>
                <div class="line-clamp-2">
                  <h3 class="text-primary-600 font-bold text-xl uppercase">The Misfit of Demon King Academy</h3>
                </div>
                <article class="line-clamp-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore provident odit optio fugit rerum maiores dolorem doloremque veniam numquam consectetur rem assumenda blanditiis vitae ducimus nostrum eius, obcaecati omnis?
                </article>
              </div>
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

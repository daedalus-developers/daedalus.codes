<script lang="ts">
  import { Container } from '@components/utilities';
  import Icon from '@iconify/svelte';
</script>

<section class="py-32 relative">
  <div class="absolute left-0 bottom-[unset] top-0 dark:top-[unset] dark:bottom-0 w-full h-[50%] -z-10 bg-surface-100-800-token"></div>
  <Container addClass="flex flex-col gap-10">
    <div class="flex flex-col md:flex-row">
      <h2 class="text-5xl text-center md:text-left md:text-6xl font-black w-full md:w-auto md:flex-none">Meet the Team <span class="text-primary-600">.</span></h2>
      <span class="w-full border-b-2 border-neutral-500 ms-5 hidden md:block"></span>
      <div class="w-64">
        <a 
          href="/team"
          class="btn variant-filled-primary hidden md:flex gap-2 mx-auto"
          >
          View All Team
          <Icon icon="carbon:arrow-right" class="text-2xl" />
        </a>
      </div>
    </div>

    <p class="px-20X text-base text-center md:text-left md:text-2xl">We are a family of professionals, aspiring individuals building the future with the power of Java and PHP, one project a time. Learn about our amazing people, what drives us and you will be working with as a client or a colleague.</p>

    <a 
      href="/team"
      class="btn btn-xl variant-filled-primary md:hidden flex gap-2 mx-auto"
      >
      View All Team
      <Icon icon="carbon:arrow-right" class="text-2xl" />
    </a>

    <div class="flex flex-wrap mt-20">
      <div class="px-3 w-full md:max-w-[50%] lg:max-w-[33.33%] mb-20 flex flex-col gap-4 items-center">
        <img 
          src="https://images5.alphacoders.com/132/1329226.jpeg" 
          alt="team" 
          class="w-full max-w-[170px] sm:max-w-[265px] md:max-w-[70%] mx-auto aspect-[1/1.2] object-cover transition-all opacity-80 hover:opacity-100 rounded-lg shadow-xl shadow-stone-800" 
          />
          <h4 class="font-bold text-2xl">John Wick</h4>
          <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea eius laudantium similique, totam voluptates impedit.</p>
          <div class="flex gap-2">
            <a href="#!">
              <Icon icon="entypo:email" class="text-2xl" />
            </a>
            <a href="#!">
              <Icon icon="cib:linkedin" class="text-2xl" />
            </a>
            <a href="#!">
              <Icon icon="mdi:github" class="text-2xl" />
            </a>
          </div>
      </div>
      <div class="px-3 w-full md:max-w-[50%] lg:max-w-[33.33%] mb-20 flex flex-col gap-4 items-center">
        <img 
          src="https://moewalls.com/wp-content/uploads/2023/08/gojo-sunglasses-monochrome-jujutsu-kaisen-thumb.jpg" 
          alt="team" 
          class="w-full max-w-[170px] sm:max-w-[265px] md:max-w-[70%] mx-auto aspect-[1/1.2] object-cover transition-all opacity-80 hover:opacity-100 rounded-lg shadow-xl shadow-stone-800" 
          />
          <h4 class="font-bold text-2xl">John Wick</h4>
          <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea eius laudantium similique, totam voluptates impedit.</p>
          <div class="flex gap-2">
            <a href="#!">
              <Icon icon="entypo:email" class="text-2xl" />
            </a>
            <a href="#!">
              <Icon icon="cib:linkedin" class="text-2xl" />
            </a>
            <a href="#!">
              <Icon icon="mdi:github" class="text-2xl" />
            </a>
          </div>
      </div>
      <div class="px-3 w-full md:max-w-[50%] lg:max-w-[33.33%] mb-20 flex flex-col gap-4 items-center">
        <img 
          src="https://w0.peakpx.com/wallpaper/734/515/HD-wallpaper-anime-the-misfit-of-demon-king-academy-anos-voldigoad-lay-glanzudlii-misha-necron-sasha-necron.jpg" 
          alt="team" 
          class="w-full max-w-[170px] sm:max-w-[265px] md:max-w-[70%] mx-auto aspect-[1/1.2] object-cover transition-all opacity-80 hover:opacity-100 rounded-lg shadow-xl shadow-stone-800" 
          />
          <h4 class="font-bold text-2xl">John Wick</h4>
          <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea eius laudantium similique, totam voluptates impedit.</p>
          <div class="flex gap-2">
            <a href="#!">
              <Icon icon="entypo:email" class="text-2xl" />
            </a>
            <a href="#!">
              <Icon icon="cib:linkedin" class="text-2xl" />
            </a>
            <a href="#!">
              <Icon icon="mdi:github" class="text-2xl" />
            </a>
          </div>
      </div>
    </div>
  </Container>
</section>


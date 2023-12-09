<script lang="ts">
  import { Container } from '@components/utilities';
  import Icon from '@iconify/svelte';
</script>

<section class="py-32 bg-surface-100-800-token dark:bg-transparent">
  <Container>
    <div class="flex flex-wrap">

      <div class="w-full md:max-w-[50%] pb-20">
        <h2 class="text-5xl text-center md:text-left md:text-6xl font-black">Be a part of the 
          <span class="lg:block"><span class="text-primary-600">Daedalus</span> Community</span>
        </h2>
        <img 
          src="https://storage.daedalus.codes/saly.png" 
          alt="thumbnail"
          class="max-w-[500px] ms-auto hidden md:block"
          >
      </div>

      <div class="w-full md:max-w-[50%]">
        <div class="flex mb-20">
          <Icon icon="carbon:arrow-right" class="text-4xl flex-none text-primary-600" />
          <div class="ps-5">
            <h3 class="text-3xl md:text-4xl mb-5 py-">CONNECT</h3>
            <p class="md:text-xl">Network, collaborate with the community members. Lorem ipsum dolor sit amet consectetur, Vitae enim ultricies posuere sollicitudin lacus nulla nibh sollicitudin</p>
          </div>
        </div>
        <div class="flex mb-20">
          <Icon icon="carbon:arrow-right" class="text-4xl flex-none text-primary-600" />
          <div class="ps-5">
            <h3 class="text-3xl md:text-4xl mb-5">BROWSER FREE COURSES</h3>
            <p class="md:text-xl">Network, collaborate with the community members. Lorem ipsum dolor sit amet consectetur, Vitae enim ultricies posuere sollicitudin lacus nulla nibh sollicitudin</p>
          </div>
        </div>
        <div class="flex mb-20">
          <Icon icon="carbon:arrow-right" class="text-4xl flex-none text-primary-600" />
          <div class="ps-5">
            <h3 class="text-3xl md:text-4xl mb-5">MENTORSHIP</h3>
            <p class="md:text-xl">Network, collaborate with the community members. Lorem ipsum dolor sit amet consectetur, Vitae enim ultricies posuere sollicitudin lacus nulla nibh sollicitudin</p>
          </div>
        </div>
      </div>

      <div class="w-full md:max-w-[50%] mt-[-35%] relative -z-10 opacity-70">
        <img 
          src="https://storage.daedalus.codes/saly.png" 
          alt="thumbnail"
          class="max-w-[500px] ms-auto block md:hidden mx-auto"
          >
      </div>

    </div>
  </Container>
</section>
<script lang="ts">
  import { Container } from '@components/utilities';
  import { page } from '$app/stores';
  import Icon from '@iconify/svelte';

  const course = $page.data.course;
</script>

<section class="py-5">
  
  {#if course}
  <Container addClass="space-y-5 pb-20">
      {@const {id, title, description, price, cover, instructor} = course}
      {@const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: price.currency
      })}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
        <div class="space-y-5 order-2 lg:order-1">
          <p>
            <a href="/courses" class="hover:underline">Courses</a>
              <Icon icon="carbon:chevron-right" class="inline-block align-text-bottom text-primary-500" />  
            {title}
          </p>
          <img src="{cover}" class="aspect-video object-contain bg-surface-200-700-token w-full p-2 block lg:hidden mx-auto" alt="">
          <div class="space-y-2 lg:space-y-8">
            <h1 class="h1">{title}</h1>
            <div class="py-1 bg-primary-500 max-w-[70px]"></div>
            <p class="h3">{formatter.format(price.amount)}</p>
            <button class="btn bg-secondary-500 uppercase">Start Course</button>
          </div>
        </div>
        <div class="order-1 lg:order-2  mb-5">
          <img src="{cover}" class="aspect-video object-contain bg-surface-200-700-token w-full p-2 hidden lg:block mx-auto" alt="">
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-10">
          <p class="leading-relaxed">{@html description}</p>
          <!-- <button class="btn bg-secondary-500 uppercase">Start Course</button> -->
        </div>
        <div class="flex flex-col gap-y-3 items-center justify-center">
          <img src="{instructor.thumbnail}" alt="thumbnail" class="w-40" style="box-shadow: 6px 6px 0 #ffffff;">
          <p>Course Instructor: {instructor.name}</p>
        </div>
      </div>
  </Container>
  <div class="py-20 bg-surface-100-800-token space-y-20">
    <h2 class="h2 text-center">Key Takeaways</h2>
    {#if course.takeaways}
      <Container addClass="max-w-[1100px]">
        <ul class="space-y-5">
          {#each course.takeaways as takeaway}
            {@const {title, description} = takeaway}
            <li class="flex gap-2">
              <span><Icon icon="mdi:arrow-right" class="text-3xl text-primary-500" /></span>
              <div>
                <p class="text-xl lg:text-2xl">{title}</p>
                <p>{description}</p>
              </div>
            </li>
          {/each}
        </ul>
      </Container>
    {/if}
  </div>

  {:else}
    <p>No course</p>
  {/if}
  
</section>

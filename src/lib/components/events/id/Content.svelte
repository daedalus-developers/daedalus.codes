<script>
  import { getSingleData } from '$lib/events';
  import { baseImageURL, convertDateTime } from '$lib/helper';
  import '../../../../events-content.css';

  let singleDataPromise = getSingleData();
</script>

<div>
  {#await singleDataPromise}
    <p>Processing...</p>
  {:then event}
    <h1 class="text-4xl mb-3 font-bold text-primary dark:text-accent">{event.title}</h1>
    <p class="description mb-3">{event.description}</p>

    <div class="relative aspect-[16/9] mb-1 rounded-2xl">
      {#if event.images.length === 0}
      <img 
      src="/website2.png" 
      alt=""
      class="object-cover absolute top-0 left-0 w-full h-full rounded-[inherit]">
      {:else}
      <img 
        src="{baseImageURL(event.collectionId, event.id, event.images[0])}" 
        alt=""
        class="object-cover absolute top-0 left-0 w-full h-full rounded-[inherit]">
      {/if}
    </div>

    <div class="flex flex-col text-xs mb-3">
      <div class="flex flex-col gap-1 ms-auto mb-3">
        <p class="opacity-75">Date posted: {convertDateTime(event.created)}</p>
        <p>Posted by: <b class="text-primary dark:text-accent">Daedaus Dev</b></p>
      </div>
    </div>

    <div class="mb-5">
      <h3 class="mb-1 font-bold text-primary dark:text-accent">WHEN?</h3>
      <div>
        <div class="flex gap-0">
          <div class="w-full p-2 border border-neutral-500">
            Start Date
          </div>
          <div class="w-full p-2 border border-neutral-500">
            {convertDateTime(event.startDate)}
          </div>
        </div>

        <div class="flex gap-0">
          <div class="w-full p-2 border border-neutral-500">
            End Date
          </div>
          <div class="w-full p-2 border border-neutral-500">
            {convertDateTime(event.endDate)}
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <h3 class="mb-1 font-bold text-primary dark:text-accent">HOW TO JOIN</h3>
      <p>To make your registration valid, please check the date below.</p>
      <div>
        <div class="flex gap-0">
          <div class="w-full p-2 border border-neutral-500">
            Start Date
          </div>
          <div class="w-full p-2 border border-neutral-500">
            {convertDateTime(event.registrationStartDate)}
          </div>
        </div>

        <div class="flex gap-0">
          <div class="w-full p-2 border border-neutral-500">
            End Date
          </div>
          <div class="w-full p-2 border border-neutral-500">
            {convertDateTime(event.registrationEndDate)}
          </div>
        </div>
      </div>
    </div>

    <div data-content>{@html event.content}</div>
  {/await}
</div>
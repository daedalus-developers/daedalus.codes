<script>
// @ts-nocheck

  import { getData } from '$lib/events';
  import { baseImageURL, convertDateTime } from '$lib/helper';
  import Icon from '@iconify/svelte';

  let q = '';
  let promise = getData();

  const handleSubmit = () => {
    promise = getData();
  }

  const handleClearSearch = () => {
    const url = `/events`;
    history.pushState(null, '', url);
    promise = getData();
  }

  let timeoutId;
  const handleKeyupSearch = async () => {
    clearTimeout(timeoutId); // Clear any previous timeout

    timeoutId = setTimeout(() => {

      const keyword = q;
      const url = `/events?q=${keyword}`;
      history.pushState(null, '', url);
      promise = getData();
    }, 500);

  };
  let dummyCount = 9;
</script>



<div class="container mx-auto py-5 px-5 min-h-[100vh]">

  <div class="flex flex-col-reverse lg:flex-row gap-1 p-5 text-sm mb-5">
    <div class="w-full flex gap-1">
      <button class="py-2 px-3 rounded-md border
        border-neutral-800 ms-auto lg:ms-0
        flex text-sm items-center" 
        on:click={() => {handleClearSearch()}}>
        <Icon icon="carbon:reset" class="mr-1" />
        Clear
      </button>
      <button class="py-2 px-3 rounded-md border
      border-neutral-800
        flex text-sm items-center" 
        on:click={(evet) => {handleSubmit()}}>
        <Icon icon="mdi:reload" class="mr-1" />
        Refresh
      </button>
    </div>
    <div class="w-full flex">
      <div class="flex w-full">
        <input class="py-2 px-3 w-full
          dark:bg-neutral-800
          focus:outline-none" 
          placeholder="Search" 
          type="search"
          bind:value={q}
          on:keyup={() => {handleKeyupSearch()}}>
      </div>
    </div>
  </div>

  <div>
    <h1 class="mb-3 text-center text-primary font-bold">Events</h1>
  </div>

  <div class="flex flex-wrap">
    {#await promise}
      {#each Array(dummyCount) as _, i}
        <div class="w-full md:w-[50%] xl:w-[33.33%] p-2">
          <div class="__item block aspect-[16/9] 
            md:aspect-[16/11] lg:aspect-[16/9] relative
            bg-neutral-800 rounded-2xl"></div>
        </div>
      {/each}
      
    {:then responseData}
      {#each responseData.items as event}
      <div class="w-full md:w-[50%] xl:w-[33.33%] p-2">
        <a href="events/{event.id}" 
          class="__item block aspect-[16/9] md:aspect-[16/11] lg:aspect-[16/9] relative 
          bg-neutral-800X rounded-2xl border border-neutral-800 hover:border-accent"
          style="box-shadow: 6px 7px 7px 0 rgba(0,0,0,0.3);">
          {#if event.images.length === 0}
          <img src="./website2.png"
            width="200" 
            height="auto" 
            alt="previewImage"
            class="object-cover absolute top-0 left-0 w-full h-full rounded-[inherit]">
          {:else}
          <img 
            src="{baseImageURL(event.collectionId, event.id, event.images[0])}" 
            width="200" 
            height="auto" 
            alt="previewImage"
            class="object-cover absolute top-0 left-0 w-full h-full rounded-[inherit]">
          {/if}
          
          <div 
            class="__eventDetails text-sm absolute top-0 left-0 w-full h-full p-2 rounded-[inherit] 
            flex flex-col gap-1 text-white" 
            style="background:linear-gradient(15deg, rgba(0,0,0,1), rgba(0,0,0,0.0), rgba(0,0,0,1));">
            <div class="flex flex-col ms-auto">
              <p class="">{convertDateTime(event.created)}</p>
              <div class="animate-pulse flex">
                <span class="flex items-center ms-auto uppercase font-bold
                  {event.event_status === 'upcoming' ? 'text-yellow-500' 
                  : event.event_status === 'ongoing' ? 'text-green-500' 
                  : event.event_status === 'over' ? 'text-red-500' 
                  : 'text-red-500'}">
                  <Icon icon="mdi:circle" class="mr-1" />
                  <span>{event.event_status}</span>
                </span>
              </div>
            </div>
            <p class="text-xl mt-auto text-accent">{event.title}</p>
            <p>{event.subtitle}</p>
          </div>
        </a>
      </div>
      {/each}
    {/await}
  </div>


  <div class="flex items-center justify-center px-x py-5 gap-2 text-3xl">
    <!-- PAGER -->
    {#await promise}
      <Icon icon="line-md:loading-alt-loop" />
    {:then res}
      <!-- For Previous Button -->
      {#if res.page > 1}
        <a href="/events?q={q}&page={res.page - 1}" 
          on:click={() => {
            setTimeout(() => {
              handleSubmit();
            }, 100);
          }}>
          <Icon icon="mdi:arrow-left" />
        </a>
      {/if}
      <div class="p-2">{res.page}</div>
      <!-- For next button -->
      {#if res.page < res.totalPages}
        <a href="/events?q={q}&page={res.page + 1}"
          on:click={() => {
            setTimeout(() => {
              handleSubmit();
            })
          }} >
          <Icon icon="mdi:arrow-right" />
        </a>
      {/if}
    {/await}
  </div>

</div>
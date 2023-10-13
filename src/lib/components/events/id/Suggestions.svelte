<script>
  import { getData } from '$lib/events';
  import { baseImageURL, convertDateTime } from '$lib/helper';
  import Icon from '@iconify/svelte';

  let promise = getData();
  
  // function refetchContent() {
	// 	promise = getData();
	// }
  let dummyCount = 6;
</script>

{#await promise}
  {#each Array(dummyCount) as _, i}
    <div class="w-full mb-5 animate-pulse">
      <div class="block aspect-[16/4] relative
      rounded-2xl" 
      style="backgroundX:rgba(0, 0, 0, 0.05);">

      </div>
    </div>
  {/each}
{:then data}
  {#each data.items as item, i}
    {#if i < 5}
    <div class="w-full mb-5">
      <a href="!#" on:click={(event) => {
        // goto(`/events/${item.id}`)
        event.preventDefault();
        window.location.href=`/events/${item.id}`;
      }}
        class="block aspect-[16/4] rounded-lg
        bg-neutral-200 dark:bg-neutral-900" 
        style="backgroundX:rgba(0, 0, 0, 0.05);">

        <div class="flex h-full p-3 rounded-[inherit]">
          <div class="__imgFrame aspect-square rounded-[inherit] relative">
            {#if item.images.length === 0}
            <img 
              src="/website2.png" 
              alt=""
              class="object-cover absolute top-0 left-0 w-full h-full rounded-[inherit]">
            {:else}
            <img 
              src="{baseImageURL(item.collectionId, item.id, item.images[0])}" 
              alt=""
              class="object-cover absolute top-0 left-0 w-full h-full rounded-[inherit]">
            {/if}
          </div>
          <div class="w-full py-1 px-3 text-sm borderX">
            <p class="font-bold text-lg">{item.title}</p>
            <div class="flex flex-col">
              <p class="">{convertDateTime(item.created)}</p>
              <div class="animate-pulse flex">
                <span class="flex items-center uppercase font-bold
                  {item.event_status === 'upcoming' ? 'text-yellow-500' 
                  : item.event_status === 'ongoing' ? 'text-green-500' 
                  : item.event_status === 'over' ? 'text-red-500' 
                  : 'text-red-500'}">
                  <Icon icon="mdi:circle" class="mr-1" />
                  <span>{item.event_status}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>

    </div>
    {/if}
  {/each}
{/await}



  
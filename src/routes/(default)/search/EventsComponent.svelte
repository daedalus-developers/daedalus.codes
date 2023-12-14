<script lang="ts">
  import { formatDistance } from 'date-fns';
  import Icon from '@iconify/svelte';
  export let eventsData: any;
  $: data = eventsData;
  
</script>


{#if eventsData.length === 0}
  <p class="uppercase py-3">No Events Found</p>
  <div class="card p-4 block variant-ghost-surface mb-5">
    <div class="placeholder py-14 rounded-lg w-full flex items-center justify-center">
      <Icon icon="radix-icons:value-none" width="46" class="opacity-40" />
    </div>
  </div>
{:else}
  <p class="uppercase py-3">Events</p>
{/if}

<div class="mb-20">
  {#each eventsData as event}
    <div class="card md:p-4 block variant-ghost-surface mb-5 overflow-hidden">
      <div 
        class="flex gap-3 
        flex-col md:flex-row
        md:items-centerX">
        <div 
          class=" rounded-none md:rounded-lg py-20 md:py-14 px-20 lg:py-20 lg:px-32 relative overflow-hidden">
          <img 
            src="https://cdn.oneesports.gg/cdn-data/2023/07/Anime_JujutsuKaisen_Season2_GojoSatoru_GetoSuguru_ShokoIeiri.jpg" 
            alt="thumbnail"
            class="absolute inset-0 w-full h-full object-cover"
            >
        </div>
        <div 
          class="flex flex-col gap-1 w-full flex-1 text-surface-700-200-token text-xs pb-10 md:pb-0 px-4 md:px-0">
          <div class="flex gap-2 items-center justify-between">
            <span class="rounded-full text-secondary-800 dark:text-primary-500 uppercase">{event.type}</span>
            <div class="p-1">Posted: <b>{formatDistance( new Date(event.created), new Date(), { addSuffix: true })}</b></div>
          </div>
          <div 
            class="line-clamp-2 text-lg text-surface-900-50-token
            my-3 md:my-1"
            >{event.title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi minima provident dolore eius? Iusto, nihil. Praesentium nam repellendus atque amet, odit quos recusandae accusamus. Tenetur odio dolores error optio.</div>
          <div 
            class="flex gap-1 sm:gap-3
            flex-col sm:flex-row"
            >
            <div>Event Date: <b>{formatDistance( new Date(event.date), new Date(), { addSuffix: true })}</b></div>
            <div>Status: <b>{event.status}</b></div>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>

<!-- {JSON.stringify(eventsData)} -->


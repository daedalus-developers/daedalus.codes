<script lang="ts">
  import { Avatar} from '@skeletonlabs/skeleton';
  import { page } from '$app/stores';
  let dummyCount = 6;

  $: currentFilter = $page.url.searchParams.get('filter') || 'all';

  $: if (currentFilter === 'all') {
    dummyCount = 3;
  }

</script>

{#if ['all', 'users'].includes(currentFilter) }
  {#each Array(dummyCount) as _}
    <div class="card p-4 block variant-ghost-surface mb-5">
      <div class="flex flex-col gap-1">
        <div class="flex items-center gap-3">
          <div class="placeholder-circle w-16 animate-pulse" />
          <div class="placeholder p-4 w-full animate-pulse" />
        </div>
      </div>
    </div>
  {/each}
{/if}

{#if ['all', 'events'].includes(currentFilter) }
  {#each Array(dummyCount) as _}
    <div class="card p-4 block variant-ghost-surface mb-5">
      <div class="flex gap-3 items-center flex-colX md:flex-row">
        <div class="placeholder rounded-lg py-14 px-20 animate-pulse self-stretch"></div>
        <div class="flex flex-col gap-2 w-full flex-1">
          <div class="placeholder p-1 w-[100px] animate-pulse"></div>
          <div class="placeholder p-1 w-full animate-pulse"></div>
          <div class="placeholder p-1 w-full animate-pulse"></div>
          <div class="placeholder p-1 w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  {/each}
{/if}


<script lang="ts">
  import { queryParam, ssp } from 'sveltekit-search-params';
  import { page } from '$app/stores';
  const filter = queryParam('q', ssp.string(''));
  $: currentFilter = $page.url.searchParams.get('filter') || 'all';
</script>

<form 
  action="/search"
  class="flex gap-2 items-center"
  >
  <input 
    type="search" 
    name="q" 
    value={$page.url.searchParams.get('q') || ''}
    placeholder="Search here..."
    class="input 
    dark:variant-filled-surface
    bg-neutral-300
    ">
  <input 
    type="hidden" 
    name="filter" 
    bind:value={currentFilter} 
    class="input variant-filled-surface">
  <button class="btn variant-filled-primary">Search</button>
</form>
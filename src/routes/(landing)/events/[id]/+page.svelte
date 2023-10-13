<script lang="ts">
  import Icon from '@iconify/svelte';
  import { goto } from '$app/navigation';
	import Content from '$lib/components/events/id/Content.svelte';
	import Suggestions from '$lib/components/events/id/Suggestions.svelte';
</script>

<div class="container mx-auto py-5 px-3 min-h-[100vh]">

  <div class="mb-5">
    <button 
      on:click={() => {goto('/events')}}
      class="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm rounded-lg flex items-center">
      <Icon icon="mdi:arrow-left" />
      Events
    </button>
  </div>

  <div class="flex flex-col lg:flex-row">
    <div class="py-8 px-2 lg:px-8 mb-5 w-full text-sm rounded-2xl bg-neutral-200 dark:bg-neutral-900" 
      style="backgroundX:rgba(0, 0, 0, 0.05);">
      <!-- This is where we put the content component -->
      <Content />
    </div>
    <div class="p-2 pb-5 pt-0 mb-5 w-full lg:max-w-[40%]">
      <!-- This is where we put the suggestions component -->
      <Suggestions />
    </div>
  </div>
</div>




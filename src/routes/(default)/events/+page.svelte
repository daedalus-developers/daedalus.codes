<script lang="ts">
	import type { PageData } from './$types';
	import EventPaginator from './event-paginator.svelte';
	import { EventCard } from '@components';
	export let data: PageData;
</script>

<EventPaginator />

{#await data.events}
	Loading..
{:then events}
	<div class="grid grid-cols-1 gap-8 pt-4 md:grid-cols-3">
		{#each events.items as event}
			<EventCard {event} />
		{/each}
	</div>
{:catch}
	No events
{/await}

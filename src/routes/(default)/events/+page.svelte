<script lang="ts">
	import { ASSET_URL } from '@utils';
	import EventPaginator from './event-paginator.svelte';
	import { EventCard } from '@components';

	const { data } = $props();
</script>

<svelte:head>
	<title>Daedalus - Events</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Daedalus - Projects" />
	<meta
		property="og:description"
		content={`We build digital solutions that are both beautiful, functional, efficient and user-friendly.
				We aim to inspire through our work, leaving a lasting impression on your users.`}
	/>
	<meta property="og:image" content={ASSET_URL + 'daedalus.png'} />
</svelte:head>

{#await data.events}
	Loading..
{:then events}
	<EventPaginator {events} />
	<div class="grid grid-cols-1 gap-8 pt-4 md:grid-cols-3">
		{#each events.items as event}
			<EventCard {event} />
		{/each}
	</div>
{:catch}
	No events
{/await}

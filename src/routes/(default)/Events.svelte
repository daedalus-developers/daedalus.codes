<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { EventCard } from '@components';
</script>

<section class="py-20 dark:bg-surface-200-700-token relative z-10">
	<Container>
		<div class="mb-20 flex">
			<h2
				class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
			>
				Events <span class="text-primary-600">.</span>
			</h2>
			<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
			<div class="w-64">
				<a href="/events" class="variant-filled-primary btn mx-auto hidden gap-2 md:flex">
					View all
					<Icon icon="carbon:arrow-right" class="text-2xl" />
				</a>
			</div>
		</div>
		{#await $page.data.events}
			<p class="py-10 text-center">Processing</p>
		{:then query}
			{@const events = query.items}
			<div class="grid grid-cols-1 grid-rows-1 gap-8 pt-4 md:grid-cols-3">
				{#each events as event}
					<EventCard {event} />
				{/each}
			</div>
		{:catch}
			<p class="py-10 text-center">No items to display</p>
		{/await}
	</Container>
</section>

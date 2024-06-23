<script lang="ts">
	import { Container } from '@components/utilities';
	import FilterParams from './FilterParams.svelte';
	import KeywordParams from './KeywordParams.svelte';
	import LimitParams from './LimitParams.svelte';
	import SkeletonComponent from './SkeletonComponent.svelte';
	import UsersComponent from './UsersComponent.svelte';
	import EventsComponent from './EventsComponent.svelte';

	const { data } = $props();
</script>

<section class="py-10">
	<Container>
		<div class="cardX p-4">
			<div class="pb-4">
				<KeywordParams />
			</div>

			<div class="py-2">
				<FilterParams />
			</div>

			{#await data.searchData}
				<SkeletonComponent />
			{:then result}
				{#if result.users}
					<UsersComponent usersData={result.users.items} />
				{/if}

				{#if result.events}
					<EventsComponent eventsData={result.events.items} />
				{/if}
			{/await}

			<div class="text-center">
				<LimitParams />
			</div>
		</div>
	</Container>
</section>

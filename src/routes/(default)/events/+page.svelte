<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';
	import EventPaginator from './event-paginator.svelte';
	import { ASSET_URL } from '@utils';
	export let data: PageData;
</script>

<EventPaginator />

{#await data.events}
	Loading .... loading....
{:then events}
	<div class="grid grid-cols-1 gap-8 pt-4 md:grid-cols-3">
		{#each events.items as { title, type, date, description, preview, status }}
			<div
				class="relative mx-4 flex w-full border-[1px] border-neutral-500 bg-primary-600 hover:bg-purple-800"
			>
				<div
					class="relative bottom-5 right-5 flex w-full flex-col border-[1px] border-neutral-500 bg-white"
				>
					<div class="flex justify-center pt-9 dark:text-black">
						<Icon icon="ri:calendar-line" class="me-3 text-2xl" />
						<div class="text-xl">{type}</div>
					</div>
					{#if preview}
						<img src={preview} alt={title} class="my-5 px-9" />
					{:else}
						<img src={`${ASSET_URL}logo.png`} alt={title} class="my-5 px-9" />
					{/if}
					<div class="border-[1px] border-y-neutral-500 p-9 text-black">
						<a
							class="variant-filled-primary btn"
							href={`/events/${title.toLowerCase().replaceAll(' ', '-')}`}
						>
							<h1 class="text-2xl font-bold">{title}</h1>
						</a>
						<p class="my-2 line-clamp-2 text-sm">
							{description}
						</p>
					</div>
					<div class="flex justify-between dark:text-black">
						<div class="w-1/2 border-[1px] py-4 text-center">{date}</div>
						<div class="w-1/2 py-4 text-center">{status}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/await}

<script lang="ts">
	import { formatDistance } from 'date-fns';
	import Icon from '@iconify/svelte';
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let eventsData: any;
</script>

{#if eventsData.length === 0}
	<p class="py-3 uppercase">No Events Found</p>
	<div class="card variant-ghost-surface mb-5 block p-4">
		<div class="placeholder flex w-full items-center justify-center rounded-lg py-14">
			<Icon icon="radix-icons:value-none" width="46" class="opacity-40" />
		</div>
	</div>
{:else}
	<p class="py-3 uppercase">Events</p>
{/if}

<div class="mb-20">
	{#each eventsData as event}
		<div class="card variant-ghost-surface mb-5 block overflow-hidden md:p-4">
			<div
				class="md:items-centerX flex
        flex-col gap-3
        md:flex-row"
			>
				<div
					class=" relative overflow-hidden rounded-none px-20 py-20 md:rounded-lg md:py-14 lg:px-32 lg:py-20"
				>
					<img
						src="https://cdn.oneesports.gg/cdn-data/2023/07/Anime_JujutsuKaisen_Season2_GojoSatoru_GetoSuguru_ShokoIeiri.jpg"
						alt="thumbnail"
						class="absolute inset-0 h-full w-full object-cover"
					/>
				</div>
				<div
					class="text-surface-700-200-token flex w-full flex-1 flex-col gap-1 px-4 pb-10 text-xs md:px-0 md:pb-0"
				>
					<div class="flex items-center justify-between gap-2">
						<span class="rounded-full uppercase text-secondary-800 dark:text-primary-500"
							>{event.type}</span
						>
						<div class="p-1">
							Posted: <b
								>{formatDistance(new Date(event.created), new Date(), { addSuffix: true })}</b
							>
						</div>
					</div>
					<div
						class="text-surface-900-50-token my-3 line-clamp-2
            text-lg md:my-1"
					>
						{event.title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sequi minima
						provident dolore eius? Iusto, nihil. Praesentium nam repellendus atque amet, odit quos recusandae
						accusamus. Tenetur odio dolores error optio.
					</div>
					<div
						class="flex flex-col gap-1
            sm:flex-row sm:gap-3"
					>
						<div>
							Event Date: <b
								>{formatDistance(new Date(event.date), new Date(), { addSuffix: true })}</b
							>
						</div>
						<div>Status: <b>{event.status}</b></div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- {JSON.stringify(eventsData)} -->

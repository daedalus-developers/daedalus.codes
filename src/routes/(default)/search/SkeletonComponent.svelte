<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	let dummyCount = 6;

	$: currentFilter = $page.url.searchParams.get('filter') || 'all';

	$: if (currentFilter === 'all') {
		dummyCount = 3;
	}
</script>

{#if ['all', 'users'].includes(currentFilter)}
	{#each Array(dummyCount) as _}
		<div class="card variant-ghost-surface mb-5 block p-4">
			<div class="flex flex-col gap-1">
				<div class="flex items-center gap-3">
					<div class="placeholder-circle w-16 animate-pulse" />
					<div class="placeholder w-full animate-pulse p-4" />
				</div>
			</div>
		</div>
	{/each}
{/if}

{#if ['all', 'events'].includes(currentFilter)}
	{#each Array(dummyCount) as _}
		<div class="card variant-ghost-surface mb-5 block p-4">
			<div class="flex-colX flex items-center gap-3 md:flex-row">
				<div class="placeholder animate-pulse self-stretch rounded-lg px-20 py-14"></div>
				<div class="flex w-full flex-1 flex-col gap-2">
					<div class="placeholder w-[100px] animate-pulse p-1"></div>
					<div class="placeholder w-full animate-pulse p-1"></div>
					<div class="placeholder w-full animate-pulse p-1"></div>
					<div class="placeholder w-full animate-pulse p-1"></div>
				</div>
			</div>
		</div>
	{/each}
{/if}

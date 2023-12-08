<script lang="ts">
	import type { ProjectRecords } from '@types';
	import { assetLink } from '@utils';

	export let data: ProjectRecords;
</script>

<div class="grid grid-cols-12 max-w-7xl mx-auto p-4 md:p-8 lg:p-12 gap-4 md:gap-8 lg:gap-12">
	{#each data.records as { preview, link, collectionName, id, title, category, details }}
		<div class="col-span-full md:col-span-6 lg:col-span-4">
			<div class="card bg-[#F6F8FB] h-[455px] mx-auto">
				{#if preview}
					<a href={link} target="_blank">
						<img
							src={assetLink(collectionName, id, preview)}
							alt={title}
							class="h-[259px] w-full object-cover rounded-none"
						/>
					</a>
				{:else}
					<div class="placeholder h-[259px] animate-pulse rounded-none" />
				{/if}
				<div class="p-8">
					<p
						class="text-[11px] md:text-xs leading-3 md:leading-4 tracking-[10%] text-[#8C8C91] font-semibold"
					>
						<span class="uppercase">Industry:</span>
						<span class="uppercase">{category}</span>
					</p>
					<h1
						class="uppercase font-semibold text-sm md:text-xl leading-4 md:leading-6 tracking-[10%] text-[#00B7BF] my-4"
					>
						{title}
					</h1>
					<p class="font-normal text-[15px] leading-[14.06px] md:leading-[17.58px] tracking-[4%]">
						{@html details}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>

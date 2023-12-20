<script lang="ts">
	import { ASSET_URL } from '@utils';
	import type { RecordModel } from 'pocketbase';

	export let project: RecordModel;
	export let addClass: string = '';
	const { name, description, preview, tags } = project;
</script>


<!-- <div class="card rounded-none dark:bg-surface-800-100-token dark:text-surface-100-800-token"> -->
<a href={`/projects/${name.toLowerCase().replaceAll(' ', '-')}`}
	class="card block overflow-hidden {addClass} b-neutral-50">
	<img 
		src={preview ? preview : ASSET_URL + 'daedalus.png'} alt={name} 
		class="rounded-none aspect-[16/9] relative w-full h-full object-cover border-b-2 border-neutral-800"/>

	<div class="p-3">
		<div class="flex flex-row gap-2">
			{#if tags.length === 0}
				<span class="uppercase text-sm opacity-0">No tags</span>
			{:else}
				{#each tags as tag}
					<span class="uppercase text-sm opacity-70">{tag}</span>
				{/each}
			{/if}
		</div>
		<h3 class="text-xl font-bold mb-3 text-primary-600">{name}</h3>
		<div class="h-[120px]">
			<p class="line-clamp-3">{description}</p>
		</div>
	</div>

</a>


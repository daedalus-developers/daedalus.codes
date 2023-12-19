<script lang="ts">
	import { ASSET_URL } from '@utils';
	import type { RecordModel } from 'pocketbase';

	export let project: RecordModel;

	const { name, description, preview, tags } = project;
</script>

<a href={`/projects/${name.toLowerCase().replaceAll(' ', '-')}`}>
	<div class="card rounded-none dark:bg-surface-800-100-token dark:text-surface-100-800-token min-h-full">
		<img src={preview ? preview : ASSET_URL + 'daedalus.png'} alt={name} 
			class="rounded-none aspect-video relative w-full h-full object-cover border-b-2 border-neutral-800"/>
		<div class="mx-4 flex flex-col gap-1 py-3">
			<div class="flex flex-row gap-2">
				{#each tags as tag}
				<span class="uppercase text-sm opacity-70">{tag}</span>
				{/each}
			</div>
			<div class="min-h-[70px]X">
				<h3
				class="text-lg font-bold uppercase tracking-wider sm:text-xl line-clamp-2 text-primary-600"
			>
				{name}
			</h3>
			</div>
		</div>

		<div class="card-footer pb-10 min-h-[180px]X">
			<p class="text-sm sm:text-base line-clamp-3">
				{description}
			</p>
		</div>
	</div>
</a>

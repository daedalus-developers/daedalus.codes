<script lang="ts">
	import { ASSET_URL } from '@utils';
	import type { RecordModel } from 'pocketbase';

	export let project: RecordModel;

	const { name, description, preview, tags } = project;
</script>

<a
	href={`/projects/${name.toLowerCase().replaceAll(' ', '-')}`}
	class="card bg-surface-100-800-token block cursor-pointer overflow-hidden dark:bg-surface-200-700-token"
>
	<div class="card bg-surface-100-800-token relative aspect-[16/11] rounded-none">
		<img
			src={preview ? preview : ASSET_URL + 'logo.png'}
			alt={name}
			class="absolute inset-0 h-full w-full object-cover"
		/>
	</div>
	<div class="flex h-[300px] flex-col gap-5 px-4 py-8">
		<div class="flex flex-row gap-2">
			{#each tags as tag}
				<span class="variant-filled chip uppercase">{tag}</span>
			{/each}
		</div>
		<h3
			class="line-clamp-2 text-lg font-bold uppercase text-primary-700 dark:text-primary-500 sm:text-xl"
		>
			{name}
		</h3>
		<p class="line-clamp-3 text-sm sm:text-base">
			{description}
		</p>
	</div>
</a>

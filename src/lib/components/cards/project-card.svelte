<script lang="ts">
	import { ASSET_URL } from '@utils';
	import type { RecordModel } from 'pocketbase';

	export let project: RecordModel;

	const { name, description, preview, tags } = project;
</script>

<a href={`/projects/${name.toLowerCase().replaceAll(' ', '-')}`}>
	<div class="card rounded-none bg-gray-200 text-black dark:bg-gray-200 dark:text-black">
		<div class="flex rounded-none">
			<img src={preview ? preview : ASSET_URL + 'daedalus.png'} alt={name} class="w-full" />
		</div>
		<div class="mx-4 flex flex-col gap-8 py-8">
			<div class="flex flex-row gap-2">
				{#each tags as tag}
					<span class="font-medium uppercase text-gray-400">{tag}</span>
				{/each}
			</div>
			<h3
				class="text-lg font-bold uppercase tracking-wider text-primary-700 dark:text-primary-700 sm:text-xl"
			>
				{name}
			</h3>
		</div>

		<div class="card-footer mx-4">
			<p class="text-sm sm:text-base">
				{description}
			</p>
		</div>
	</div>
</a>

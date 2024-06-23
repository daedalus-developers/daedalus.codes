<script lang="ts">
	import type { Project } from '@types';
	import { ASSET_URL } from '@utils';

	type Props = {
		project: Project;
	};
	const { project }: Props = $props();

	const { name, description, preview, tags } = project;
</script>

<a href={`/projects/${name.toLowerCase().replaceAll(' ', '-')}`}>
	<div class="card rounded-none bg-surface-50 text-black dark:bg-surface-50 dark:text-black">
		<div class="flex rounded-none dark:bg-surface-50">
			<img
				src={preview ? preview : ASSET_URL + 'daedalus.png'}
				alt={name}
				class="rounded-non relative aspect-video h-full w-full object-cover"
			/>
		</div>
		<div class="flex flex-col gap-8 py-8 dark:bg-surface-50">
			<div class="mx-4 flex flex-row gap-2 dark:bg-surface-50">
				{#each tags as tag}
					<span class="font-medium uppercase text-gray-400">{tag}</span>
				{/each}
			</div>
			<h3
				class="mx-4 text-lg font-bold uppercase tracking-wider text-primary-700 dark:text-primary-500 sm:text-xl"
			>
				{name}
			</h3>
		</div>

		<div class="card-footer dark:bg-surface-50">
			<p class="mx-4 text-sm sm:text-base">
				{description}
			</p>
		</div>
	</div>
</a>

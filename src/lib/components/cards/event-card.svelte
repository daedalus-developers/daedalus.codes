<script lang="ts">
	import Icon from '@iconify/svelte';
	import { ASSET_URL, sx } from '@utils';
	import { format } from 'date-fns';
	import type { RecordModel } from 'pocketbase';

	export let event: RecordModel;

	const { title, description, type, date, preview, status } = event;
</script>

<a class="" href={`/events/${title.toLowerCase().replaceAll(' ', '-')}`}>
	<div class="border-[1.5px] border-zinc-500 bg-primary-600 hover:bg-purple-500 dark:text-black">
		<div
			class="card -translate-x-4 -translate-y-4 rounded-none border-[1.5px] border-zinc-500 bg-surface-50 dark:bg-surface-50"
		>
			<div class="flex justify-center py-4 dark:bg-surface-50">
				<Icon icon="ri:calendar-line" class="me-3 text-2xl" />
				<div class="text-xl uppercase text-gray-400">{type}</div>
			</div>
			<img
				src={preview ? preview : `${ASSET_URL}daedalus.png`}
				alt={title}
				class="rounded-non relative aspect-video h-full w-full object-cover dark:bg-surface-50"
			/>
			<div class="border-b-2 border-t-2 border-zinc-500 px-4 py-6 text-black dark:bg-surface-50">
				<h1 class="text-ellipsis text-xl font-bold">{title}</h1>
				<p class="pt-4 text-sm">
					{description}
				</p>
			</div>
			<div
				class={sx(
					'card-footer flex items-center pt-2 text-center dark:bg-surface-50',
					status === 'canceled' ? 'text-error-600' : 'text-black'
				)}
			>
				<div class="basis-1/2 border-r-2 border-zinc-500">
					{format(new Date(date), 'MMMM dd')}
				</div>
				<div class="basis-1/2">
					{format(new Date(date), 'K b OOOO')}
				</div>
			</div>
		</div>
	</div>
</a>

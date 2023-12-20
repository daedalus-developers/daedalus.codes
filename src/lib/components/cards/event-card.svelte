<script lang="ts">
	import Icon from '@iconify/svelte';
	import { ASSET_URL, sx } from '@utils';
	import { format } from 'date-fns';
	import type { RecordModel } from 'pocketbase';

	export let event: RecordModel;

	const { title, description, type, date, preview, status } = event;
</script>

<a href={`/events/${title.toLowerCase().replaceAll(' ', '-')}`}
	class="block"
	>
	<div class="bg-primary-600 hover:bg-secondary-600 rounded-none">
		<div class="-translate-x-4 -translate-y-4 rounded-[inherit] bg-neutral-50 text-neutral-900">
			<div class="flex justify-center py-4 opacity-60">
				<Icon icon="ri:calendar-line" class="me-3 text-2xl" />
				<div class="text-xl uppercase">{type}</div>
			</div>

			<img src={preview ? preview : `${ASSET_URL}daedalus.png`} alt={title} class="aspect-video object-cover" />


			<div class="border-b-2 border-t-2 border-zinc-500 px-4 py-6 text-black">
				<h1 class="text-ellipsis text-xl font-bold">{title}</h1>
				<div class="pt-4 text-sm line-clamp-5 min-h-[128px] text-justify" 
					style="white-space:pre-wrap;">
					{description}
				</div>
			</div>

			<div
				class={sx(
					'card-footer flex items-center pt-2 text-center',
					status === 'canceled' ? 'text-error-600' : 'text-black'
				)}
				>
				<div class="basis-1/2 border-r-2">
					{format(new Date(date), 'MMMM dd')}
				</div>
				<div class="basis-1/2">
					{format(new Date(date), 'K b OOOO')}
				</div>
			</div>

		</div>
	</div>
</a>

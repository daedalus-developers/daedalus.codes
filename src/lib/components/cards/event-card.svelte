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
		<div class="-translate-x-2 -translate-y-2 rounded-[inherit] 
			card dark:bg-surface-800-100-token dark:text-surface-100-800-token 
			border-2 border-zinc-500">
			<div class="flex justify-center py-4 opacity-60">
				<Icon icon="ri:calendar-line" class="me-3 text-2xl" />
				<div class="text-xl uppercase">{type}</div>
			</div>

			
			
			<div class="aspect-video relative">
				<img 
					src={preview ? preview : `${ASSET_URL}daedalus.png`} 
					alt={title} 
					class="absolute inset-0 w-full h-full object-cover"
					 />
			</div>
			

			<div class="border-b-2 border-t-2 border-zinc-500 px-4 py-6 text-black">
				<h1 class="text-ellipsis text-xl font-bold">{title}</h1>
				<div class="text-sm min-h-[120px]">
					<p class="line-clamp-4">{description}</p>
				</div>
			</div>

			<div
				class={sx(
					'card-footer flex items-center pt-2 text-center dark:bg-surface-50',
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

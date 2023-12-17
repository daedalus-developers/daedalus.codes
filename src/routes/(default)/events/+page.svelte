<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="bg-surface-100-800-token py-20">
	<Container>
		<div class="mb-20 flex" id="events">
			<h2 class="h2 w-full text-center font-black md:w-auto md:flex-none md:text-left md:text-6xl">
				Events <span class="text-primary-600">.</span>
			</h2>
			<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
		</div>
		{#await data.events}
			Loading .... loading....
		{:then events}
			<div class="py-4">
				<!-- TODO: filter and paginate goes here -->
			</div>
			<div class="flex flex-col items-center justify-evenly md:flex-row">
				{#each events.items as { title, type, date, details, preview, status }}
					<div
						class="relative mx-4 flex w-1/3 border-[1px] border-neutral-500 bg-primary-600 hover:bg-purple-800"
					>
						<div
							class="relative bottom-5 right-5 flex w-full flex-col border-[1px] border-neutral-500 bg-white"
						>
							<div class="flex justify-center pt-9 dark:text-black">
								<Icon icon="ri:calendar-line" class="me-3 text-2xl" />
								<div class="text-xl">{type}</div>
							</div>
							{#if preview}
								<img src={preview} alt={title} class="my-5 px-9" />
							{:else}
								<img src="https://storage.daedalus.codes/logo.png" alt={title} class="my-5 px-9" />
							{/if}
							<div class="border-[1px] border-y-neutral-500 p-9 text-black">
								<a
									class="variant-filled-primary btn"
									href={`/events/${title.toLowerCase().replaceAll(' ', '-')}`}
								>
									<h1 class="text-2xl font-bold">{title}</h1>
								</a>
								<p class="my-3 line-clamp-2 text-sm">
									{details}
								</p>
							</div>
							<div class="flex justify-between dark:text-black">
								<div class="w-1/2 border-[1px] py-4 text-center">{date}</div>
								<div class="w-1/2 py-4 text-center">{status}</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/await}
	</Container>
</section>

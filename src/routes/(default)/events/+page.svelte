<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="bg-surface-100-800-token py-20 text-black">
	<Container>
		<div class="mb-20 flex">
			<h2
				class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
			>
				Events <span class="text-primary-600">.</span>
			</h2>
			<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
		</div>
		<div class="flex flex-col items-center justify-evenly md:flex-row">
			{#await data.events}
				Loading .... loading....
			{:then events}
				{#each events as { title, type, date, details, preview, status }}
					<div
						class="relative flex w-1/3 border-[1px] border-neutral-500 bg-primary-600 hover:bg-purple-800"
					>
						<div
							class="relative bottom-5 right-5 flex w-full flex-col border-[1px] border-neutral-500 bg-white"
						>
							<div class="flex justify-center pt-9">
								<Icon icon="ri:calendar-line" class="me-3 text-2xl" />
								<div class="text-xl text-[#8C8C91]">{type}</div>
							</div>
							{#if preview}
								<img src={preview} alt={title} class="my-5 px-9" />
							{:else}
								<img src="https://storage.daedalus.codes/logo.png" alt={title} class="my-5 px-9" />
							{/if}
							<div class="border-[1px] border-y-neutral-500 p-9 text-black">
								<a
									class="variant-filled-primary btn"
									href={`/events/${title.replaceAll(' ', '-')}`}
								>
									<h1 class="text-2xl font-bold">{title}</h1>
								</a>
								<p class="my-3 line-clamp-2">
									{details}
								</p>
							</div>
							<div class="flex justify-between">
								<div class="w-1/2 border-[1px] py-4 text-center">{date}</div>
								<div class="w-1/2 py-4 text-center">{status}</div>
							</div>
						</div>
					</div>
				{/each}
			{/await}
		</div>
	</Container>
</section>

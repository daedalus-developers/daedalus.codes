<script lang="ts">
	/** eslint-disable @typescript-eslint/no-unused-vars */
	import Icon from '@iconify/svelte';
	import { Container, UserCard } from '@components';
	import { page } from '$app/stores';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	let options = {
		loop: false,
		dragFree: true
	};

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let plugins: any[] = [];
</script>

<section class="relative py-32">
	<div
		class="bg-surface-100-800-token absolute bottom-[unset] left-0 top-0 -z-10 h-[50%] w-full dark:bottom-0 dark:top-[unset]"
	></div>
	<Container addClass="flex flex-col gap-10">
		<div class="flex flex-col md:flex-row">
			<h2
				class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
			>
				Meet the Team <span class="text-primary-600">.</span>
			</h2>
			<span class="ms-5 hidden w-full border-b-2 border-neutral-500 md:block"></span>
			<div class="w-64">
				<a href="/team" class="variant-filled-primary btn mx-auto hidden gap-2 md:flex">
					View All Team
					<Icon icon="carbon:arrow-right" class="text-2xl" />
				</a>
			</div>
		</div>

		<p class="px-20X text-center text-base md:text-left md:text-2xl">
			We are a family of professionals, aspiring individuals building the future with the power of
			Java and PHP, one project a time. Learn about our amazing people, what drives us and you will
			be working with as a client or a colleague.
		</p>

		<a href="/team" class="variant-filled-primary btn btn-xl mx-auto flex gap-2 md:hidden">
			View All Team
			<Icon icon="carbon:arrow-right" class="text-2xl" />
		</a>

		{#await $page.data.team}
			<ul class="flex animate-pulse flex-wrap justify-evenly md:flex-row">
				{#each Array(3) as _}
					<p class="hidden">{_}</p>
					<li
						class="mb-5 flex w-full max-w-[80%] flex-col gap-3 px-10 sm:max-w-[50%] md:max-w-[33.33%] md:px-2 lg:px-10"
					>
						<div class="aspect-[1/1.15] w-full rounded-lg bg-surface-600" />
						<div class="rounded-full bg-surface-600 pb-3" />
						<div class="rounded-full bg-surface-600 pb-3" />
						<div class="flex justify-evenly gap-3">
							<div class="aspect-square rounded-full bg-surface-600 p-7 py-1" />
							<div class="aspect-square rounded-full bg-surface-600 p-7 py-1" />
							<div class="aspect-square rounded-full bg-surface-600 p-7 py-1" />
						</div>
					</li>
				{/each}
			</ul>
		{:then teamMembers}
			<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
				<div class="embla__container">
					{#each teamMembers as member}
						<div
							class="embla__slide w-full max-w-[85%] p-3 sm:max-w-[50%] md:max-w-[33.33%] lg:max-w-[25%]"
						>
							<UserCard user={member} />
						</div>
					{/each}
				</div>
			</div>
		{/await}
	</Container>
</section>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>

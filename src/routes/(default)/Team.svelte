<script lang="ts">
	import type { PageData } from './$types';
	import type { Team } from '@types';
	import Icon from '@iconify/svelte';
	import { Container, TeamCard } from '@components';
	import { page } from '$app/stores';
	// export let team: PageData['team'];

	// const teamInfo: Team[] = team.items || [];

	// export let teamData: PageData;
	// let team = $page.data.streamed.streamedData.team;
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

		{#await $page.data.streamed.streamedData}
			<TeamCard />
		{:then result}
			{@const teamInfo = result.team.items}
			<TeamCard team={teamInfo} />
		{/await}
	</Container>
</section>

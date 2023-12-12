<script lang="ts">
	import type { PageData } from './$types';
	import type { Team } from '@types';
	import Icon from '@iconify/svelte';
	import { Container, TeamCard } from '@components';

	export let team: PageData['team'];

	const teamInfo: Team[] = team.items || [];
</script>

<section class="py-32 relative">
	<div
		class="absolute left-0 bottom-[unset] top-0 dark:top-[unset] dark:bottom-0 w-full h-[50%] -z-10 bg-surface-100-800-token"
	></div>
	<Container addClass="flex flex-col gap-10">
		<div class="flex flex-col md:flex-row">
			<h2
				class="text-5xl text-center md:text-left md:text-6xl font-black w-full md:w-auto md:flex-none"
			>
				Meet the Team <span class="text-primary-600">.</span>
			</h2>
			<span class="w-full border-b-2 border-neutral-500 ms-5 hidden md:block"></span>
			<div class="w-64">
				<a href="/team" class="btn variant-filled-primary hidden md:flex gap-2 mx-auto">
					View All Team
					<Icon icon="carbon:arrow-right" class="text-2xl" />
				</a>
			</div>
		</div>

		<p class="px-20X text-base text-center md:text-left md:text-2xl">
			We are a family of professionals, aspiring individuals building the future with the power of
			Java and PHP, one project a time. Learn about our amazing people, what drives us and you will
			be working with as a client or a colleague.
		</p>

		<a href="/team" class="btn btn-xl variant-filled-primary md:hidden flex gap-2 mx-auto">
			View All Team
			<Icon icon="carbon:arrow-right" class="text-2xl" />
		</a>

		<TeamCard team={teamInfo} />
	</Container>
</section>

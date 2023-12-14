<script lang="ts">
	import type { PageData } from './$types';
	import type { PaginatedTeam } from '@types';
	import type { PaginationSettings } from '@skeletonlabs/skeleton';
	import { Container, TeamCard } from '@components';
	import { Paginator } from '@skeletonlabs/skeleton';

	export let data: PageData;

	const team: PaginatedTeam = data.team;

	let paginationSettings: PaginationSettings = {
		page: 0,
		limit: 6,
		size: team!.totalItems || 0,
		amounts: [3, 6, 9]
	};

	// Client-Side Pagination
	$: paginatedSource = team.items!.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);
</script>

<section class="bg-transparent py-20 dark:bg-surface-100-800-token">
	<Container>
		<h1 class="flex items-center gap-3">
			<span class="text-[40px] font-bold leading-8">Our Team</span>
			<svg
				width="34"
				height="33"
				viewBox="0 0 34 33"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M17.0001 8.25C18.5649 8.25 19.8334 7.01878 19.8334 5.5C19.8334 3.98122 18.5649 2.75 17.0001 2.75C15.4353 2.75 14.1667 3.98122 14.1667 5.5C14.1667 7.01878 15.4353 8.25 17.0001 8.25Z"
					fill="#00B6BF"
				/>
				<path
					d="M22.5109 11.1512C21.9584 10.615 21.0092 9.625 19.1676 9.625H15.5692C11.6734 9.61125 8.50008 6.53125 8.50008 2.75H5.66675C5.66675 7.095 8.65591 10.78 12.7501 11.9762V30.25H15.5834V22H18.4167V30.25H21.2501V13.8188L26.8459 19.25L28.8434 17.3113L22.5109 11.1512Z"
					fill="#00B6BF"
				/>
			</svg>
		</h1>

		<p class="py-10 text-base font-[500] leading-6">
			At Daedalus, we believe in collaboration and knowledge sharing. Our community dedicated
			individuals with diverse expertise and a passion for helping others succeed. Whether you have
			questions, seek mentorship, or need guidance, feel free to reach out to any of the following
			team members.
		</p>

		<TeamCard team={paginatedSource} />

		<div class="py-16">
			<Paginator
				bind:settings={paginationSettings}
				showFirstLastButtons={false}
				showPreviousNextButtons={true}
				justify="justify-center"
				active="variant-filled-primary"
				buttonClasses="px-4 py-6 fill-current"
				amountText="Members"
				showNumerals
				maxNumerals={1}
			/>
		</div>
	</Container>
</section>

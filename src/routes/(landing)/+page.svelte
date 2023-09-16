<script lang="ts">
	import HeroSimple from '$lib/components/HeroSimple.svelte';
	import HeroWithImage from '$lib/components/HeroWithImage.svelte';
	import BlogSection from '$lib/components/sections/BlogSection.svelte';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';
	import { avatarLinkBuilder } from '$lib/helper';
	import type { TeamMember } from '$lib/types';
	import { onMount } from 'svelte';
	let teamMembers: TeamMember[] = [];
	onMount(async () => {
		const request = await fetch('https://daedalus.fly.dev/api/collections/teamView/records/');
		const response = await request.json();
		const { items } = response;
		const collectionId = items[0].collectionId;
		for (const item in items) {
			const member: TeamMember = {
				id: items[item].id as string,
				firstName: items[item].firstName as string,
				lastName: items[item].lastName as string,
				title: items[item].title as string[],
				avatar: avatarLinkBuilder({
					collectionName: collectionId,
					id: items[item].id,
					fileName: items[item].avatar
				}),
				description: items[item].description as string,
				github: items[item].github as string,
				twitter: items[item].twitter ?? ''
			};
			teamMembers.push(member);
		}
	});

	$: console.log(teamMembers);
</script>

<HeroSimple />

<!-- <TeamSection {teamMembers} /> -->

{#if teamMembers.length > 0}
	<div
		class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
		role="status"
	>
		<span
			class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
			>Loading...</span
		>
	</div>
{:else}
	<TeamSection {teamMembers} />
{/if}
<HeroWithImage />
<BlogSection />

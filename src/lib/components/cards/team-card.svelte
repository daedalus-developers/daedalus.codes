<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Team } from '@types';
	import { Avatar } from '@skeletonlabs/skeleton';
	export let team: Team[] = [];

	let placeholderCount = 3;
</script>

{#if team.length === 0}
	<ul class="flex animate-pulse flex-wrap justify-evenly md:flex-row">
		{#each Array(placeholderCount) as _}
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
{:else}
	<ul class="flex flex-wrap justify-center md:flex-row">
		{#each team as { avatar, firstName, lastName, userDetails, username }}
			{@const socialMedia = [
				{ link: userDetails?.x, iconClass: 'entypo:email' },
				{ link: userDetails?.linkedin, iconClass: 'cib:linkedin' },
				{ link: userDetails?.github, iconClass: 'mdi:github' }
			]}
			<li
				class="mb-5 flex w-full max-w-[80%] flex-col gap-3 px-10 sm:max-w-[50%] md:max-w-[33.33%] md:px-2 lg:px-10"
			>
				<div
					class="relative aspect-[1/1.15] w-full overflow-hidden rounded-lg bg-surface-600
				"
				>
					<Avatar
						src={avatar}
						initials={`${firstName[0]}${lastName[0]}`}
						background="bg-surface-600"
						rounded="rounded-none"
						width="w-full"
						cursor="cursor-pointer"
						class="absolute inset-0 h-full rounded-none object-cover"
					/>
				</div>

				<div class="flex flex-col gap-1 text-center">
					<p class="text-xl">{firstName} {lastName}</p>
					{#if userDetails?.bio}
						<p>{userDetails?.bio || ''}</p>
					{:else}
						<div class="bg-surface-600X rounded-full bg-transparent py-3" />
					{/if}
				</div>
				<div class="flex justify-evenly gap-3">
					{#each socialMedia as { link, iconClass }}
						{#if link}
							<a href={link} target="_blank" rel="noreferrer">
								<Icon icon={iconClass} class="h-14 w-14" />
							</a>
							<!-- {:else} -->
							<!-- <div class="aspect-square rounded-full bg-surface-600 p-7 py-1" /> -->
						{/if}
					{/each}
					<!-- <div class="bg-surface-600 py-1 p-7 aspect-square rounded-full" />	 -->
					<!-- <div class="bg-surface-600 py-1 p-7 aspect-square rounded-full" />	 -->
					<!-- <div class="bg-surface-600 py-1 p-7 aspect-square rounded-full" /> -->
				</div>
			</li>
		{/each}
	</ul>
{/if}


<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { Team } from '@types';

	export let user: Team = [];

	console.log(user);
</script>

<ul class="flex flex-wrap justify-center md:flex-row">
	{#each members as { avatar, firstName, lastName, username, bio, linkedin, github, x }}
		{JSON.stringify(team, null, 2)}
		{@const socialMedia = [
			{ link: x, iconClass: 'entypo:email' },
			{ link: linkedin, iconClass: 'cib:linkedin' },
			{ link: github, iconClass: 'mdi:github' }
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
				{#if bio}
					<p>{bio || ''}</p>
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
<!-- {/if} -->

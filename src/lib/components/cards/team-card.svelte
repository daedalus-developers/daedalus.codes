<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Team } from '@types';

	export let team: Team[];
</script>

<ul class="mt-20 flex flex-wrap">
	{#each team as { avatar, firstName, lastName, userDetails, username }}
		{@const socialMedia = [
			{ link: userDetails?.x, iconClass: 'entypo:email' },
			{ link: userDetails?.linkedin, iconClass: 'cib:linkedin' },
			{ link: userDetails?.github, iconClass: 'mdi:github' }
		]}
		<li class="mb-20 flex w-full flex-col items-center gap-4 px-3 md:max-w-[50%] lg:max-w-[33.33%]">
			{#if avatar}
				<img
					src={avatar}
					alt="{firstName} {lastName}"
					class="mx-auto aspect-[1/1.2] w-full max-w-[170px] rounded-lg object-cover opacity-80 shadow-xl shadow-stone-800 transition-all hover:opacity-100 sm:max-w-[265px] md:max-w-[70%]"
				/>
			{:else}
				<div
					class="mx-auto flex aspect-[1/1.2] w-full max-w-[170px] animate-pulse flex-col flex-wrap items-center justify-center rounded-lg object-cover opacity-80 shadow-xl shadow-stone-800 transition-all hover:opacity-100 dark:bg-neutral-800 sm:max-w-[265px] md:max-w-[70%]"
				>
					No image available
				</div>
			{/if}
			<h4 class="text-2xl font-bold">{username}</h4>
			{#if userDetails?.bio}
				<p class="text-center">
					{userDetails?.bio}
				</p>
			{/if}
			<div class="flex gap-2">
				{#each socialMedia as { link, iconClass }}
					{#if link}
						<a href={link} target="_blank">
							<Icon icon={iconClass} class="text-2xl" />
						</a>
					{/if}
				{/each}
			</div>
		</li>
	{/each}
</ul>

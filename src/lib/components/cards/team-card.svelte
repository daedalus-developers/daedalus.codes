<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Team } from '@types';

	export let team: Team[];
</script>

<ul class="flex flex-wrap mt-20">
	{#each team as { avatar, firstName, lastName, userDetails, username }}
		{@const socialMedia = [
			{ link: userDetails?.x, iconClass: 'entypo:email' },
			{ link: userDetails?.linkedin, iconClass: 'cib:linkedin' },
			{ link: userDetails?.github, iconClass: 'mdi:github' }
		]}
		<li class="px-3 w-full md:max-w-[50%] lg:max-w-[33.33%] mb-20 flex flex-col gap-4 items-center">
			{#if avatar}
				<img
					src={avatar}
					alt="{firstName} {lastName}"
					class="w-full max-w-[170px] sm:max-w-[265px] md:max-w-[70%] mx-auto aspect-[1/1.2] object-cover transition-all opacity-80 hover:opacity-100 rounded-lg shadow-xl shadow-stone-800"
				/>
			{:else}
				<div
					class="w-full max-w-[170px] sm:max-w-[265px] md:max-w-[70%] mx-auto aspect-[1/1.2] object-cover transition-all opacity-80 hover:opacity-100 rounded-lg shadow-xl shadow-stone-800 animate-pulse dark:bg-neutral-800 flex flex-col flex-wrap justify-center items-center"
				>
					No image available
				</div>
			{/if}
			<h4 class="font-bold text-2xl">{username}</h4>
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

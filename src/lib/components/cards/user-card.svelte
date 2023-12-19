<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { RecordModel } from 'pocketbase';

	export let user: RecordModel;

	const { avatar, firstName, lastName, bio, x, linkedin, github, email } = user;

	const socialMedia = [
		{ link: x ? `https://www.twitter.com/${x}` : x, iconClass: 'mdi:twitter' },
		{
			link: linkedin ? `https://www.linkedin.com/in/${linkedin}` : linkedin,
			iconClass: 'cib:linkedin'
		},
		{
			link: github ? `https://www.github.com/${github}` : github,
			iconClass: 'mdi:github'
		}
	];
</script>

<div class="relative aspect-[1/1.15] w-full overflow-hidden rounded-lg bg-surface-600">
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
	<p class="text-xl font-bold">{firstName} {lastName}</p>
	{#if bio}
		<p class="text-sm font-light">{bio || ''}</p>
	{:else}
		<div class="bg-surface-600X rounded-full bg-transparent py-3" />
	{/if}
</div>
<div class="flex items-center justify-center gap-2">
	<a href={`mailto:${email}`}>
		<Icon icon="mdi:at" width="24" />
	</a>
	{#each socialMedia as { link, iconClass }}
		{#if link}
			<a href={link}>
				<Icon icon={iconClass} width="24" />
			</a>
		{/if}
	{/each}
</div>

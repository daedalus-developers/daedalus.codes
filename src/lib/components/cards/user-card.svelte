<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { RecordModel } from 'pocketbase';

	export let user: RecordModel;

	const { bio, x, linkedin, github, expand } = user;

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

{#if expand?.user}
	{@const { user } = expand}
	<div
		class="card rounded-lg border-transparent bg-surface-200-700-token dark:bg-surface-200-700-token p-3 shadow-none ring-transparent dark:ring-transparent min-h-full"
	>
		<a href={`/${user.username}`}>
			<div class="flex justify-center rounded-none">
				<Avatar
					src={user.avatar}
					initials={`${user.firstName[0]}${user.lastName[0]}`}
					background="bg-surface-600"
					rounded="rounded-lg"
					width="w-full"
					cursor="cursor-pointer"
				/>
			</div>
			<div class="flex flex-col gap-1 py-4 text-center">
				<p class="text-xl font-bold">{user.firstName} {user.lastName}</p>
				<p class="text-sm font-light">{bio || ''}</p>
			</div>
		</a>
		<div class="card-footer flex items-center justify-center gap-2">
			<a href={`mailto:${user.email}`}>
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
	</div>
{/if}

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
		class="card rounded-none border-transparent bg-transparent shadow-none
    ring-transparent dark:bg-transparent dark:ring-transparent"
	>
		<a href={`/${user.username}`}>
			<div class="flex justify-center rounded-none">
				<Avatar
					src={user.avatar}
					initials={`${user.firstName[0]}${user.lastName[0]}`}
					background="bg-surface-600"
					rounded="rounded-lg"
					width="w-full"
					cursor="cursor-pointer aspect-[1/1.17]"
				/>
			</div>
			<div class="flex flex-col gap-1 py-4 text-center borderX">
				<p class="text-xl font-bold mb-2">{user.firstName} {user.lastName}</p>
				<div class="min-h-[50px] flex flex-col gap-2">
					{#if bio}
						<p class="text-sm font-light line-clamp-2 px-2">{bio}</p>
					{:else}
						<div class="placeholder"></div>
						<div class="placeholder"></div>

					{/if}
				</div>
			</div>
		</a>
		<div class="flex items-center justify-center gap-2 bg-transparent ring-transparent borderX">
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

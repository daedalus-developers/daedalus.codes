<script lang="ts">
	import { avatarLinkBuilder } from '$lib/helper';
	import type { TeamMember } from '$lib/types';
	import Icon from '@iconify/svelte';
	import { browser } from '$app/environment';

	const getTeamMembers = async () => {
		const teamMembers: TeamMember[] = [];
		const request = await fetch(
			'https://daedalus.fly.dev/api/collections/teamView/records/'
		);
		const response = await request.json();
		const { items } = response;
		const collectionId = items[0].collectionId;
		for (const item in items) {
			const member: TeamMember = {
				id: items[item].id as string,
				firstName: items[item].firstName as string,
				lastName: items[item].lastName as string,
				email: items[item].email as string,
				title: items[item].title as string[],
				description: items[item].description as string,
				avatar: items[item].avatar as string,
				github: items[item].github as string,
				twitter: items[item].twitter as string,
				linkedin: items[item].twitter as string,
				facebook: items[item].facebook as string,
				tiktok: items[item].tiktok as string,
				kofi: items[item].kofi as string,
				patreon: items[item].patreon as string
			};

			member.avatar = avatarLinkBuilder({
				collectionName: collectionId,
				id: member.id,
				fileName: member.avatar
			});
			teamMembers.push(member);
		}
		return teamMembers.sort((a, b) => a.lastName.localeCompare(b.lastName));
	};

	let teamMembers = browser ? getTeamMembers() : Promise.resolve([]);
</script>

<div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<h2 class="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
			Our team
		</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			We’re a dynamic group of individuals who are passionate about what we do
			and dedicated to delivering the best results for our clients.
		</p>
	</div>

	{#await teamMembers}
		<div class="mx-auto flex justify-center">
			<div
				class="h-12 w-12 animate-spin rounded-full
                    border-8 border-solid border-accent border-t-transparent"
			/>
		</div>
	{:then teamMembers}
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
		>
			{#each teamMembers as member}
				<li>
					{#if member.avatar.match(/\.(jpg|jpeg|png)$/i)}
						<img
							class="mx-auto h-32 rounded-xl object-fill"
							src={member.avatar}
							alt=""
						/>
					{:else}
						<Icon
							class="mx-auto h-32 rounded-xl text-9xl text-gray-700 dark:text-white"
							icon="arcticons:anonymous-messenger"
						/>
					{/if}
					<h3
						class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-300"
					>
						<!-- <a href={`mailto:${member.email}`}> -->
						{member.firstName}
						{member.lastName}
						<!-- </a> -->
					</h3>
					{#each member.title as title}
						<p class="font-mono text-sm leading-6 text-gray-600">
							{title}
						</p>
					{/each}
					<p class="text-xs italic text-gray-600">
						{member.description}
					</p>
					<ul role="list" class="mt-6 flex justify-center gap-x-6">
						{#if member.github}
							<li>
								<a
									href={member.github}
									class="text-gray-400 hover:text-blue-500"
								>
									<span class="sr-only">Github</span>
									<Icon icon="akar-icons:github-fill" />
								</a>
							</li>
						{/if}
						{#if member.linkedin}
							<li>
								<a
									href={member.linkedin}
									class="text-gray-400 hover:text-blue-500"
								>
									<span class="sr-only">LinkedIn</span>
									<Icon icon="mdi:linkedin" />
								</a>
							</li>
						{/if}
						{#if member.twitter}
							<li>
								<a
									href={member.twitter}
									class="text-gray-400 hover:text-blue-500"
								>
									<span class="sr-only">Twitter</span>
									<Icon icon="simple-icons:x" />
								</a>
							</li>
						{/if}
						{#if member.facebook}
							<li>
								<a
									href={member.facebook}
									class="text-gray-400 hover:text-blue-500"
								>
									<span class="sr-only">Facebook</span>
									<Icon icon="simple-icons:facebook" />
								</a>
							</li>
						{/if}
						{#if member.tiktok}
							<li>
								<a
									href={member.tiktok}
									class="text-gray-400 hover:text-blue-500"
								>
									<span class="sr-only">Tiktok</span>
									<Icon icon="simple-icons:tiktok" />
								</a>
							</li>
						{/if}
						{#if member.patreon}
							<li>
								<a
									href={member.patreon}
									class="text-gray-400 hover:text-blue-500"
								>
									<span class="sr-only">Patreon</span>
									<Icon icon="simple-icons:patreon" />
								</a>
							</li>
						{/if}
						{#if member.kofi}
							<li>
								<a href={member.kofi} class="text-gray-400 hover:text-blue-500">
									<span class="sr-only">Kofi</span>
									<Icon icon="simple-icons:kofi" />
								</a>
							</li>
						{/if}
					</ul>
				</li>
			{/each}
		</ul>
	{/await}
</div>

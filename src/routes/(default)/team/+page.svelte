<script lang="ts">
	import type { PageData } from './$types';
	import { Container } from '@components';
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data: PageData;
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

		{#await data.team}
			<ul class="flex animate-pulse flex-wrap justify-evenly md:flex-row">
				{#each Array(3) as _}
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
		{:then team}
			<ul class="flex flex-wrap justify-evenly md:flex-row">
				{#each team as { avatar, firstName, lastName, bio, username, x, linkedin, github }}
					{@const socialMedia = [
						{ link: x, iconClass: 'mdi:twitter' },
						{ link: linkedin, iconClass: 'cib:linkedin' },
						{ link: github, iconClass: 'mdi:github' }
					]}
					<li
						class="mb-5 flex w-full max-w-[80%] flex-col gap-3 px-10 sm:max-w-[50%] md:max-w-[33.33%] md:px-2 lg:px-10"
					>
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
								{/if}
							{/each}
						</div>
					</li>
				{/each}
			</ul>
		{/await}
	</Container>
</section>

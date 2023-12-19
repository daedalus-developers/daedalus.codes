<script lang="ts">
	import { UserCard } from '@components';
	import type { PageData } from './$types';
	import { CartaViewer, Carta } from 'carta-md';
	import { formatDistance } from 'date-fns';
	import { code } from '@cartamd/plugin-code';

	export let data: PageData;

	const carta = new Carta({
		extensions: [code()]
	});
</script>

{#await data.query then user}
	{#if user}
		<div class="m-8 flex h-screen w-screen">
			<div class="basis-1/4">
				<UserCard {user} />
				<p class="py-4 text-center text-xl">
					<span class="font-bold tracking-wide text-secondary-500"> Joined </span>
					<span class="font-medium text-tertiary-900">
						{formatDistance(new Date(user.created), new Date(), {
							addSuffix: true
						})}
					</span>
				</p>
			</div>
			<div class="basis-3/4">
				<CartaViewer {carta} value={user.details} />
			</div>
		</div>
	{:else}
		<div class="flex h-screen w-screen items-center justify-center">
			<h1 class="h1 text-center">User not found</h1>
		</div>
	{/if}
{/await}

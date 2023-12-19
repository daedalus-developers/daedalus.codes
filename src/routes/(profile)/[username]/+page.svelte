<script lang="ts">
	import { UserCard } from '@components';
	import type { PageData } from './$types';
	import { CartaViewer, Carta } from 'carta-md';
	import { formatDistance } from 'date-fns';
	import { code } from '@cartamd/plugin-code';
	import { ASSET_URL } from '@utils';

	export let data: PageData;

	const { query: user } = data;

	const carta = new Carta({
		extensions: [code()]
	});
</script>

<svelte:head>
	<title>{`Daedalus - ` + user.expand?.user.username}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={user.expand?.user.username} />
	<meta property="og:description" content={user.bio} />
	<meta
		property="og:image"
		content={user.expand?.user.avatar ? user.expand.user.avatar : ASSET_URL + 'daedalus.png'}
	/>
</svelte:head>

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

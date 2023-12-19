<script lang="ts">
	import { UserCard } from '@components';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{#await data.query then user}
	{#if user}
		<div class="flex h-screen w-screen items-center justify-center">
			<UserCard {user} />
		</div>
	{:else}
		<div class="flex h-screen w-screen items-center justify-center">
			<h1 class="h1 text-center">User not found</h1>
		</div>
	{/if}
{/await}

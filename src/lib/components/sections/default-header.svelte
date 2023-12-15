<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { primaryLinks, secondaryLinks } from '@utils';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import AvatarButton from '@components/sections/avatar-button.svelte';

	const drawerStore = getDrawerStore();
	// const settings = { id: 'example-1' };
	function drawerOpenLeftNavigation(): void {
		drawerStore.open({
			id: 'drawer-side-link-list',
			width: 'w-full max-w-[240px] sm:max-w-[400px]'
		});
	}

	const user = $page.data.user;
</script>

<div class="bg-surface-100-800-token shadow-lg">
	<div class="flex">
		<a href="/#hero" class="me-10 flex items-center gap-1 py-4 lg:me-20">
			<img src="/daedalus-shadow.png" alt="logo" class="h-w-9 w-9 md:h-[50px] md:w-[50px]" />
			<span
				class="block bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-2xl font-normal
					uppercase text-transparent md:hidden md:font-bold lg:font-black">aedalus</span
			>
		</a>

		<div class="me-auto flex gap-5 lg:gap-10">
			{#each primaryLinks as link}
				{#if link.href !== '/'}
					<a
						href={link.href}
						class="hidden border-y-4
					border-transparent md:flex md:items-center
					{$page.url.pathname === link.href ? 'active' : ''}"
					>
						{link.name}
					</a>
				{/if}
			{/each}
		</div>

		<div class="flex gap-5 lg:gap-10">
			{#each secondaryLinks as link}
				<a
					href={link.href}
					class="hidden border-y-4
				border-transparent md:flex md:items-center
				{$page.url.pathname === link.href ? 'active' : ''}"
				>
					{link.name}
				</a>
			{/each}
		</div>

		<div class="ms-10 flex items-center gap-2 md:gap-3 lg:ms-20">
			<a href="/search" class="text-2xl">
				<Icon icon="iconamoon:search" />
			</a>

			{#if user?.id}
				<AvatarButton />
			{:else}
				<a href="/login" class="hidden md:variant-filled-primary md:btn md:flex">
					<Icon icon="material-symbols:login" class="text-2xl" />
					<span class="hidden md:inline-block">Login</span>
				</a>
			{/if}

			<button class="text-2xl md:hidden" on:click={drawerOpenLeftNavigation}>
				<Icon icon="mdi:menu" />
			</button>

			<LightSwitch class="hidden md:block" />
		</div>
	</div>
</div>

<style lang="postcss">
	a.active {
		@apply border-b-primary-600 font-bold text-primary-600;
	}
</style>

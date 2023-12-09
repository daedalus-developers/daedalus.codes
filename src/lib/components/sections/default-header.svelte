<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { primaryLinks, secondaryLinks } from '@utils';
	import { Container } from '@components/utilities';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { getDrawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import AvatarButton from '@components/sections/avatar-button.svelte';

	const drawerStore = getDrawerStore();
	const settings = { id: 'example-1' };
	function drawerOpenLeftNavigation(): void {
		drawerStore.open({
			id: 'drawer-side-link-list',
			width: 'w-full max-w-[240px] sm:max-w-[400px]'
		});
	}

	const user = $page.data.user;
</script>

<div class="bg-surface-100-800-token shadow-lg">
	<Container addClass="flex">
		<a href="/" class="py-4 flex items-center gap-1 me-10 lg:me-20">
			<img src="/daedalus-shadow.png" alt="logo" class="w-9 h-w-9 md:w-[50px] md:h-[50px]" />
			<span
				class="text-2xl font-normal md:font-bold lg:font-black uppercase block md:hidden
					bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-primary-600">aedalus</span
			>
		</a>

		<div class="flex gap-5 lg:gap-10 me-auto">
			{#each primaryLinks as link}
				{#if link.href !== '/'}
					<a
						href={link.href}
						class="border-y-4 border-transparent
					hidden md:flex md:items-center
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
					class="border-y-4 border-transparent
				hidden md:flex md:items-center
				{$page.url.pathname === link.href ? 'active' : ''}"
				>
					{link.name}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-2 md:gap-3 ms-10 lg:ms-20">
			<button class="text-2xl">
				<Icon icon="iconamoon:search" />
			</button>

			{#if user?.id}
				<AvatarButton />
			{:else}
				<a href="/login" class="md:btn md:variant-filled-primary hidden md:flex">
					<Icon icon="material-symbols:login" class="text-2xl" />
					<span class="hidden md:inline-block">Login</span>
				</a>
			{/if}

			<button class="text-2xl md:hidden" on:click={drawerOpenLeftNavigation}>
				<Icon icon="mdi:menu" />
			</button>

			<LightSwitch class="hidden md:block" />
		</div>
	</Container>
</div>

<style lang="postcss">
	a.active {
		@apply border-b-primary-600 font-bold text-primary-600;
	}
</style>

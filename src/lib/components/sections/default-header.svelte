<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { primaryLinks, secondaryLinks } from '@utils';
	import { Container } from '@components/utilities';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { Drawers } from '@components/modals'

	const drawerSettings = {
		id: 'drawer-side-link-list',
		width: 'w-[280px] md:w-[480px]',
	}
	const drawerStore = getDrawerStore();

	function openDrawer() {
		drawerStore.open(drawerSettings);
	}
</script>

<!-- <AppBar>
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
	<svelte:fragment slot="headline">(headline)</svelte:fragment>
</AppBar> -->

<div 
	class="bg-surface-100-800-token shadow-lg"
	>

	<Container addClass="flex">

		<a href="/" class="py-4 flex items-center gap-1 me-10 lg:me-20">
			<img 
				src="/daedalus.png" 
				alt="logo"
				class="w-9 h-w-9 md:w-[50px] md:h-[50px]"
				>
				<span 
					class="text-2xl font-normal md:font-bold lg:font-black uppercase block md:hidden 
					bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-primary-600"
				>aedalus</span>
		</a>

		<div 
			class="flex gap-5 lg:gap-10 me-auto"
			>
			{#each primaryLinks as link }
				{#if link.href !== '/'}
				<a 
					href="{link.href}" 
					class="border-y-4 border-transparent 
					hidden md:flex md:items-center
					{$page.url.pathname === link.href ? 'active' : ''}">
					{link.name}
				</a>
				{/if}
			{/each}
		</div>

		<div 
			class="flex gap-5 lg:gap-10"
			>
			{#each secondaryLinks as link }
			<a 
				href="{link.href}" 
				class="border-y-4 border-transparent 
				hidden md:flex md:items-center
				{$page.url.pathname === link.href ? 'active' : ''}">
				{link.name}
			</a>
			{/each}
		</div>
		
		<div class="flex items-center gap-2 md:gap-3 ms-10 lg:ms-20">
			<button class="text-2xl">
				<Icon icon="iconamoon:search" />
			</button>
			<a href="/login"
				class="md:btn md:variant-filled-primary hidden md:flex"
				>
				<Icon icon="material-symbols:login" class="text-2xl" />
				<span class="hidden md:inline-block">Login</span>
			</a>
			<LightSwitch class="hidden md:block" />

			<button 
				class="btn btn-ghost md:hidden text-2xl px-1"
				on:click={openDrawer}>
				<Icon icon="carbon:menu" />
			</button>
		</div>

	</Container>
	
</div>

<Drawers>
	<div>Test</div>
</Drawers>

<style>
	a.active {
		@apply text-primary-600 font-bold border-b-primary-600;
	}
</style>

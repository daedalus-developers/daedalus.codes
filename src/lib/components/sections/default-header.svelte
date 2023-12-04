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
		width: 'w-[280px] lg:w-[480px]',
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

		<a href="/" class="py-2 flex items-center gap-1 me-20">
			<img 
				src="/daedalus.png" 
				alt="logo"
				class="w-9 h-w-9 lg:w-[50px] lg:h-[50px]"
				>
				<span 
					class="text-3xl font-bold block lg:hidden 
					bg-clip-text text-transparent bg-gradient-to-r from-secondary-600 to-primary-600"
				>aedalus</span>
		</a>

		<div 
			class="flex gap-10 me-auto"
			>
			{#each primaryLinks as link }
				{#if link.href !== '/'}
				<a 
					href="{link.href}" 
					class="border-y-4 border-transparent 
					hidden lg:flex lg:items-center
					{$page.url.pathname === link.href ? 'active' : ''}">
					{link.name}
				</a>
				{/if}
			{/each}
		</div>

		<div 
			class="flex gap-10"
			>
			{#each secondaryLinks as link }
			<a 
				href="{link.href}" 
				class="border-y-4 border-transparent 
				hidden lg:flex lg:items-center
				{$page.url.pathname === link.href ? 'active' : ''}">
				{link.name}
			</a>
			{/each}
		</div>
		
		<div class="flex items-center gap-2 lg:gap-3 ms-20">
			<button class="text-2xl">
				<Icon icon="iconamoon:search" />
			</button>
			<a href="/login"
				class="lg:btn lg:variant-filled-primary hidden lg:flex"
				>
				<Icon icon="material-symbols:login" class="text-2xl" />
				<span class="hidden lg:inline-block">Login</span>
			</a>
			<LightSwitch class="hidden lg:block" />

			<button 
				class="btn btn-ghost lg:hidden text-2xl px-1"
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

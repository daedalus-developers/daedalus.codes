<script lang="ts">
	import { Footer, Navbar } from '@components';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	let currentPage = $derived($page.url.pathname);
	let { children } = $props();
	let componentExceptions = ['/login', '/register', '/forgot-password'];
</script>

<AppShell scrollbarGutter="auto">
	<svelte:fragment slot="header">
		{#if !componentExceptions.includes(currentPage)}
			<Navbar />
		{/if}
	</svelte:fragment>
	{@render children()}
	<svelte:fragment slot="pageFooter">
		{#if !componentExceptions.includes(currentPage)}
			<Footer />
		{/if}
	</svelte:fragment>
</AppShell>

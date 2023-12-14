<script lang="ts">
	import { Footer, Navbar } from '@components';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<div class="mx-auto min-h-screen w-screen">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

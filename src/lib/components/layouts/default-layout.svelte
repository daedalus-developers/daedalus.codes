<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Footer, Navbar } from '../sections/';
</script>

<AppShell scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

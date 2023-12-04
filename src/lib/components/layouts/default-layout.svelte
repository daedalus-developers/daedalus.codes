<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Footer, Header } from '../sections/';
</script>

<AppShell 
	slotHeader="sticky top-0">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>

<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Footer, Header } from '../sections/';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<Footer />
	</svelte:fragment>
</AppShell>

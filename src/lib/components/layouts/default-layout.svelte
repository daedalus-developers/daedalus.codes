<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Footer, Header } from '../sections/';
</script>

<AppShell scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

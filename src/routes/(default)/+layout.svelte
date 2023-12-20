<script lang="ts">
	import { Footer, Navbar } from '@components';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<div class="sticky top-0 z-20">
	<Navbar />
</div>
<AppShell scrollbarGutter="auto" regionPage="relative" slotPageHeader="sticky top-0 z-20">
	<!-- <svelte:fragment slot="pageHeader">
		<Navbar />
	</svelte:fragment> -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>

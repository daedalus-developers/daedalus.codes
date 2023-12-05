<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Footer, Header } from '../sections/';
</script>

<AppShell scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<div class="hidden md:block">
			<Header />
		</div>
	</svelte:fragment>
	<slot />

	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<div class="block md:hidden">
			<Header />
		</div>
	</svelte:fragment>
</AppShell>

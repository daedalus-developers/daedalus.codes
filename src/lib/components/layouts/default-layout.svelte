<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Footer, Header } from '../sections/';
	
	import type { ComponentEvents } from 'svelte';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		console.log(event.currentTarget.scrollTop);
	}

</script>

<AppShell on:scroll={scrollHandler}>
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

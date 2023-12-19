<script lang="ts">
	import { Navbar } from '@components';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell scrollbarGutter="auto">
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<slot />
</AppShell>

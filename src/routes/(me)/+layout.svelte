<script lang="ts">
	import { Navbar } from '@components';
	import { UserRail } from '@components';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<UserRail />
	</svelte:fragment>
	<div class="h-screen w-screen mx-auto">
		<slot />
	</div>
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>

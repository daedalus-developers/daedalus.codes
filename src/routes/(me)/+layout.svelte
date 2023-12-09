<script lang="ts">
	import { Navbar } from '@components';
	import { UserRail } from '@components';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<div class="h-screen w-screen">
	<AppShell>
		<svelte:fragment slot="header">
			<Navbar />
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<UserRail />
		</svelte:fragment>
		<div class="mx-auto">
			<slot />
		</div>
	</AppShell>
</div>

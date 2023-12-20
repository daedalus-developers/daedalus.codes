<script lang="ts">
	import { Navbar } from '@components';
	import { UserRail } from '@components';
	import Icon from '@iconify/svelte';
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>

<div class="h-screen w-screen">
	<AppShell>
		<svelte:fragment slot="header">
			<Navbar />
		</svelte:fragment>
		<svelte:fragment slot="pageHeader">
			<div class="md:hidden">
				<AppBar background="bg-transparent" border="border-b">
					<div class="flex items-center justify-between gap-10">
						<a href="/me" class="flex flex-col items-center text-lg">
							<Icon icon="mdi:user" width="24" height="24" />
							Me
						</a>
						<a href="/me/details" class="flex flex-col items-center text-lg">
							<Icon icon="mdi:details" width="24" height="24" />
							Details
						</a>
						<a href="/me/account" class="flex flex-col items-center text-lg">
							<Icon icon="mdi:form" width="24" height="24" />
							Account
						</a>
						<a href="/me/settings" class="flex flex-col items-center text-lg">
							<Icon icon="mdi:gear" width="24" height="24" />
							Settings
						</a>
					</div>
				</AppBar>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<div class="hidden h-full md:block">
				<UserRail />
			</div>
		</svelte:fragment>
		<div class="mx-auto">
			<slot />
		</div>
	</AppShell>
</div>

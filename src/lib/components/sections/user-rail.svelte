<script lang="ts">
	import LogoutButton from '@components/forms/logout-button.svelte';
	import Icon from '@iconify/svelte';
	import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
</script>

<AppRail>
	<svelte:fragment slot="lead">
		<AppRailAnchor href="/me">
			<div class="flex items-center justify-center">
				<Icon icon="mdi:user" width="24" height="24" />
				Me
			</div>
		</AppRailAnchor>
	</svelte:fragment>
	<AppRailAnchor href="/me/settings">
		<div class="flex items-center justify-center">
			<Icon icon="mdi:gear" width="24" height="24" />
			Settings
		</div>
	</AppRailAnchor>
	<svelte:fragment slot="trail">
		<div class="py-4">
			<LogoutButton />
		</div>
	</svelte:fragment>
</AppRail>

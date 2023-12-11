<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import FooterSubscribe from './FooterSubscribe.svelte';
	import FooterContentMain from './FooterContentMain.svelte';
	import FooterContentMobile from './FooterContentMobile.svelte';
	export let isDark = false;
</script>

<AppShell>
	<svelte:fragment slot="pageFooter">
		<FooterSubscribe {isDark} />
		<div class="hidden md:block">
			<FooterContentMain />
		</div>
		<div class="block md:hidden">
			<FooterContentMobile />
		</div>
	</svelte:fragment>
</AppShell>

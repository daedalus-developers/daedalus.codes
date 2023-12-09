<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import FooterSubscribe from './FooterSubscribe.svelte';
	import FooterSocmedHandles from './FooterSocmedHandles.svelte';
	import FooterDaedalusEmail from './FooterDaedalusEmail.svelte';
	import FooterDaedalusAddress from './FooterDaedalusAddress.svelte';
	import FooterLogo from './FooterLogo.svelte';
</script>

<AppShell>
	<svelte:fragment slot="pageFooter">
		<div class="flex flex-col">
			<FooterSubscribe />
			<div class="flex flex-row gap-64 font-sans bg-[#101010] text-[#FFFFFF] pl-[10%] pt-[5%] pb-[10%] pr-[10%]">
				<div class="flex gap-8 flex-col">
					<FooterLogo />
					<FooterDaedalusEmail />
					<FooterSocmedHandles />
				</div>
				<div class="flex flex-col">
					<FooterDaedalusAddress />
				</div>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
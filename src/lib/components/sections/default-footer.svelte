<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import FooterSubscribe from './FooterSubscribe.svelte';
	import FooterSocmedHandles from './FooterSocmedHandles.svelte';
	import FooterDaedalusEmail from './FooterDaedalusEmail.svelte';
	import FooterDaedalusAddress from './FooterDaedalusAddress.svelte';
	import FooterLogo from './FooterLogo.svelte';

	export let isMobile = false;
	export let isDark = false;
</script>

<AppShell>
	<svelte:fragment slot="pageFooter">
		<div class="flex flex-col">
			<FooterSubscribe isMobile={isMobile} isDark={isDark} />
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
	<svelte:fragment slot="footer">
		{#if isMobile}
			<div class="flex flex-row bg-[#101010] text-[#FFFFFF] pb-[5%] pr-[10%] pl-[10%]">
				<div class="flex flex-1">
					<p>&copy {new Date().getFullYear()} All Rights Reserved.</p>
				</div>
				<div class="flex flex-1">
					<a href="/privacy-policy">Privacy Policy</a>
					<a href="/terms-of-service">Terms of Service</a>
					<a href="/cookies-policy">Cookies Policy</a>
				</div>
			</div>
		{/if}
	</svelte:fragment>
</AppShell>
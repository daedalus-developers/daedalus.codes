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
			<div class="flex flex-row gap-80 font-sans bg-[#101010] text-[#FFFFFF] pl-[18%] pt-[5%] pb-[10%] pr-[10%] relative">
				<div class="flex gap-8 flex-col">
					<FooterLogo />
					<FooterDaedalusEmail />
					<FooterSocmedHandles />
				</div>
				<div class="flex flex-col">
					<FooterDaedalusAddress />
				</div>
				<div id="leftCircle" />
				<div id="rightCircle" />
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

<style>
	#leftCircle {
		position: absolute;
		left: -15%;
		bottom: 25%;
		width: 18%;
		height: 56%;
		background: #7952B3;
		border-radius: 50%;
		filter: blur(300.5px);
	}

	#rightCircle {
		position: absolute;
		right: 0px;
		width: 100px;
		height: 100px;
		background: #00B6BF;
		border-radius: 50%;
		filter: blur(300.5px);
	}
</style>
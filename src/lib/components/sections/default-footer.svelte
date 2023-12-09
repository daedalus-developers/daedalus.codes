<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import FooterSubscribe from './FooterSubscribe.svelte';
	import FooterSocmedHandles from './FooterSocmedHandles.svelte';
	import FooterDaedalusEmail from './FooterDaedalusEmail.svelte';
</script>

<AppShell>
	<svelte:fragment slot="pageFooter">
		<FooterSubscribe />
		<div class="flex flex-row gap-64 font-sans bg-[#101010] text-[#FFFFFF] pl-[10%] pt-[5%] pr-[10%]">
			<FooterSocmedHandles />
			<div class="flex">
				<div>
					<div>
						<FooterDaedalusEmail />
					</div>
					<div>
						<p class="uppercase">Our office</p>
						<p>1234 Elm Street</p>
						<p>Makati Philippines</p>
						<p>4021</p>
					</div>
				</div>
			</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="footer">
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
	</svelte:fragment>
</AppShell>
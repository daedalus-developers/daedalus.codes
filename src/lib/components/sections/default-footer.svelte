<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="pageFooter">
		<div class="flex flex-row font-sans bg-[#101010] text-[#FFFFFF]">
			<div class="flex-1 w-64 flex-col">
				<div class="h-[66px] w-[65px] bg-orange-300" />
				<div>
					<p class="uppercase">Sign up to newsletter</p>
					<form class="flex">
						<input type="email" placeholder="Type your email..." class="w-[379px] h-[37px] inline-block rounded-tl-[6px] rounded-bl-[6px] text-[#232323] border-[1.2px] border-[#00B6BF]">
						<input type="submit" value="Subscribe" class="w-[112px] h-[37px] bg-[#00b6bf] inline-block rounded-tr-[6px] rounded-br-[6px]">
					</form>
				</div>
				<div id="followUs">
					<p class="uppercase">Follow us</p>
				</div>
			</div>

			<div class="flex-1 w-32 flex-col">
				<div class="flex flex-col">
					<div>
						<p class="uppercase">Get in touch</p>
					</div>
					<div>
						<p>daedalusdev@gmail.com</p>
					</div>
				</div>
				<div>
					<p class="uppercase">Our office</p>
					<p>1234 Elm Street</p>
					<p>Makati Philippines</p>
					<p>4021</p>
				</div>
			</div>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="footer">
		<div class="bg-[#101010] text-[#FFFFFF]">
			<div>
				<p>&copy {new Date().getFullYear()} All Rights Reserved.</p>
			</div>
			<div>
				<a href="/privacy-policy">Privacy Policy</a>
				<a href="/terms-of-service">Terms of Service</a>
				<a href="/cookies-policy">Cookies Policy</a>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="col-span-1">
			<div class="h-[66px] w-[65px] bg-orange-300" />
			<div>
				<p class="uppercase">Sign up to newsletter</p>
				<form>
					<input type="email" placeholder="Email Address">
					<input type="submit" class="w-[23.1px] h-[24.42px] bg-green-600" value=">">
				</form>
			</div>
			<div id="followUs">
				<p class="uppercase">Follow us</p>
			</div>
		</div>	
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="col-span-1">
			<div>
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
	</svelte:fragment>
	<svelte:fragment slot="headline">
		<div>
			<p>&copy {new Date().getFullYear()} All Rights Reserved.</p>
		</div>
		<div>
			<a href="/privacy-policy">Privacy Policy</a>
			<a href="/terms-of-service">Terms of Service</a>
			<a href="/cookies-policy">Cookies Policy</a>
		</div>
	</svelte:fragment>
</AppBar>
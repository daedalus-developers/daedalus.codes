<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div id="logo" />
		<div id="getInTouch">
			<div id="getInTouchText">
				<p class="uppercase">Get in touch</p>
			</div>
			<div id="getInTouchEmail">
				<p>daedalusdev@gmail.com</p>
			</div>
		</div>
		<div id="followUs">
			<p class="uppercase">Follow us</p>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div>
			<p class="uppercase">Sign up to newsletter</p>
			<form>
				<input type="email" placeholder="Email Address">
				<input type="submit" id="submit" value=">">
			</form>
		</div>
		<div>
			<p class="uppercase">Our office</p>
			<p>1234 Elm Street</p><div id="background" />
			<p>Makati Philippines</p>
			<p>4021</p>
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

<style>
#logo {
	background: orange;
	width: 65px;
	height: 66px;
}

#submit {
	background: green;
	width: 23.1px;
	height: 24.42px;
}
</style>
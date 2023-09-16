<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '@fontsource/inter';
</script>

<div class="dark:bg-daedalusDark bg-daedalusLight">
	<Header />
	<slot />
	<Footer />
</div>

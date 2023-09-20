<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Megaphone from '$lib/components/Megaphone.svelte';
</script>

<Megaphone />
<Header />
<slot />
<Footer />

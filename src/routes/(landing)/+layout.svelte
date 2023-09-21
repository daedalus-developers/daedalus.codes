<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Megaphone from '$lib/components/Megaphone.svelte';
</script>

<Megaphone />
<Header />
<slot />
<Footer />

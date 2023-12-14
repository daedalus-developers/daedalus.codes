<script lang="ts">
	import FooterSubscribe from './FooterSubscribe.svelte';
	import FooterContentMain from './FooterContentMain.svelte';
	import FooterContentMobile from './FooterContentMobile.svelte';
	export let isDark = false;
</script>

<div>
	<FooterSubscribe {isDark} />
	<div class="hidden md:block">
		<FooterContentMain />
	</div>
	<div class="block md:hidden">
		<FooterContentMobile />
	</div>
</div>

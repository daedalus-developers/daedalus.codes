<script lang="ts">
	import FooterSubscribe from './FooterSubscribe.svelte';
	import FooterContentMain from './FooterContentMain.svelte';
	import FooterContentMobile from './FooterContentMobile.svelte';
</script>

<div>
	<FooterSubscribe />
	<div class="hidden md:block">
		<FooterContentMain />
	</div>
	<div class="block md:hidden">
		<FooterContentMobile />
	</div>
</div>

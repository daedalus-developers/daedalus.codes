<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { Modal, Toast, storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { ModalRegistry, Drawers } from '@components';
	import { onNavigate } from '$app/navigation';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
	setupViewTransition();

	// Use onNavigate instead of afterNavigate so it will work on url fragment identifier eg #about
	onNavigate(() => {
		let elemPage: HTMLElement | null = document.querySelector('#page');
		elemPage!.scrollTop = 0;
	});
</script>

<svelte:head>
	<title>Daedalus</title>
</svelte:head>
<Drawers />
<Modal components={ModalRegistry} />
<Toast position="br" />
<slot />

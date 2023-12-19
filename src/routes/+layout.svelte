<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { Modal, Toast, storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { ModalRegistry, Drawers } from '@components';
	import { onNavigate } from '$app/navigation';
	import { ASSET_URL } from '@utils';

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
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Daedalus" />
	<meta
		property="og:description"
		content={`We build digital solutions that are both beautiful, functional, efficient and user-friendly.
				We aim to inspire through our work, leaving a lasting impression on your users.`}
	/>
	<meta property="og:image" content={ASSET_URL + 'daedalus.png'} />
</svelte:head>
<Drawers />
<Modal components={ModalRegistry} />
<Toast position="br" />
<slot />

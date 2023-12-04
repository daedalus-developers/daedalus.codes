<script lang="ts">
	import '@fontsource-variable/inter';
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { Modal, Toast, storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { ModalRegistry, Drawers } from '@components';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
	setupViewTransition();
</script>

<Drawers />
<Modal components={ModalRegistry} />
<Toast position="tr" />
<slot />

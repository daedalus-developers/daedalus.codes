<script lang="ts">
  import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
  import { LeftNavigation } from '@components/drawerContent';
	const drawerStore = getDrawerStore();
</script>

<!-- <Drawer store={drawerStore} /> -->

<Drawer store={drawerStore}> 
  {#if $drawerStore.id === 'drawer-side-link-list'}
    <LeftNavigation />
  {/if}
</Drawer>

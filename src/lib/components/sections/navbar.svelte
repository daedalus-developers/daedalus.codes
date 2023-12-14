<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import AvatarButton from './avatar-button.svelte';
</script>

<AppBar
	background="bg-surface-400-800-token"
	padding="p-1"
	shadow="shadow-md"
	slotLead="place-start ml-8"
	slotDefault="place-center"
	slotTrail="place-end mr-8"
>
	<svelte:fragment slot="lead">
		<a href="/#hero">
			<img src="https://storage.daedalus.codes/logo.png" alt="logo" class="h-[40px]" />
		</a>
	</svelte:fragment>
	<div class="flex justify-center">
		<span
			class="text-2xl font-black uppercase block
      bg-clip-text text-transparent bg-gradient-to-r
      from-secondary-600 to-primary-600"
			>Daedalus
		</span>
	</div>
	<svelte:fragment slot="trail">
		<AvatarButton />
		<LightSwitch />
	</svelte:fragment>
</AppBar>

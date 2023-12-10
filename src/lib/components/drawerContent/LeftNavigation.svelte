<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { primaryLinks, secondaryLinks } from '@utils';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	const user = $page.data.user;
</script>

<nav class="min-h-screenX group list-nav flex flex-col h-full">
	<ul class="pb-20 pt-5 h-full overflow-auto">
		{#each primaryLinks as { name, href, iconifyCode }}
			<li
				class={$page.url.pathname === href ? 'variant-ghost-primaryX variant-filled-primary' : ''}
			>
				<a {href} on:click={drawerClose}>
					<Icon icon={iconifyCode} class="md:text-3xl" />
					<span class="flex-auto">{name}</span>
				</a>
			</li>
		{/each}
		{#each secondaryLinks as { name, href, iconifyCode }}
			<li
				class={$page.url.pathname === href ? 'variant-ghost-primaryX variant-filled-primary' : ''}
			>
				<a {href} on:click={drawerClose}>
					<Icon icon={iconifyCode} class="md:text-3xl" />
					<span class="flex-auto">{name}</span>
				</a>
			</li>
		{/each}
	</ul>
	<hr class="mt-auto" />
	<nav class="py-5 px-3">
		<ul>
			<li class="flex justify-center">
				<a href="/" on:click|preventDefault>
					<LightSwitch class="rotate-90X" />
					<!-- <span class="ms-2">Theme</span> -->
				</a>
			</li>
			{#if !user}
				<li>
					<a href="/login" on:click={drawerClose}>
						<Icon icon="material-symbols:login" class="text-2xl" />
						<span class="ms-2">Login</span>
					</a>
				</li>
			{/if}
		</ul>
	</nav>
</nav>

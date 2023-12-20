<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { primaryLinks, secondaryLinks } from '@utils';

	const drawerStore = getDrawerStore();

	function drawerClose(): void {
		drawerStore.close();
	}

	const user = $page.data.user;
</script>

<nav class="min-h-screenX group list-nav flex h-full flex-col">
	<ul class="h-full overflow-auto pb-20 pt-5">
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
	<nav class="px-3 py-5">
		<ul>
			{#if user}
				<li>
					<a href="/me/details" on:click={drawerClose}>
						<Icon icon="mdi:details" class="text-2xl" />
						<span class="ms-2">Details</span>
					</a>
				</li>
				<li>
					<a href="/me/account" on:click={drawerClose}>
						<Icon icon="mdi:user" class="text-2xl" />
						<span class="ms-2">Account</span>
					</a>
				</li>
				<li>
					<a href="/me/settings" on:click={drawerClose}>
						<Icon icon="mdi:gear" class="text-2xl" />
						<span class="ms-2">Settings</span>
					</a>
				</li>
				<li>
					<a href="/me" on:click={drawerClose}>
						<Icon icon="mdi:user" class="text-2xl" />
						<span class="ms-2">Me</span>
					</a>
				</li>
			{:else}
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

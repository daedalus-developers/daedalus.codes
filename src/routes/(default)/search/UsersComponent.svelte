<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import type { User } from '@types';
	type Props = { usersData: User[] };
	let { usersData }: Props = $props();
</script>

{#if usersData.length === 0}
	<p class="py-3 uppercase">No users found</p>
	<div class="card variant-ghost-surface mb-5 block p-4">
		<div class="flex flex-col gap-1">
			<div class="flex items-center gap-3">
				<div class="placeholder-circle flex w-16 items-center justify-center">
					<Icon icon="mdi:user" width="32" class="opacity-40" />
				</div>
				<div class="placeholder flex w-full items-center justify-center p-4">
					<span class="opacity-40">? ? ?</span>
				</div>
			</div>
		</div>
	</div>
{:else}
	<p class="py-3 uppercase">Users</p>
{/if}

{#each usersData as user}
	<a href="/{user.username}" class="card variant-ghost-surface mb-5 block p-4">
		<div class="flex flex-col gap-1">
			<div class="flex items-center gap-3">
				<Avatar
					initials="{user.firstName[0]}{user.lastName[0]}"
					background="variant-filled-surface"
					class="flex-none"
					width="w-12"
				/>
				<span>{user.firstName} {user.lastName}</span>
			</div>
		</div>
	</a>
{/each}

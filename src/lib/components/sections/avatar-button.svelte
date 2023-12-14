<script lang="ts">
	import { page } from '$app/stores';
	import LogoutButton from '@components/forms/logout-button.svelte';
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { Collections, type User } from '@types';
	import { assetLink } from '@utils/assets.utils';
	import Icon from '@iconify/svelte';

	const user = $page.data.user as User;

	const userActions: PopupSettings = {
		event: 'click',
		target: 'userActions',
		placement: 'bottom'
	};

	// $: avatar = $page.data.avatar;
	$: $page.data.avatar;
</script>

<div>
	<button class="btn px-0 [&>*]:pointer-events-none" use:popup={userActions}>
		<Avatar
			background="variant-filled-secondary"
			initials="{user.firstName[0]}{user.lastName[0]}"
			src={assetLink(Collections.Users, user.id, user.avatar)}
			rounded="rounded-full"
			width="w-9"
			fallback={`${user.firstName[0]}${user.lastName[0]}`}
		/>
	</button>
	<div data-popup="userActions">
		<div class="card">
			<div class="flex w-[200px] flex-col">
				<a
					href={`/${user.username}`}
					class="flex items-center gap-1 rounded-none p-3 hover:variant-filled"
				>
					<Icon icon="mdi:account" />
					Profile
				</a>
				<a href={`/me`} class="flex items-center gap-1 rounded-none p-3 hover:variant-filled">
					<Icon icon="mdi:settings" />
					Setings
				</a>
				<LogoutButton />
			</div>
		</div>
	</div>
</div>

<style>
	[data-popup] {
		/* Display */
		display: none;
		/* Position */
		position: absolute;
		top: 0;
		left: 0;
		/* Transitions */
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.15s;
	}
</style>

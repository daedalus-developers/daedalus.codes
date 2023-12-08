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
</script>

<div>
	<button class="btn [&>*]:pointer-events-none px-0" use:popup={userActions}>
		<Avatar
			background="bg-transparent variant-filled-secondary"
			initials={`${user.firstName[0]}${user.lastName[0]}`}
			src={assetLink(Collections.Users, user.id, user.avatar)}
			rounded="rounded-full"
			width="w-8"
			fallback={`${user.firstName[0]}${user.lastName[0]}`}
		/>
	</button>
	<div data-popup="userActions">
		<div class="card flex flex-col min-w-[250px]">
			<header class="card flex flex-col bg-transparent">
				<a 
					href={`/${user.username}`}
					class="flex items-center gap-1 p-2 hover:variant-ghost"
					>
					<Icon icon="mdi:user" width="18" height="18" />
					Profile
				</a>
				<a 
					href={`/me/settings`}
					class="flex items-center gap-1 p-2 hover:variant-ghost"
					>
					<Icon icon="mdi:settings" width="18" height="18" />
					Settings
				</a>
			</header>
			<!-- <section class="p-4">
				<p>{user.email}</p>
			</section> -->
			<hr>
			<footer class="card-footer px-0 py-1">
				<LogoutButton />
			</footer>
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

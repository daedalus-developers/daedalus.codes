<script lang="ts">
	import { page } from '$app/stores';
	import LogoutButton from '@components/forms/logout-button.svelte';
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import type { User } from '@types';

	const user = $page.data.user as User;

	const userActions: PopupSettings = {
		event: 'click',
		target: 'userActions',
		placement: 'bottom'
	};

	$: avatar = $page.data.avatar;
</script>

<div>
	<button class="btn [&>*]:pointer-events-none" use:popup={userActions}>
		<Avatar
			background="bg-transparent"
			src={avatar}
			rounded="rounded-full"
			width="w-10"
			fallback={`${user.firstName[0]}${user.lastName[0]}`}
		/>
	</button>
	<div data-popup="userActions">
		<div class="card flex flex-col items-center justify-center">
			<header class="card-header flex flex-col gap-4 justify-center items-center">
				<a href={`/${user.username}`}>Profile</a>
				<a href={`/me/settings`}>Settings</a>
			</header>
			<hr />
			<section class="p-4">
				<p>{user.email}</p>
			</section>
			<footer class="card-footer">
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

<script lang="ts">
	import LogoutButton from '@components/forms/logout-button.svelte';
	import { Avatar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { type User } from '@types';
	import Icon from '@iconify/svelte';

	export let user: User;

	const userActions: PopupSettings = {
		event: 'click',
		target: 'userActions',
		placement: 'bottom'
	};
</script>

<div>
	<button class="btn px-0 [&>*]:pointer-events-none" use:popup={userActions}>
		<Avatar
			background="bg-transparent"
			initials="{user.firstName[0]}{user.lastName[0]}"
			src={user.avatar}
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

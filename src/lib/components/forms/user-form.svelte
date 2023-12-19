<script lang="ts">
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import EmailInput from './email-input.svelte';
	import { Avatar, FileButton, getToastStore } from '@skeletonlabs/skeleton';
	import { userFormSchema } from '@types';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Icon from '@iconify/svelte';

	const toast = getToastStore();
	const {
		form,
		errors,
		constraints,
		enhance: accountEnhance,
		message,
		delayed,
		tainted
	} = superForm($page.data.form, {
		validators: userFormSchema,
		onResult: async ({ result }) => {
			if (result.type === 'success')
				toast.trigger({
					message: 'Profile updated.'
				});
		}
	});

	let avatarInput: HTMLInputElement;

	let avatarFile: File | undefined = undefined;

	const onAvatarChange = (): void => {
		avatarFile = avatarInput.files?.[0];
	};

	$: avatar = $page.data.user.avatar;

	$: {
		if (avatarFile) {
			avatar = URL.createObjectURL(avatarFile);
		} else {
			avatar = $page.data.user.avatar;
		}
	}
</script>

<div class="mx-4">
	<div class="mx-auto flex justify-center py-4">
		<h1 class="h3">Account</h1>
	</div>
	<div class="form-control mx-auto min-w-[50%] text-center">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<div class="flex basis-1/2 flex-col items-center justify-center">
		<Avatar
			src={avatar}
			initials={`${$form.firstName[0]}${$form.lastName[0]}`}
			background="bg-surface-600"
			rounded="rounded-none"
			width="w-1/4"
			cursor="cursor-pointer"
		/>
		<form
			method="POST"
			action="/api/actions/users?/avatar"
			enctype="multipart/form-data"
			class="form"
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'success') {
						invalidateAll();
						toast.trigger({
							message: 'Avatar updated.'
						});
					} else if (result.type === 'failure') {
						toast.trigger({
							message: result.data + ''
						});
					}
				};
			}}
		>
			<div class="grid w-full max-w-sm items-center gap-1.5 text-center">
				<FileButton
					name="avatar"
					bind:fileInput={avatarInput}
					type="file"
					on:change={onAvatarChange}
					accept="image/*">Select Avatar</FileButton
				>
				<div class="flex gap-2">
					<input
						disabled={!avatarFile}
						type="submit"
						class="variant-glass-primary btn my-4 w-full"
						value={avatar ? 'Update' : 'Upload'}
					/>
					<button
						type="submit"
						formaction="/api/actions/users?/removeAvatar"
						class="variant-glass-error btn my-4"
						><Icon icon="ph:x" class="mr-1" /> Remove
					</button>
				</div>
			</div>
		</form>
	</div>

	<form
		method="POST"
		action="/api/actions/users?/account"
		class="form mx-auto min-w-[50%]"
		use:accountEnhance
	>
		<EmailInput
			name="email"
			label="Email"
			placeholder="johnwick@thehightable.org"
			bind:value={$form.email}
			errors={$errors.email}
			constraints={$constraints.email}
		/>
		<TextInput
			name="username"
			label="Username"
			placeholder="johnwick"
			bind:value={$form.username}
			errors={$errors.username}
			constraints={$constraints.username}
		/>
		<TextInput
			name="firstName"
			label="First name"
			placeholder="John"
			bind:value={$form.firstName}
			errors={$errors.firstName}
			constraints={$constraints.firstName}
		/>
		<TextInput
			name="lastName"
			label="Last name"
			placeholder="Wick"
			bind:value={$form.lastName}
			errors={$errors.lastName}
			constraints={$constraints.lastName}
		/>
		<button
			class="variant-filled-primary btn my-4 w-full"
			type="submit"
			disabled={$delayed || !$tainted}>Update</button
		>
	</form>
</div>

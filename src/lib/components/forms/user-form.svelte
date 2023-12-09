<script lang="ts">
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import EmailInput from './email-input.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { userFormSchema } from '@types';
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	const toast = getToastStore();
	const {
		form,
		errors,
		constraints,
		enhance: accountEnhance,
		message,
		delayed
	} = superForm($page.data.form, {
		validators: userFormSchema,
		onResult: async ({ result }) => {
			if (result.type === 'success')
				toast.trigger({
					message: 'Profile updated.'
				});
		}
	});

	$: avatar = $page.data.avatar;
</script>

<div class="mx-8">
	<div class="flex justify-center mx-auto py-4">
		<h1 class="h3">Account</h1>
	</div>
	<div class="form-control text-center min-w-[50%] mx-auto">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<div class="flex basis-1/2 flex-col items-center justify-center">
		<img src={avatar} class="" width="200" height="200" alt="avatar" />
		<form
			method="POST"
			action="/api/actions/users?/updateAvatar"
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'success') {
						invalidateAll();
					}
				};
			}}
		>
			<div class="grid w-full max-w-sm items-center gap-1.5 text-center">
				<input name="id" value={$form.id} class="hidden" />
				<input type="file" name="avatar" accept="image/*" />
				<button class="btn variant-filled-primary my-4 w-full" disabled={$delayed}>Update</button>
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
		<button class="btn variant-filled-primary my-4 w-full" disabled={$delayed}>Update</button>
	</form>
</div>

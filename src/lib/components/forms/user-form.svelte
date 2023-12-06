<script lang="ts">
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import EmailInput from './email-input.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { userSchema } from '@types';

	const toast = getToastStore();
	const { form, errors, constraints, enhance, message } = superForm($page.data.form, {
		validators: userSchema,
		onResult: async ({ result }) => {
			if (result.type === 'redirect')
				toast.trigger({
					message: 'Profile updated.'
				});
		}
	});
</script>

<div class="flex flex-col gap-4">
	<div class="mx-auto py-4">
		<h1 class="h2">Update</h1>
	</div>
	<div class="form-control text-center min-w-[50%] mx-auto">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<form method="POST" class="form mx-auto min-w-[50%]" use:enhance>
		<TextInput
			name="username"
			label="Username"
			description="we will @ you with this"
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
		<EmailInput
			name="email"
			label="Email"
			placeholder="johnwick@thehightable.org"
			bind:value={$form.email}
			errors={$errors.email}
			constraints={$constraints.email}
		/>
		<button class="btn variant-filled-success my-4 w-full">Update</button>
	</form>
</div>

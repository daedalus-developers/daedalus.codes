<script lang="ts">
	import { page } from '$app/stores';
	import { registerSchema } from '@types';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import PasswordInput from './password-input.svelte';
	import EmailInput from './email-input.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const toast = getToastStore();
	const { form, errors, constraints, enhance, message } = superForm($page.data.form, {
		validators: registerSchema,
		onResult: async ({ result }) => {
			if (result.type === 'redirect')
				toast.trigger({
					message: 'Registered successfully, please login'
				});
		}
	});
</script>

<div class="flex flex-col gap-4">
	<div class="mx-auto py-4">
		<h1 class="h2">Register</h1>
	</div>
	<div class="form-control mx-auto min-w-[50%] text-center">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<form
		method="POST"
		action="/api/actions/auth?/register"
		class="form mx-auto min-w-[50%]"
		use:enhance
	>
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
		<PasswordInput
			name="password"
			label="Password"
			placeholder="Password"
			bind:value={$form.password}
			errors={$errors.password}
			constraints={$constraints.password}
		/>
		<PasswordInput
			name="passwordConfirm"
			label="Password Confirm"
			placeholder="Password"
			bind:value={$form.passwordConfirm}
			errors={$errors.passwordConfirm}
			constraints={$constraints.passwordConfirm}
		/>
		<button class="variant-filled-primary btn my-4 w-full">Register</button>
	</form>
	<p class="text-center">
		Already have an account? Login <a class="underline" href="/login">here</a>.
	</p>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import { registerSchema } from '@types';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import PasswordInput from './password-input.svelte';
	import EmailInput from './email-input.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { zod } from 'sveltekit-superforms/adapters';

	const toast = getToastStore();
	const { form, errors, constraints, enhance, message } = superForm($page.data.form, {
		validators: zod(registerSchema),
		onResult: async ({ result }) => {
			if (result.type === 'redirect')
				toast.trigger({
					message: 'Registered successfully, please login'
				});
		}
	});
</script>

<div class="flex w-full flex-col gap-8">
	<div class="form-control mx-auto text-center">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<form
		method="POST"
		action="/api/actions/auth?/register"
		class="form mx-auto w-full space-y-8"
		use:enhance
	>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
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
		</div>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<TextInput
				name="username"
				label="Username"
				description="we will @ you with this"
				placeholder="johnwick"
				bind:value={$form.username}
				errors={$errors.username}
				constraints={$constraints.username}
			/>

			<EmailInput
				name="email"
				label="Email"
				placeholder="johnwick@thehightable.org"
				bind:value={$form.email}
				errors={$errors.email}
				constraints={$constraints.email}
			/>
		</div>

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
		<div class="mt-5 text-end">
			<button class="variant-filled-primary btn my-4">Register</button>
		</div>
	</form>
	<p class="text-center">
		Already have an account? <a class="font-bold hover:underline" href="/login">Login now</a>.
	</p>
</div>

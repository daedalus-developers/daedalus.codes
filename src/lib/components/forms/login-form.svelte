<script lang="ts">
	import { page } from '$app/stores';
	import { loginSchema } from '@types';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import PasswordInput from './password-input.svelte';

	const { form, errors, constraints, enhance, message } = superForm($page.data.form, {
		validators: loginSchema,
		applyAction: true,
		invalidateAll: true
	});
</script>

<div class="flex flex-col gap-4">
	<div class="mx-auto py-4">
		<img src="https://storage.daedalus.codes/logo.png" alt="Daedalus Logo" />
		<h1 class="h2">Login</h1>
	</div>
	<div class="form-control text-center min-w-[50%] mx-auto">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<form method="POST" class="form mx-auto min-w-[50%]" use:enhance>
		<TextInput
			name="key"
			label="Username or Email"
			placeholder="e.g johnwick"
			bind:value={$form.key}
			errors={$errors.key}
			constraints={$constraints.key}
		/>
		<PasswordInput
			name="password"
			label="Password"
			placeholder="Password"
			bind:value={$form.password}
			errors={$errors.password}
			constraints={$constraints.password}
		/>
		<button class="btn variant-filled-success my-4 w-full">Login</button>
	</form>
	<p class="text-center">
		No account yet? Register <a class="underline" href="/register">here</a>.
	</p>
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import { loginSchema } from '@types';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import PasswordInput from './password-input.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { zod } from 'sveltekit-superforms/adapters';
	import type { PageServerData } from '../../../routes/(default)/login/$types';
	import { ASSET_URL } from '@utils';

	const toast = getToastStore();
	const data = $page.data as PageServerData;
	const { form, errors, constraints, enhance, message } = superForm(data.form, {
		dataType: 'json',
		validators: zod(loginSchema),
		onResult: async ({ result }) => {
			if (result.type === 'redirect')
				toast.trigger({
					message: 'Login successful'
				});
		},
		applyAction: true,
		invalidateAll: true
	});
</script>

<div class="flex flex-col">
	<div class="mx-auto flex flex-row items-center gap-2 py-4">
		<img src={`${ASSET_URL}logo.png`} alt="Daedalus Logo" class="w-24" />
		<span class="h2">Login</span>
	</div>
	<div class="form-control mx-auto min-w-[50%] text-center">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<form method="POST" action="/api/actions/auth?/legacy" class="form borderX space-y-5" use:enhance>
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
		<div class="mt-5">
			<button class="variant-filled btn my-4 w-full">Login</button>
		</div>
	</form>
	<p class="text-center">
		No account yet? <a class="font-bold hover:underline" href="/register">Register here</a>.
	</p>
</div>

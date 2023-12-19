<script lang="ts">
	import { page } from '$app/stores';
	import { loginSchema } from '@types';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import PasswordInput from './password-input.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { ASSET_URL } from '@utils';
	// import Icon from '@iconify/svelte';
	const toast = getToastStore();
	const { form, errors, constraints, enhance, message } = superForm($page.data.form, {
		validators: loginSchema,
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

<div class="flex flex-col gap-4">
	<div class="mx-auto py-4">
		<img src={`${ASSET_URL}logo.png`} alt="Daedalus Logo" />
		<h1 class="h2">Login</h1>
	</div>
	<div class="form-control mx-auto min-w-[50%] text-center">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<form
		method="POST"
		action="/api/actions/auth?/legacy"
		class="form mx-auto min-w-[50%]"
		use:enhance
	>
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
		<button class="variant-filled-primary btn my-4 w-full">Login</button>
	</form>
	<!-- <div class=""> -->
	<!-- 	<div class="logo-cloud [&>.logo-item]:variant-ghost-secondary justify-center"> -->
	<!-- 		<a class="logo-item" href="/login/github"> -->
	<!-- 			<span> -->
	<!-- 				<Icon icon="mdi:github" width="2rem" /> -->
	<!-- 			</span> -->
	<!-- 			<span>Github</span> -->
	<!-- 		</a> -->
	<!-- 	</div> -->
	<!-- </div> -->
	<p class="text-center">
		No account yet? Register <a class="underline" href="/register">here</a>.
	</p>
</div>

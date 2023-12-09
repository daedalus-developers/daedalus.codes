<script lang="ts">
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { userDetailsFormSchema } from '@types';
	import LinkInput from './link-input.svelte';

	const toast = getToastStore();
	const { form, errors, constraints, enhance, message, delayed } = superForm(
		$page.data.userDetailsForm,
		{
			validators: userDetailsFormSchema,
			onResult: async ({ result }) => {
				if (result.type === 'success')
					toast.trigger({
						message: 'Profile updated.'
					});
			}
		}
	);
</script>

<div class="mx-4">
	<div class="flex justify-center mx-auto py-4">
		<h1 class="h3">Details</h1>
	</div>
	<div class="form-control text-center min-w-[50%] mx-auto">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>

	<form
		method="POST"
		action="/api/actions/users?/details"
		class="form mx-auto min-w-[50%]"
		use:enhance
	>
		<TextInput
			name="bio"
			label="bio"
			placeholder="low born noob"
			bind:value={$form.bio}
			errors={$errors.bio}
			constraints={$constraints.bio}
		/>
		<textarea
			class="textarea my-4"
			rows="5"
			name="details"
			bind:value={$form.details}
			placeholder="...."
		/>
		<LinkInput
			name="linkedin"
			label="LinkedIn"
			link="https://www.linkedin.com/in/"
			bind:value={$form.linkedin}
			errors={$errors.linkedin}
			constraints={$constraints.linkedin}
		/>

		<LinkInput
			name="x"
			label="X / Twitter"
			link="https://www.twitter.com/"
			bind:value={$form.x}
			errors={$errors.x}
			constraints={$constraints.x}
		/>
		<LinkInput
			name="github"
			label="Github"
			link="https://www.github.com/"
			bind:value={$form.github}
			errors={$errors.github}
			constraints={$constraints.github}
		/>
		<button class="btn variant-filled-primary my-4 w-full" disabled={$delayed}>Update</button>
	</form>
</div>

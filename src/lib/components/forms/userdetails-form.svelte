<script lang="ts">
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { userDetailsFormSchema } from '@types';
	import LinkInput from './link-input.svelte';
	import { Carta, CartaEditor } from 'carta-md';
	import { attachment } from '@cartamd/plugin-attachment';
	import { emoji } from '@cartamd/plugin-emoji';
	import { slash } from '@cartamd/plugin-slash';
	import { code } from '@cartamd/plugin-code';
	import 'carta-md/default.css';
	import '@cartamd/plugin-emoji/default.css';
	import '@cartamd/plugin-slash/default.css';
	import '@cartamd/plugin-attachment/default.css';
	// import '@cartamd/plugin-code/default.css';
	import purifier from 'isomorphic-dompurify';
	import { zod } from 'sveltekit-superforms/adapters';

	const carta = new Carta({
		sanitizer: purifier.sanitize,
		extensions: [
			attachment({
				async upload(file) {
					const formData = new FormData();
					formData.append('file', file);
					const response = await fetch('/api/actions/attachments', {
						method: 'POST',
						body: formData
					})
						.then((res) => res.json())
						.then((res) => res.url as string);
					return response;
				}
			}),
			emoji(),
			slash(),
			code()
		]
	});

	const toast = getToastStore();
	const { form, errors, constraints, enhance, message, delayed, tainted } = superForm(
		$page.data.form,
		{
			validators: zod(userDetailsFormSchema),
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
	<div class="mx-auto flex justify-center py-4">
		<h1 class="h3">Details</h1>
	</div>
	<div class="form-control mx-auto min-w-[50%] text-center">
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
		<div class="pt-4">
			<CartaEditor {carta} bind:value={$form.details} mode="tabs" />
		</div>
		<textarea
			class="textarea my-4 hidden"
			rows="5"
			name="details"
			bind:value={$form.details}
			placeholder="...."
		/>
		<button class="variant-filled-primary btn my-4 w-full" disabled={$delayed || !$tainted}
			>Update</button
		>
	</form>
</div>

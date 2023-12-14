<script lang="ts">
	import { page } from '$app/stores';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { contactSchema } from '@types';
	import { superForm } from 'sveltekit-superforms/client';
	import TextInput from './text-input.svelte';
	import EmailInput from './email-input.svelte';
	import PhoneInput from './phone-input.svelte';
	import TextareaInput from './textarea-input.svelte';

	const toast = getToastStore();
	const { form, errors, constraints, enhance, message } = superForm($page.data.form, {
		validators: contactSchema,
		onResult: async ({ result }) => {
			if (result.type === 'success')
				toast.trigger({
					message: 'Message sent successfully'
				});
		}
	});
</script>

<form
	action="/api/actions/contact"
	method="POST"
	use:enhance
	class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
>
	<div class="form-control mx-auto min-w-[50%] text-center">
		{#if $message}
			<div class="variant-ghost-error p-4">{$message}</div>
		{/if}
	</div>
	<div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<div>
				<TextInput
					name="firstName"
					label="First Name"
					placeholder="John"
					bind:value={$form.firstName}
					errors={$errors.firstName}
					constraints={$constraints.firstName}
				/>
			</div>
			<div>
				<TextInput
					name="lastName"
					label="Last Name"
					placeholder="Wick"
					bind:value={$form.lastName}
					errors={$errors.lastName}
					constraints={$constraints.lastName}
				/>
			</div>
			<div class="sm:col-span-2">
				<EmailInput
					name="email"
					label="Email"
					placeholder="johnwick@thehightable.org"
					bind:value={$form.email}
					errors={$errors.email}
					constraints={$constraints.email}
				/>
			</div>
			<div class="sm:col-span-2">
				<PhoneInput
					name="phoneNumber"
					label="Phone Number"
					placeholder="+63987654321"
					bind:value={$form.phoneNumber}
					errors={$errors.phoneNumber}
					constraints={$constraints.phoneNumber}
				/>
			</div>
			<div class="sm:col-span-2">
				<TextareaInput
					name="message"
					label="Message"
					placeholder="you inquiry/message goes here..."
					bind:value={$form.message}
					errors={$errors.message}
					constraints={$constraints.message}
				/>
			</div>
		</div>
		<div class="mt-8 flex justify-end">
			<button type="submit" class="variant-filled-primary btn">Send message</button>
		</div>
	</div>
</form>

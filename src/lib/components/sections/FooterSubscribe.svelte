<script lang="ts">
	import { EmailInput } from '@components';
	import { Container } from '@components/utilities/';
	import Icon from '@iconify/svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { subscriberFormSchema } from '@types';
	import { superForm, superValidateSync } from 'sveltekit-superforms/client';

	const toast = getToastStore();

	const { form, errors, enhance, delayed } = superForm(superValidateSync(subscriberFormSchema), {
		validators: subscriberFormSchema,
		onResult: async ({ result }) => {
			if (result.type === 'success')
				toast.trigger({
					message: result.data?.message
				});
		}
	});
</script>

<section class="py-32">
	<Container addClass="flex flex-col md:flex-row items-center">
		<div class="flex flex-col gap-8 text-center md:gap-10 md:text-left">
			<h3
				class="text-3xl font-bold dark:bg-gradient-to-r
			dark:from-primary-600 dark:to-secondary-600 dark:bg-clip-text dark:text-transparent md:text-4xl"
			>
				Subscribe to our newsletter
			</h3>
			<p>
				Stay ahead in tech! Subscribe now for exclusive updates on mentorship, courses, and
				hackathons. Join our dynamic community and access valuable insights straight to your inbox.
				Don't miss out – subscribe today!
			</p>
			<form class="flex" method="POST" action="/api/actions/contact?/subscribe" use:enhance>
				<EmailInput bind:value={$form.email} bind:errors={$errors.email} name="email" />
				<input
					type="submit"
					disabled={$delayed}
					class="variant-filled-primary btn ml-5"
					value="Subscribe"
				/>
			</form>
		</div>
		<div class="calendar hidden aspect-square w-96 items-center justify-center p-10 md:flex">
			<span class="text-[200px] text-primary-600">
				<Icon icon="clarity:calendar-solid" class=" skew-y-6 transform-gpu" />
			</span>
		</div>
	</Container>
</section>

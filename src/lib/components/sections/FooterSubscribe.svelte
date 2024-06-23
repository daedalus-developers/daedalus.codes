<script lang="ts">
	import { page } from '$app/stores';
	import { EmailInput } from '@components';
	import { Container } from '@components/utilities/';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { subscriberFormSchema } from '@types';
	import { ASSET_URL } from '@utils';
	import { superForm } from 'sveltekit-superforms/client';
	import { zod } from 'sveltekit-superforms/adapters';
	import type { LayoutServerData } from '../../../routes/(default)/$types';

	const toast = getToastStore();

	const data = $page.data as LayoutServerData;

	const { form, errors, constraints, enhance, delayed, tainted } = superForm(data.subscriberForm, {
		validators: zod(subscriberFormSchema),
		onResult: async ({ result }) => {
			if (result.type === 'success')
				toast.trigger({
					message: result.data?.message,
					background: 'variant-filled-success'
				});
		}
	});
</script>

<section class="py-24">
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
				<div class="flex w-full max-w-[360px] flex-col">
					<EmailInput
						bind:value={$form.email}
						bind:errors={$errors.email}
						bind:constraints={$constraints.email}
						name="email"
					/>
				</div>
				<div>
					<input
						type="submit"
						disabled={$delayed || !$tainted}
						class="variant-filled-primary btn ml-2 flex-none rounded-none"
						value="Subscribe"
					/>
				</div>
			</form>
		</div>
		<div class="calendar hidden aspect-square w-96 items-center justify-center p-10 md:flex">
			<span class="text-[200px] text-primary-600">
				<img src={ASSET_URL + 'calendar.png'} alt="calendar" />
			</span>
		</div>
	</Container>
</section>

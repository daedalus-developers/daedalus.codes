<script lang="ts">
	import { browser } from '$app/environment';
	import { differenceInHours } from 'date-fns';

	type Promotion = {
		message: string;
		link: string;
	};

	const getPromotion = async (): Promise<Promotion | undefined> => {
		const request = await fetch('https://db.daedalus.codes/api/collections/megaphone/records');
		const response = await request.json();
		const { items } = response;
		const latest = items.at(-1);
		const difference = differenceInHours(new Date(), new Date(latest.created));
		if (difference > 1) {
			return;
		}
		return {
			message: latest.message,
			link: latest.link
		} satisfies Promotion;
	};
	let promotion = browser ? getPromotion() : { message: '', link: '' };
</script>

{#await promotion}
	<div />
{:then promotion}
	{#if promotion?.message}
		<div class="z-10 mx-auto flex w-full bg-surface">
			<div class="mx-auto font-bold text-white">
				<a href={promotion?.link ?? '/'}>
					<h1>{promotion?.message}</h1>
				</a>
			</div>
		</div>
	{/if}
{/await}

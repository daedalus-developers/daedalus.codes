<script lang="ts">
	import { Container } from '@components/utilities';

	const { data } = $props();
</script>

<section class="min-h-screen py-5">
	<Container addClass="space-y-5">
		<h2
			class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
		>
			Courses
		</h2>

		{#await data.courses}
			<p class="py-10 text-center">Processing</p>
		{:then courses}
			{#if courses && courses.length > 0}
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{#each courses as { id, slug, title, description, price, cover, instructor: { name, thumbnail } }}
						{@const formatter = new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: price.currency // Change the currency code as per your requirement
						})}

						<a href="/courses/{slug}" class="card bg-surface-200-700-token">
							<img
								src={cover}
								class="bg-surface-100-800-token aspect-square w-full object-cover p-2"
								alt=""
							/>
							<div class="p-4">
								<h3 class="h4">{title}</h3>
								<!-- price in 2 decimals -->
								<p>{formatter.format(price.amount)}</p>
							</div>
						</a>
					{/each}
				</div>
			{:else}
				<p class="py-10 text-center">No courses found</p>
			{/if}
		{/await}
	</Container>
</section>

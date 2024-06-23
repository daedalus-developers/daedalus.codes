<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';

	const { data } = $props();
	const course = data.course;
	const toaster = getToastStore();
	function selectCourse() {
		//TODO: Implement course selection
		if (!course) return;
		toaster.trigger({
			message: 'Selected course ' + course.title
		});
	}
</script>

<section class="py-5">
	{#if course}
		<Container addClass="space-y-5 pb-20">
			{@const { title, description, price, cover, instructor } = course}
			{@const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: price.currency
			})}
			<div class="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
				<div class="order-2 space-y-5 lg:order-1">
					<p>
						<a href="/courses" class="hover:underline">Courses</a>
						<Icon
							icon="carbon:chevron-right"
							class="inline-block align-text-bottom text-primary-500"
						/>
						{title}
					</p>
					<img
						src={cover}
						class="bg-surface-200-700-token mx-auto block aspect-video w-full object-contain p-2 lg:hidden"
						alt=""
					/>
					<div class="space-y-2 lg:space-y-8">
						<h1 class="h1">{title}</h1>
						<div class="max-w-[70px] bg-primary-500 py-1"></div>
						<p class="h3">{formatter.format(price.amount)}</p>
						<button class="btn bg-secondary-500 uppercase" onclick={selectCourse}
							>Start Course</button
						>
					</div>
				</div>
				<div class="order-1 mb-5 lg:order-2">
					<img
						src={cover}
						class="bg-surface-200-700-token mx-auto hidden aspect-video w-full object-contain p-2 lg:block"
						alt=""
					/>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				<div class="space-y-10">
					<p class="leading-relaxed">
						<!-- FIXME: For now, I will be disabling ESLINT BUT we must do something about this to avoid XSS attacks -->
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html description}
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-y-3">
					<img
						src={instructor.thumbnail}
						alt="thumbnail"
						class="w-40"
						style="box-shadow: 6px 6px 0 #ffffff;"
					/>
					<p>Course Instructor: {instructor.name}</p>
				</div>
			</div>
		</Container>
		<div class="bg-surface-100-800-token space-y-20 py-20">
			<h2 class="h2 text-center">Key Takeaways</h2>
			{#if course.takeaways}
				<Container addClass="max-w-[1100px]">
					<ul class="space-y-5">
						{#each course.takeaways as takeaway}
							{@const { title, description } = takeaway}
							<li class="flex gap-2">
								<span><Icon icon="mdi:arrow-right" class="text-3xl text-primary-500" /></span>
								<div>
									<p class="text-xl lg:text-2xl">{title}</p>
									<p>{description}</p>
								</div>
							</li>
						{/each}
					</ul>
				</Container>
			{/if}
		</div>
	{:else}
		<p>No course</p>
	{/if}
</section>

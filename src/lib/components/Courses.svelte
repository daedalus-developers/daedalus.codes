<script>
	import SectionHeader from './sections/SectionHeader.svelte';
	import CardsCourses from './utils/CardsCourses.svelte';
</script>

<div class="mx-auto py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<SectionHeader
				title="FREE COURSES"
				description="You can check out some of our free courses"
			/>
		</div>
		<CardsCourses />
	</div>
</div>

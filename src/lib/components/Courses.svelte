<script>
	import SectionHeader from './sections/SectionHeader.svelte';
	import SectionHeaderCourses from './sections/SectionHeaderCourses.svelte';
	import CardsCourses from './utils/CardsCourses.svelte';
	let source = "'/salyJuts.svg'"
</script>

<div class=" py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<SectionHeaderCourses
				title="FREE COURSES"
				description="You can check out <br> some of our  <span style='color:#F72585;'>free courses</span>  "
			/>
		</div>

		<div
			class="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 justify-items-center text-5xl font-black dark:text-white text-center "
		>		
			<CardsCourses/>
		</div>
	</div>
</div>

<style>
</style>

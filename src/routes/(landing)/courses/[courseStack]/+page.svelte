<script lang="ts">
	import CourseContent from '$lib/components/coursePath/CourseContent.svelte';
	import LeftSideNavbar from '$lib/components/coursePath/LeftSideNavbar.svelte';
</script>

<section
	class="ye mb-5 flex min-h-[80vh] max-w-7xl flex-col justify-center sm:max-w-full lg:pt-2"
>
	<nav class="mx-auto flex w-full max-w-7xl items-center pl-4 lg:pt-2">
		<a
			class="my-5 flex items-center text-base font-light leading-6 text-gray-900 hover:text-secondary dark:text-white dark:hover:text-secondary"
			href="/courses"
		>
			<svg
				class="mr-2 h-4 w-4"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15 19l-7-7 7-7"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			Go back to stack choice
		</a>
	</nav>
	<main
		class="mx-auto flex w-full max-w-7xl
	items-center justify-center lg:pt-2"
	>
		<LeftSideNavbar />
		<div class="w-full overflow-y-auto md:h-[80vh]">
			<CourseContent />
		</div>
	</main>
</section>

<style>
	@media only screen and (max-width: 788px) {
		main {
			flex-direction: column;
		}
	}
</style>

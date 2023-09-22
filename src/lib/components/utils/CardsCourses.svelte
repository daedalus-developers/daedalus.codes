<script lang="ts">
	import { coursesData as courses } from '$lib/data';
</script>

<div class="mx-auto flex max-w-7xl flex-col justify-center lg:flex-row">
	{#each courses as course}
		<div
			class={`mx-auto mt-12 px-16 pt-6 basis-[calc(100%/${courses.length})] rounded-[100px] border-2 border-secondary text-center`}
		>
			<span
				class="mx-auto text-4xl font-bold text-daedalusDark dark:text-white"
			>
				<a href={course.link}>
					{course.title}
				</a>
			</span>
			<img
				src={course.backgroundImage}
				class="px-10 hover:scale-90"
				alt={course.title}
			/>
		</div>
	{/each}
</div>

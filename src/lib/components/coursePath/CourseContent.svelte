<script lang="ts">
	export let courses = [
		{
			title: 'Course 1',
			shortDescription: 'Short description for Course 1',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 2',
			shortDescription: 'Short description for Course 2',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 3',
			shortDescription: 'Short description for Course 3',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 4',
			shortDescription: 'Short description for Course 1',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 5',
			shortDescription: 'Short description for Course 2',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 6',
			shortDescription: 'Short description for Course 3',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 7',
			shortDescription: 'Short description for Course 1',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 8',
			shortDescription: 'Short description for Course 2',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 9',
			shortDescription: 'Short description for Course 3',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 10',
			shortDescription: 'Short description for Course 1',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 11',
			shortDescription: 'Short description for Course 2',
			backgroundImage: 'https://placehold.co/600x400'
		},
		{
			title: 'Course 12',
			shortDescription: 'Short description for Course 3',
			backgroundImage: 'https://placehold.co/600x400'
		}
	];
</script>

<section
	class="grid-auto-rows-[1fr] grid w-full grid-cols-1 gap-2 overflow-y-auto p-2 pr-4 md:grid-cols-2"
>
	{#each courses as course (course.title)}
		<article
			class="max relative m-1 aspect-video h-fit w-full transform
        overflow-hidden rounded-2xl transition-all duration-300 ease-in-out [&>img]:hover:scale-105"
		>
			<a
				class="absolute inset-0 bottom-0 z-[1] h-full overflow-hidden p-4"
				href="/"
			>
				<div
					class=" absolute left-[0.5rem] top-[0.5rem] z-[-1] h-16 bg-primary opacity-50 transition-all duration-1000 ease-out"
				/>
				<h3 class="z-[2] font-bold">
					{course.title}
				</h3>
				<span>{course.shortDescription}</span>
			</a>
			<img src={course.backgroundImage} alt="" class="max-w-full" />
		</article>
	{/each}
</section>

<style>
	a > div {
		width: 0%;
		opacity: 0%;
		border-radius: 8px;
		transition:
			opacity 0.75s ease-in-out,
			width 1s ease-in-out;
	}
	article:hover > a > div {
		opacity: 20%;
		width: 80%;
		border-radius: none;
	}
	h3 {
		margin-top: auto;
		font-weight: bold;
		font-size: calc(18px + min(0.45vw, 2px));
		line-height: calc(18px + min(0.45vw, 2px));
		text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.6);
	}
	span {
		font-size: calc(12px + min(0.45vw, 2px));
		line-height: calc(12px + min(0.45vw, 2px));
		opacity: 0.8;
		text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.6);
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		opacity: 0.7;
		transition: 0.1s;
	}
</style>

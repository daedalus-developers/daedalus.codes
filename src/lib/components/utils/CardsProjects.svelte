<script>
	import { listOfProjects } from '$lib/data';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	let options = {
		loop: true,
		breakpoints: {
			'(max-width:640px)': { axis: 'y' }
		},
	};
</script>

<div class="embla px-4 py-4" use:emblaCarouselSvelte={{ options }}>
	<ul class="embla__container h-40 py-2">
		{#each listOfProjects as project}
			<li class="embla__slide">
				<a href={project.imageSource} target="_blank">
					<img src={project.imageSource} alt={project.Title} />
					<article>
						<p class="text-2xl max-sm:text-sm">{project.projectDescription}</p>
						<h1 class="text-4xl max-sm:text-base">{project.Title}</h1>
						<h2 class="text-secondary max-sm:text-xs">
							{project.techStack}
						</h2>
					</article>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.embla {
		height: 480.055px;
		width: 100%;
		max-width: 1440px;
		overflow: hidden;
	}
	.embla__container {
		height: 450.055px;
		display: flex;
		list-style: none;
	}
	.embla__slide {
		position: relative;
		border-radius: 18.775px;
		color: black;
		overflow: hidden;
		object-fit: cover;
		margin-left: 15px;
		flex: 0 0 55%;
		height: 400.055px;
	}

	.embla__slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.embla__slide article {
		margin-top: 69px;
		padding: 20px;
		visibility: hidden;
		color: white;
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: 29.454px;
		font-weight: 600;
	}

	.embla__slide:hover article {
		visibility: visible;
		width: 100%;
		background: rgb(0, 0, 0);
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.7875525210084033) 0%,
			rgba(255, 255, 255, 0) 92%
		);
	}

	@media (max-width: 768px) {
		.embla__slide {
			flex: 0 0 90%;
		}
		.embla__container {
			height: 450.055px;
			display: flex;
		}

		.embla__slide article {
			visibility: visible;
			background: rgb(0, 0, 0);
			background: linear-gradient(
				0deg,
				rgba(0, 0, 0, 0.7875525210084033) 0%,
				rgba(255, 255, 255, 0) 92%
			);
		}
	}

	@media (max-width: 640px) {
		.embla {
			height: 510.055px;
		}
		.embla__slide {
			box-shadow: 0px 27px 15px -12px rgba(0, 0, 0, 0.62) inset;
			width: 90%;
			flex: 0 0 160px;
			margin: auto;
			margin-bottom: 10px;
			border-radius: 27px;
		}
		.embla__container {
			height: 478.055px;
			padding: 0px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.embla__slide article {
			visibility: visible;
			background: rgb(0, 0, 0);
			background: linear-gradient(
				0deg,
				rgba(0, 0, 0, 0.7875525210084033) 0%,
				rgba(255, 255, 255, 0) 92%
			);
		}
	}
</style>

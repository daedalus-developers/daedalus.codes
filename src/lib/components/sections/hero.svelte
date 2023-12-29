<script>
	import { Container } from '@components/utilities/';
	import { ASSET_URL } from '@utils';
	// import Icon from '@iconify/svelte';
</script>

<section id="#hero" class="relative flex min-h-screen items-center bg-neutral-900">
	<div
		class="absolute right-0 top-32 z-0 h-56 w-64 rounded-full bg-primary-800 blur-[150px] filter lg:h-80 lg:w-96"
	></div>
	<div
		class="absolute bottom-32 left-0 z-0 h-52 w-60 rounded-full bg-secondary-800 blur-[150px] filter lg:h-80 lg:w-96"
	></div>
	<Container addClass="flex QQQ flex-col md:flex-row relative text-neutral-100 py-6">
		<div class="lg:gap-10X flex w-full flex-col justify-center text-center md:text-left">
			<h1 class="mb-10 text-5xl font-black lg:text-7xl">Carry the world with our craftmanship</h1>
			<p class="mb-10">
				We build digital solutions that are both beautiful, functional, efficient and user-friendly.
				We aim to inspire through our work, leaving a lasting impression on your users.
			</p>
			<div class="flex justify-center gap-5 md:justify-start md:gap-10">
				<a href="/contact" class="variant-filled-primary btn w-full sm:btn-lg md:btn-xl md:w-auto"
					>Get Started</a
				>
				<a
					href="#projects"
					class="btn w-full border-2 border-neutral-100 hover:variant-filled sm:btn-lg md:btn-xl md:w-auto"
					>Learn More →</a
				>
			</div>
		</div>

		<div class="flex w-full items-center justify-center">
			<img src={`${ASSET_URL}hero.png`} alt="hero" class="md:min-w-[500px]" />
		</div>
	</Container>
</section>

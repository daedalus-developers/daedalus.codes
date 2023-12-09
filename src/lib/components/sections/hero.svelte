<script>
	import { Container } from '@components/utilities/';
	// import Icon from '@iconify/svelte';
</script>

<section class="relative min-h-screen bg-neutral-900 flex items-center">
	<div
		class="absolute w-64 h-56 lg:w-96 lg:h-80 rounded-full right-0 top-32 bg-primary-800 filter blur-[150px] z-0"
	></div>
	<div
		class="absolute w-60 h-52 lg:w-96 lg:h-80 rounded-full left-0 bottom-32 bg-secondary-800 filter blur-[150px] z-0"
	></div>
	<Container addClass="flex QQQ flex-col md:flex-row relative text-neutral-100 py-20">
		<div class="w-full flex flex-col justify-center lg:gap-10X text-center md:text-left">
			<h1 class="text-5xl lg:text-7xl font-black mb-10">Carry the world with our craftmanship</h1>
			<p class="mb-10">
				We build digital solutions that are both beautiful, functional, efficient and user-friendly.
				We aim to inspire through our work, leaving a lasting impression on your users.
			</p>
			<div class="flex justify-center md:justify-start gap-5 md:gap-10">
				<a href="/contact" class="w-full md:w-auto btn sm:btn-lg md:btn-xl variant-filled-primary"
					>Get Started</a
				>
				<a
					href="#portfolio"
					class="w-full md:w-auto btn sm:btn-lg md:btn-xl border-2 border-neutral-100 hover:variant-filled"
					>Learn More →</a
				>
			</div>
		</div>

		<div class="w-full flex justify-center items-center">
			<img src={'https://storage.daedalus.codes/hero.png'} alt="hero" class="md:min-w-[500px]" />
		</div>
	</Container>
</section>

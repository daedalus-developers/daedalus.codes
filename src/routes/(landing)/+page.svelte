<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import Courses from '$lib/components/Courses.svelte';
	import Events from '$lib/components/Events.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Mission from '$lib/components/Mission.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';
</script>

<svelte:head><title>Daedalus</title></svelte:head>

<div
	class="absolute inset-x-0 top-0 hidden aspect-auto transform-gpu overflow-hidden blur-3xl dark:block sm:-top-80"
>
	<div
		class="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 transform bg-gradient-to-br from-[#7209b7] to-[#7209b7] opacity-20 sm:w-[72.1875rem]"
		style="clip-path: ellipse(50% 75% at 50% 0%);"
	/>

	<div
		style="width: 100%; height: 100%; opacity: 0.50; background: #7209B7; box-shadow: 200px 200px 200px; filter: blur(200px)"
	/>
</div>

<div id="hero">
	<Hero />
</div>

<section class="main-section" id="courses">
	<Courses />
</section>

<section class="main-section" id="projects">
	<Projects />
</section>

<section class="main-section" id="events">
	<Events />
</section>

<section class="main-section" id="contactUs">
	<Cta />
</section>

<section class="main-section py-24XX" id="about">
	<Mission />
	<TeamSection />
</section>

<style>
	:root {
		scroll-behavior: smooth;
	}

	.main-section {
		padding: 60px 0;
	}

	.main-section:nth-child(odd) {
		background-color: rgba(0, 0, 0, 0.1);
	}
</style>

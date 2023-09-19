<script lang="ts">
	import Courses from '$lib/components/Courses.svelte';
	import Events from '$lib/components/Events.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Mission from '$lib/components/Mission.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';
</script>

<svelte:head><title>Daedalus</title></svelte:head>

<div
	class="absolute inset-x-0 top-0 transform-gpu overflow-hidden blur-3xl sm:-top-80 aspect-auto hidden dark:block"
>
	<div
		class="relative left-1/2 transform -translate-x-1/2 aspect-[1155/678] w-[36.125rem] sm:w-[72.1875rem] bg-gradient-to-br from-[#7209b7] to-[#7209b7] opacity-20"
		style="clip-path: ellipse(50% 75% at 50% 0%);"
	/>
</div>
<div id="hero">
	<Hero />
</div>
<div id="courses">
	<Courses />
</div>
<div id="projects">
	<Projects />
</div>
<div id="events">
	<Events />
</div>
<div id="about">
	<Mission />
	<TeamSection />
</div>

<style>
	:root {
		scroll-behavior: smooth;
	}
</style>

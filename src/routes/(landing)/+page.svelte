<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import Courses from '$lib/components/Courses.svelte';
	import Events from '$lib/components/Events.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import HeroDark from '$lib/components/HeroDark.svelte';
	import HeroWithCTA from '$lib/components/HeroWithCTA.svelte';
	import Mission from '$lib/components/Mission.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head><title>Daedalus</title></svelte:head>

<HeroWithCTA />
<HeroDark />
<Hero />
<Courses />
<Projects />
<Mission />
<Events />
<Cta />

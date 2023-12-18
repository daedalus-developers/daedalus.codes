<script lang="ts">
	import { Hero } from '@components';
	import MissionVision from './MissionVision.svelte';
	import DaedalusCommunity from './DaedalusCommunity.svelte';
	import Projects from './Projects.svelte';
	import Team from './Team.svelte';
	import Events from './Events.svelte';
</script>

<section id="hero">
	<Hero />
</section>

<section id="about">
	<MissionVision />
	<DaedalusCommunity />
</section>

<section id="projects">
	<Projects />
</section>

<section id="team">
	<Team />
</section>

<section id="events">
	<Events />
</section>

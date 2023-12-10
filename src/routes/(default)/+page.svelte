<script lang="ts">
	import type { PageData } from './$types';
	import { Hero } from '@components';
	import MissionVision from './MissionVision.svelte';
	import DaedalusCommunity from './DaedalusCommunity.svelte';
	import Projects from './Projects.svelte';
	import Team from './Team.svelte';

	export let data: PageData;

	const projects = data.projects;
</script>

<section id="hero">
	<Hero />
</section>

<section id="about">
	<MissionVision />
	<DaedalusCommunity />
</section>

<section id="projects">
	<Projects {projects} />
</section>

<section id="team">
	<Team />
</section>

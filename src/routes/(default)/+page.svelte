<script lang="ts">
	import type { PageData } from './$types';
	import { Hero } from '@components';
	import MissionVision from './MissionVision.svelte';
	import DaedalusCommunity from './DaedalusCommunity.svelte';
	import Portfolio from './Portfolio.svelte';
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

<section id="portfolio">
	<Portfolio {projects} />
</section>

<section id="team">
	<Team />
</section>

<script lang="ts">
	import { Hero } from '@components';
	import MissionVision from './MissionVision.svelte';
	import DaedalusCommunity from './DaedalusCommunity.svelte';
	import Projects from './Projects.svelte';
	import Team from './Team.svelte';
	import Events from './Events.svelte';
	import { ASSET_URL } from '@utils';
</script>

<svelte:head>
	<title>Daedalus</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Daedalus" />
	<meta
		property="og:description"
		content={`We build digital solutions that are both beautiful, functional, efficient and user-friendly.
				We aim to inspire through our work, leaving a lasting impression on your users.`}
	/>
	<meta property="og:image" content={ASSET_URL + 'daedalus.png'} />
</svelte:head>

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

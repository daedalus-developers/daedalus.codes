<script lang="ts">
	import { ProjectCard } from '@components';
	import type { ProjectRecords } from '@types';

	export let data: ProjectRecords;
</script>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>

<ProjectCard {data} />

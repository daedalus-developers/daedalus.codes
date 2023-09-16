<script lang="ts">
	import type { PageData } from './$types';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';
	export let data: PageData;
</script>

<TeamSection teamMembers={data.teamMembers} />

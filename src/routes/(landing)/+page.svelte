<script lang="ts">
	import HeroSimple from '$lib/components/HeroSimple.svelte';
	import HeroWithImage from '$lib/components/HeroWithImage.svelte';
	import BlogSection from '$lib/components/sections/BlogSection.svelte';
	import TeamSection from '$lib/components/sections/TeamSection.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head><title>Daedalus</title></svelte:head>
<HeroSimple />
<HeroWithImage />
<TeamSection teamMembers={data.teamMembers} />
<BlogSection />

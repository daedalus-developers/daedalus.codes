<script>
	import SectionHeader from './sections/SectionHeader.svelte';
	import CardsProjects from './utils/CardsProjects.svelte';
</script>

<div class="py-24 sm:py-32">
	<div class=" relative mx-auto flex max-w-7xl flex-col items-center">
		<SectionHeader
			title="Events"
			description="You can check out some of our free courses"
		/>
		<CardsProjects />

		<button
			class="h-20 w-72 rounded-[17rem] bg-accent text-3xl font-semibold text-daedalusDark max-[640px]:m-4 max-[640px]:h-14 max-[640px]:w-36 max-[640px]:text-sm"
			>Discover more</button
		>
	</div>
</div>

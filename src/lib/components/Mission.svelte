<script lang="ts">
	import { mission, vision } from '$lib/data';
	let currentTab = 0;
	const tabs: { title: string; description: string }[] = [
		{ title: 'Mission', description: mission },
		{ title: 'Vission', description: vision }
	];
	$: setCurrentTab = (id: number) => {
		currentTab = id;
	};
</script>

<div class="mx-auto flex max-w-7xl flex-col px-12 py-24">
	<div class="flex-row pb-4 mb-4">
		{#each tabs as tab, id}
			<span
				class="hover:border-b-secondary text-3xl font-semibold m-3 {currentTab === id
					? 'rounded border-b-4 border-solid border-secondary text-secondary'
					: 'text-black dark:text-white'}"
				class:active={currentTab === id}
				
			>
				<button on:click={() => setCurrentTab(id)}>{tab.title}</button>
			</span>
		{/each}
	</div>
	<div
		class="rounded border-l-4 border-solid border-secondary p-4 pl-10 font-serif text-2xl italic"
	>
		{tabs[currentTab].description}
	</div>
</div>
<script lang="ts">
	import { mission, vision } from '$lib/data';
	let currentTab = 0;
	const tabs: { id: number; title: string; description: string }[] = [
		{ id: 0, title: 'Mission', description: mission },
		{ id: 1, title: 'Vision', description: vision }
	];
	const setCurrentTab = (id: number) => {
		currentTab = id;
	};
</script>

<div class="mx-auto flex max-w-7xl flex-col px-12 py-24">
	<div class="flex-row pb-4">
		{#each tabs as tab}
			<span
				class="text-3xl font-semibold {currentTab === tab.id
					? 'rounded border-b-4 border-solid border-secondary text-secondary '
					: 'text-black dark:text-white'}"
				class:active={currentTab === tab.id}
			>
				<button on:click={() => setCurrentTab(tab.id)}>{tab.title}</button>
			</span>
		{/each}
	</div>
	<div
		class="rounded border-l-4 border-solid border-secondary p-4 font-serif text-2xl italic"
	>
		{tabs[currentTab].description}
	</div>
</div>

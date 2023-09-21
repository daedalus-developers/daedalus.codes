<script lang="ts">
	let activeTab = 'Mission';
	import { mission as actualMission, vision as actualVision } from '$lib/data';

	const mission = {
		name: 'Mission',
		description: actualMission
	};

	const vision = {
		name: 'Vision',
		description: actualVision
	};

	function setActiveTab(tabName: string) {
		activeTab = tabName;
	}
</script>

<div class="w-full max-w-full">
	<div class="min-h-screen flex flex-col items-center justify-center">
		<div class="flex space-x-4 w-full max-w-2xl">
			<button
				on:click={() => setActiveTab('Mission')}
				class = "font-semibold text-3xl {(activeTab === 'Mission') ? "text-secondary border-b-4 border-solid border-secondary rounded " :'text-black dark:text-white' }"
				class:active={activeTab === 'Mission'}
			>
				Mission
			</button>
			<button
				on:click={() => setActiveTab('Vision')}
				class = "font-semibold text-3xl {(activeTab === 'Vision') ? "text-secondary border-b-4 border-solid border-secondary rounded " :'text-black dark:text-white' }"
				class:active={activeTab === 'Vision'}
			>
				Vision
			</button>
		</div>
		<br>
		<div class="dark:text-white w-full max-w-2xl flex gap-5">
			<div class="mt-4 border-4 border-secondary h-52 rounded"></div>
			{#if activeTab === 'Mission'}
				<p class="mt-8 text-justify font-serif italic font-normal text-2xl">{mission.description}</p>
			{:else if activeTab === 'Vision'}
				<p class="mt-8 text-justify font-serif italic font-normal text-2xl">{vision.description}</p>
			{/if}
		</div>
	</div>
</div>

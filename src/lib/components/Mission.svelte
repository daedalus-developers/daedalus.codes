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

<div class="component">
	<div class="container">
		<div class="buttons">
			<button
				on:click={() => setActiveTab('Mission')}
				class="tab-button"
				class:active={activeTab === 'Mission'}
			>
				Mission
			</button>
			<button
				on:click={() => setActiveTab('Vision')}
				class="tab-button"
				class:active={activeTab === 'Vision'}
			>
				Vision
			</button>
		</div>
		<br />
		<div class="content">
			<div class="vl"></div>
			{#if activeTab === 'Mission'}
				<p>{mission.description}</p>
			{:else if activeTab === 'Vision'}
				<p>{vision.description}</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.component {
		width: 900px;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-sizing: border-box;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.buttons {
		margin-left: 0;
		width: 900px;
		display: flex;
		gap: 40px;
	}
	.tab-button.active {
		color: var(--color-secondary);
		border-bottom: 3px solid var(--color-secondary);
		border-bottom-width: 5px;
		border-radius: 10%;
	}
	.content {
		width: 700px;
		display: flex;
		gap: 25px;
	}
	.vl {
		margin-top: 20px;
		border: 6px solid var(--color-secondary);
		height: 250px;
		border-radius: 5px;
	}
	button {
		font-weight: 900;
		font-size: 30px;
		color: white;
	}

	button:hover {
		cursor: pointer;
		border-bottom-width: 5px;
		border-bottom: 2px solid var(--color-secondary);
		opacity: 0.1;
	}
	p {
		margin-top: 50px;
		text-align: justify;
		font-family: 'Poppins';
		font-style: italic;
		font-weight: 400;
		font-size: 25px;
		color: white;
	}
</style>

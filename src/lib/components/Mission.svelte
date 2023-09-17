<script lang="ts">
	import { page } from '$app/stores';
	import SectionHeader from './sections/SectionHeader.svelte';
	let activeTab = 'Mission'

  const mission = [
    {
      id: 1,
      name: 'Mission',
      description:
        "Our mission is to foster a vibrant and collaborative community of Filipino software developers and engineers. We aim to provide a nurturing environment where members can mentor, guide, and support each other in their professional and personal growth within the world of technology."
    }
  ]

  const vision = [
    {
      id: 2,
      name: 'Vision',
      description: 
		" Our vision is to become the go-to online destination for software developers and engineers in the Philippines, known for its unwavering commitment to knowledge sharing, mentorship, and camaraderie"
    }
  ]

  function setActiveTab(tabName: string) {
    activeTab = tabName
  }
	
</script>

<SectionHeader title="FREE COURSES" description="You can check out some of our free courses" />
<div class="container">
	<div class="buttons">
		<button
			on:click={() => setActiveTab('Mission')}
			class = "tab-button"
			class:active={activeTab === 'Mission'}
		>
			Mission
		</button>
		<button
			on:click={() => setActiveTab('Vision')}
			class = "tab-button"
			class:active={activeTab === 'Vision'}
		>
			Vision
		</button>
	</div>
	<br>
	<div>
		{#if activeTab === 'Mission'}
		  {#each mission as item (item.id)}
			  <p>{item.description}</p>
		  {/each}
		{:else if activeTab === 'Vision'}
		  {#each vision as item (item.id)}
			  <p>{item.description}</p>
		  {/each}
		{/if}
	</div>
</div>

<style>
	.container{
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.buttons{
		margin-left: 0;
		width: 450px;
		display: flex;
		gap: 30px;
	}
	.tab-button.active{
		color: var(--color-secondary);
		border-bottom: 3px solid var(--color-secondary);
		border-bottom-width: 5px;
		border-radius: 35%;
	}

	button{
		font-weight: 900;
		font-size: 25px;
		color: white;
	}

	button:hover{
		cursor: pointer;
		border-bottom-width: 5px;
		border-bottom: 2px solid var(--color-secondary);
		opacity: 0.1;

	}
	p{
		font-family: 'Poppins';
		align-items: center;
		font-weight: 400;
		font-size: 20px;
		color: white;
		width: 450px;
	}
</style>
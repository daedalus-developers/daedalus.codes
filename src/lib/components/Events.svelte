<script>
	import SectionHeader from './sections/SectionHeader.svelte';
	import { eventsData as events } from '$lib/data';
	import { onMount } from 'svelte';


	const eventsReversed = events.reverse().slice(0, 5);
	console.log({
		events,
		eventsReversed
	})

	let maxInstance =  4;
	let curInstance = 0;
	let percent = 80;
	let gap = 16;

	onMount( async () => {
		document.documentElement.style.setProperty('--custom-gap', `${gap}px`);
	});

	let setMarginLeft = `margin-left: 0;`;

	const nextPrevious = (action = '') => {
		switch ('next') {
			case action:
				if ( curInstance === maxInstance)
					curInstance = 0;
				else
					curInstance += 1

				setMarginLeft = `margin-left: calc( -${(percent * curInstance)}% - ${gap * curInstance}px );`;
				break;
		
			default:
				if ( curInstance === 0) 
					return;
				curInstance -= 1;
				setMarginLeft = `margin-left: calc( -${(percent * curInstance)}% - ${gap * curInstance}px );`;
				break;
		}
		console.log(curInstance);
	}
	
</script>

<div class="py-24 sm:py-32" data-events>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<!-- <SectionHeader title="Events" description="See our journey and events with the community" /> -->
		</div>
		<div data-flex>
			<div data-flex-item>
				<span class="text-secondary mb-5">Events</span>
				<h2>
					<span>
						See our <span class="text-accent">journey</span>
					</span>
					<span>
						and <span class="text-accent">events</span>
					</span>
					<span>within the</span>
					<span class="text-secondary">community</span>
				</h2>
				<div>
					<a
						class="relative mt-6 rounded-full bg-accent p-2 hover:bg-surface"
						href="#!">See more</a
					>
				</div>
			</div>
			<div data-flex-item>
				<div data-slider>
					<div data-event-slides>
						{#each eventsReversed as event, index}
							<div data-event data-event-id={index} 
								style={(index === 0) ? setMarginLeft : ''}
							>
								<a href="/" data-event-content>
									<h3>{event.title}</h3>
									<span>{event.shortDescription}</span>
								</a>
								<img src={event.backgroundImage} alt="">
							</div>
						{/each}
					</div>
					<!-- <button data-event-navigator data-id="left" on:click={() => nextPrevious()}>&#x2190;</button> -->
					<button data-event-navigator data-id="left" on:click={() => nextPrevious()}>
						<img src="/leftArrow.svg" alt="" srcset="">
					</button>
					<!-- <button data-event-navigator data-id="right" on:click={() => nextPrevious('next')}>&#x2192;</button> -->
					<button data-event-navigator data-id="right" on:click={() => nextPrevious('next')}>
						<img src="/rightArrow.svg" alt="" srcset="">
					</button>
				</div>
			</div>
		</div>
	</div>
</div>


<style>
	[data-flex] {
		display: flex;
		align-items: center;
	}
	@media only screen and (max-width: 998px) {
		[data-flex] {
			flex-direction: column !important;
		}
	}
	[data-flex-item] {
		width: 100%;
		padding: 16px 0;
	}
	[data-flex-item]:nth-child(1) {
		max-width: 40%;
		display: flex;
		flex-direction: column;
	}

	[data-flex-item]:nth-child(1) a {
		text-shadow: none;
		transition: 0.2s ease-in-out;
		padding: 14px 44px;
		display: inline-block;
		font-size: calc(16px + min(1.125vw, 8px));
	}

	@media only screen and (max-width: 998px) {
		[data-flex-item]:nth-child(1) {
			max-width: 100%;
			padding-right: 0;
		}
	}
	[data-flex-item]:nth-child(1) h2 {
		display: flex;
		flex-direction: column;
		font-weight: bold;
		font-size: calc(24px + min(1.75vw, 52px));
		line-height: calc(24px + min(1.75vw, 52px));
	}
	@media only screen and (max-width: 998px) {
		[data-flex-item]:nth-child(1) h2 {
			font-size: calc(44px + min(1.4vw, 32px));
			line-height: calc(44px + min(1.4vw, 32px));
		}
	}

	[data-slider] {
		position: relative;
	}
	[data-event-navigator] {
		position: absolute;
		z-index: 1;
		font-size: calc(36px + 3vw);
		top: 60%;
		transform: translate(-50%, -50%);
		transition: 0.3s ease-in-out;
		color: var(--color-accent);
		text-shadow:
        -1px -1px 0 rgba(255, 255, 255, 0.1), /* Top-left shadow */
        1px -1px 0 rgba(255, 255, 255, 0.1),  /* Top-right shadow */
        -1px 1px 0 rgba(255, 255, 255, 0.1),  /* Bottom-left shadow */
        1px 1px 0 rgba(255, 255, 255, 0.1);   /* Bottom-right shadow */
	}
	@media only screen and (max-width: 998px) {
		[data-event-navigator] {
			transform: translate(0%, -50%);
		}
	}

	[data-event-navigator]:hover {
		font-size: calc(46px + 3vw);
	}
	[data-event-navigator][data-id="left"] {
		left: 0;
	}
	[data-event-navigator][data-id="right"] {
		right: 0;
	}

	[data-event-slides] {
		display: flex;
		gap: var(--custom-gap);
		overflow: hidden;
		position: relative;
		border-radius: 16px;
	}
	[data-event-slides]::before,
	[data-event-slides]::after {
		z-index: 1;
			content: "";
			position: absolute;
			top: 0;
			width: 2.5rem;
			height: 100%;
			background: linear-gradient(
					to left,
					rgba(29, 29, 31, 0),
					rgba(29, 29, 31, 1)
			);
	}
	[data-event-slides]::before {
			left: 0;
	}
	[data-event-slides]::after {
			right: 0;
			transform: scaleX(-1);
	}
	[data-event] {
		width: 100%;
		min-width: calc(80%);
		aspect-ratio: 16/9;
		padding: 16px;
		border-radius: 16px;
		overflow: hidden;
		position: relative;
		z-index: 1;
		background: linear-gradient(to right, var(--color-primary), var(--color-accent), var(--color-surface));
		transition: margin-left 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	[data-event] [data-event-content] {
		position: absolute;
		inset: 0;
		padding: 16px;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
		z-index: 2;
		color: #ffffff;
		display: flex;
		flex-direction: column;
		gap: 8px;
		text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.6);
	}

	[data-event] [data-event-content] h3 {
		margin-top: auto;
		font-weight: bold;
		font-size: calc(18px + min(0.45vw, 2px));
		line-height: calc(18px + min(0.45vw, 2px));
	}

	[data-event] [data-event-content] span {
		font-size: calc(12px + min(0.45vw, 2px));
		line-height: calc(12px + min(0.45vw, 2px));
		opacity: 0.8;
	}

	[data-event] img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		opacity: 0.7;
		transition: 0.1s;
	}

	[data-event]:hover img {
		transform: scale(1.05);
	}
</style>


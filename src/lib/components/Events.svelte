<script>
	import { eventsData as events } from '$lib/data';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	const eventsReversed = events.reverse().slice(0, 5);

	let maxInstance = 4;
	let curInstance = 0;
	let customEventCardMinWidth = 90;
	let gap = 16;

	onMount(async () => {
		document.documentElement.style.setProperty('--custom-gap', `${gap}px`);
	});

	let setMarginLeft = `margin-left: 0;`;

	const nextPrevious = (action = '') => {
		switch ('next') {
			case action:
				if (curInstance === maxInstance) curInstance = 0;
				else curInstance += 1;

				setMarginLeft = `margin-left: calc( -${
					customEventCardMinWidth * curInstance
				}% - ${gap * curInstance}px );`;
				break;

			default:
				if (curInstance === 0) return;
				curInstance -= 1;
				setMarginLeft = `margin-left: calc( -${
					customEventCardMinWidth * curInstance
				}% - ${gap * curInstance}px );`;
				break;
		}
	};
</script>

<div class="py-24 sm:py-32" data-events>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div data-flex>
			<div data-flex-item>
				<span class="mb-5 text-secondary">Events</span>
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
							<div
								data-event
								data-event-id={index}
								style={index === 0 ? setMarginLeft : ''}
							>
								<a href="/events" data-event-content>
									<h3>{event.title}</h3>
									<span>{event.shortDescription}</span>
								</a>
								<img src={event.backgroundImage} alt="" />
							</div>
						{/each}
					</div>
					<button
						data-event-navigator
						data-id="left"
						on:click={() => nextPrevious()}
					>
						<Icon icon="ic:baseline-less-than" />
					</button>
					<button
						data-event-navigator
						data-id="right"
						on:click={() => nextPrevious('next')}
					>
						<Icon icon="ic:baseline-greater-than" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@property --gradient-angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}
	@keyframes rotation {
		0% { --gradient-angle: 0deg; }
		100% { --gradient-angle: 360deg; }
	}

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
		display: inline-block;
		transition: 0.2s ease-in-out;
		padding: 16px calc(16px + max(30px, 2.5vw));
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
		font-size: calc(28px + min(2.75vw, 56px));
		line-height: calc(28px + min(2.75vw, 56px));
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
		opacity: 0.6;
	}
	@media only screen and (max-width: 998px) {
		[data-event-navigator] {
			transform: translate(0%, -50%);
		}
	}
	[data-event-navigator]:hover {
		color: var(--color-surface);
	}

	[data-slider]:hover [data-event-navigator] {
		opacity: 1;
	}

	[data-event-navigator][data-id='left'] {
		left: 0;
	}
	[data-event-navigator][data-id='right'] {
		right: 0;
	}

	[data-event-slides] {
		display: flex;
		gap: var(--custom-gap);
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		padding: 12px 16px 12px 6px;
		/* border: solid 1px red; */
	}
	[data-event-slides]::before,
	[data-event-slides]::after {
		z-index: 1;
		content: '';
		position: absolute;
		top: 12px;
		height: calc(100% - (12px * 2));
		width: 4.5rem;
		background: linear-gradient(
			to left,
			rgba(29, 29, 31, 0),
			rgba(29, 29, 31, 0.8)
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
		min-width: 90%;
		aspect-ratio: 16/9;
		padding: 16px;
		transition: margin-left 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
		border-radius: 0.35rem;
		position: relative;
		z-index: 1;
	}

	[data-event]::before,
	[data-event]::after {
		content: '';
		position: absolute;
		inset: 0;
		background: conic-gradient(
			from var(--gradient-angle), 
			var(--color-primary),
			var(--color-secondary),
			var(--color-accent),
			var(--color-surface),
			var(--color-accent),
			var(--color-secondary),
			var(--color-primary));
		border-radius: inherit;
		animation: rotation 5s linear infinite;
		z-index: -2;
	}
	[data-event]::after {
		filter: blur(6px);
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
		top: 2px;
		right: 2px;
		bottom: 2px;
		left: 2px;
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		border-radius: inherit;
		object-fit: cover;
		z-index: -1;
		transition: 0.1s;
	}

</style>

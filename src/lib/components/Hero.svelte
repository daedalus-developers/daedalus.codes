<div class="relative mx-auto max-w-7xl pt-10" data-hero>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h1
				class="text-5xl font-black tracking-tighter text-white antialiased dark:text-white lg:text-8xl"
			>
				<span> carry the world with our craftsmanship </span>
			</h1>
			<div class="mt-5">
				<a
					class="relative rounded-full bg-accent p-2 hover:bg-surface"
					href="#contact">Get help</a
				>
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
		0% {
			--gradient-angle: 0deg;
		}
		100% {
			--gradient-angle: 360deg;
		}
	}

	[data-hero] {
		padding-top: 0;
		border-bottom-left-radius: calc(6vw);
		border-bottom-right-radius: calc(6vw);

		position: relative;
		z-index: 1;
	}
	[data-hero]::before,
	[data-hero]::after {
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
			var(--color-primary)
		);
		border-radius: inherit;
		animation: rotation 5s linear infinite;
		z-index: -2;
	}

	[data-hero]::after {
		filter: blur(2.5rem);
	}

	[data-hero] > div {
		background: url('/neon-robot.webp');
		background-size: cover;
		min-height: min(100vh, 560px);
		display: flex;
		align-items: center;
		text-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);
		border-bottom-left-radius: inherit;
		border-bottom-right-radius: inherit;
	}
	[data-hero] h1 {
		font-size: calc(28px + min(2.75vw, 56px));
		line-height: calc(28px + min(2.75vw, 56px));
	}
	[data-hero] a {
		text-shadow: none;
		display: inline-block;
		transition: 0.2s ease-in-out;
		padding: 16px calc(16px + max(30px, 2.5vw));
		font-size: calc(16px + min(1.125vw, 8px));
		box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);
	}
</style>

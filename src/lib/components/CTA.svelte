<script>
	import SectionHeader from './sections/SectionHeader.svelte';
</script>

<!-- <SectionHeader title="FREE COURSES" description="You can check out some of our free courses" /> -->

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-7xl text-center" data-cta>
			<h1
				class="text-5xl font-black tracking-tighter text-white antialiased dark:text-white lg:text-8xl"
			>
				<span>
					lets craft
					<div class="z-10 hidden rounded-xl bg-accent lg:inline-flex">
						<a href="#contact" class="px-6 py-4 text-xl font-light tracking-normal text-black"
							>Get help</a
						>
					</div>
				</span>
				<span>something great</span>
				<span>together</span>
			</h1>
			<a
				class="relative mt-6 rounded-full bg-accent p-2 text-xs font-light lg:hidden"
				href="#contact">Get help</a
			>
		</div>
	</div>
</div>

<style>
	[data-cta] {
		padding: 24px 0;
	}

	[data-cta] h1 {
		display: flex;
		flex-direction: column;
		font-size: calc(36px + 3.425vw);
		text-shadow: 3px 4px 6px rgba(0, 0, 0, 0.3);
	}

	[data-cta] h1 span:nth-child(1) {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
	}

	@media only screen and (max-width: 1023px) {
	[data-cta] > a {
		font-size: calc(16px + 0.325vw);
		display: inline-block;
		padding: 21px 34px;
	}
}
</style>


<div class="relative mx-auto max-w-7xl pt-10" id="hero">

	<div
		class="bg-opacity-50 bg-[url('/smokes.jpg')] bg-80% bg-center bg-no-repeat py-12 backdrop-opacity-20 sm:py-32 lg:bg-50% lg:pb-40"
	>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-7xl text-center">
				<h1
					class="text-5xl font-black tracking-tighter text-white antialiased dark:text-white lg:text-8xl"
				>
					<span>carry the world</span>
					<span>
						with our
						<div class="z-10 hidden rounded-xl bg-accent lg:inline-flex">
							<a href="#contact" class="px-6 py-4 text-xl font-light tracking-normal text-black"
								>Get help</a
							>
						</div>
					</span>
					<span>craftsmanship</span>
				</h1>
				<a
					class="relative mt-6 rounded-full bg-accent p-2 text-xs font-light lg:hidden"
					href="#contact">Get help</a
				>
			</div>
		</div>
	</div>
	<div
		class="absolute inset-x-0 top-[calc(100%-13rem)] -z-20 transform-gpu overflow-hidden blur-3xl dark:hidden sm:top-[calc(100%-30rem)]"
		aria-hidden="true"
	>
		<div
			class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#7209b7] to-[#7209b7] opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
			style="clip-path: 
	       polygon(
	       74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 
	       60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 
	       17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
</div>

<style>
	#hero {
		padding-top: 0;
	}

	#hero a {
		text-shadow: none;
	}
	
	#hero > div {
		min-height: 65vh;
		background-size:cover;
		display:flex;
		align-items:center;
		gap: 16px;
		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;
	}

	 #hero h1 {
		font-size: calc(36px + 3.425vw);
		text-shadow: 3px 4px 6px rgba(0, 0, 0, 0.3);
	 }

	 @media only screen and (max-width: 1023px) {
		#hero a {
			font-size: calc(16px + 1.125vw);
			display: inline-block;
			padding: 21px 54px;
		}
	 }

	 #hero h1 span:nth-child(2) {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: calc(16px + 0.25vw);
	 }

	 #hero h1 span:nth-child(2) a {
		font-size: calc(16px + 0.325vw);
		display: inline-block;
		padding: 21px 34px;
	 }
</style>

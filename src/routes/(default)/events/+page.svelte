<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
</script>

<section class="py-20 bg-surface-100-800-token">
	<Container>
		<div class="flex mb-20">
			<h2
				class="text-5xl text-center md:text-left md:text-6xl font-black w-full md:w-auto md:flex-none"
			>
				Portfolio <span class="text-primary-600">.</span>
			</h2>
			<span class="w-[60%] border-b-2 border-neutral-500 ms-5 hidden md:block"></span>
		</div>
		<div class="flex flex-col md:flex-row items-center justify-evenly">
			<!-- first card -->
			<div
				class="flex relative bg-primary-600 hover:bg-purple-800 w-1/3 border-neutral-500 border-[1px]"
			>
				<div
					class="flex flex-col relative right-5 bottom-5 bg-white w-full border-neutral-500 border-[1px]"
				>
					<div class="flex justify-center pt-9">
						<Icon icon="ri:calendar-line" class="text-2xl text-slate-900 me-3" />
						<div class="text-[#8C8C91] text-xl">HACKATHON</div>
					</div>
					<img
						src="https://picfiles.alphacoders.com/641/641913.png"
						alt="DaedalusImage"
						class="my-5 px-9"
					/>
					<div class="border-y-neutral-500 border-[1px] p-9 text-black">
						<h1 class="text-2xl font-bold">Daedalus Hackathon</h1>
						<p class="my-3">
							Join our high-energy hackathon on November 4, 2023, at 10:30 PM! Unleash your
							creativity, collaborate with fellow innovators, and create something amazing. Your
							presence is essential for this epic tech challenge. A roll call will be done. Don't
							miss out!
						</p>
					</div>
					<div class="flex justify-between text-slate-950">
						<div class="border-e-neutral-500 border-[1px] text-center w-1/2 py-4">NOVEMBER 4</div>
						<div class="border-e-neutral-500 text-center w-1/2 py-4">4PM MNL</div>
					</div>
				</div>
			</div>

			<!-- second card -->
			<div
				class="flex relative bg-primary-600 hover:bg-purple-800 w-1/3 border-neutral-500 border-[1px]"
			>
				<div
					class="flex flex-col relative right-5 bottom-5 bg-white w-full border-neutral-500 border-[1px]"
				>
					<div class="flex justify-center pt-9">
						<Icon icon="charm:graduate-cap" class="text-3xl text-slate-900 me-3" />
						<div class="text-[#8C8C91] text-xl">WEBINAR</div>
					</div>
					<img
						src="https://picfiles.alphacoders.com/641/641916.png"
						alt="DaedalusImage"
						class="my-5 px-9 h-44"
					/>
					<div class="border-y-neutral-500 border-[1px] p-9 text-black">
						<h1 class="text-2xl font-bold">Spring Boot MVC</h1>
						<p class="my-3">
							Join our high-energy hackathon on November 4, 2023, at 10:30 PM! Unleash your
							creativity, collaborate with fellow innovators, and create something amazing. Your
							presence is essential for this epic tech challenge. A roll call will be done. Don't
							miss out!
						</p>
					</div>
					<div class="flex justify-between text-slate-950">
						<div class="border-e-neutral-500 border-[1px] text-center w-1/2 py-4">NOVEMBER 6</div>
						<div class="border-e-neutral-500 text-center w-1/2 py-4">10PM MNL</div>
					</div>
				</div>
			</div>
		</div>
	</Container>
</section>

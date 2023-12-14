<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
</script>

<section class="bg-surface-100-800-token py-20">
	<Container>
		<div class="mb-20 flex">
			<h2
				class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
			>
				Projects <span class="text-primary-600">.</span>
			</h2>
			<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
		</div>
		<div class="flex flex-col items-center justify-evenly md:flex-row">
			<!-- first card -->
			<div
				class="relative flex w-1/3 border-[1px] border-neutral-500 bg-primary-600 hover:bg-purple-800"
			>
				<div
					class="relative bottom-5 right-5 flex w-full flex-col border-[1px] border-neutral-500 bg-white"
				>
					<div class="flex justify-center pt-9">
						<Icon icon="ri:calendar-line" class="me-3 text-2xl text-slate-900" />
						<div class="text-xl text-[#8C8C91]">HACKATHON</div>
					</div>
					<img
						src="https://picfiles.alphacoders.com/641/641913.png"
						alt="DaedalusImage"
						class="my-5 px-9"
					/>
					<div class="border-[1px] border-y-neutral-500 p-9 text-black">
						<h1 class="text-2xl font-bold">Daedalus Hackathon</h1>
						<p class="my-3">
							Join our high-energy hackathon on November 4, 2023, at 10:30 PM! Unleash your
							creativity, collaborate with fellow innovators, and create something amazing. Your
							presence is essential for this epic tech challenge. A roll call will be done. Don't
							miss out!
						</p>
					</div>
					<div class="flex justify-between text-slate-950">
						<div class="w-1/2 border-[1px] border-e-neutral-500 py-4 text-center">NOVEMBER 4</div>
						<div class="w-1/2 border-e-neutral-500 py-4 text-center">4PM MNL</div>
					</div>
				</div>
			</div>

			<!-- second card -->
			<div
				class="relative flex w-1/3 border-[1px] border-neutral-500 bg-primary-600 hover:bg-purple-800"
			>
				<div
					class="relative bottom-5 right-5 flex w-full flex-col border-[1px] border-neutral-500 bg-white"
				>
					<div class="flex justify-center pt-9">
						<Icon icon="charm:graduate-cap" class="me-3 text-3xl text-slate-900" />
						<div class="text-xl text-[#8C8C91]">WEBINAR</div>
					</div>
					<img
						src="https://picfiles.alphacoders.com/641/641916.png"
						alt="DaedalusImage"
						class="my-5 h-44 px-9"
					/>
					<div class="border-[1px] border-y-neutral-500 p-9 text-black">
						<h1 class="text-2xl font-bold">Spring Boot MVC</h1>
						<p class="my-3">
							Join our high-energy hackathon on November 4, 2023, at 10:30 PM! Unleash your
							creativity, collaborate with fellow innovators, and create something amazing. Your
							presence is essential for this epic tech challenge. A roll call will be done. Don't
							miss out!
						</p>
					</div>
					<div class="flex justify-between text-slate-950">
						<div class="w-1/2 border-[1px] border-e-neutral-500 py-4 text-center">NOVEMBER 6</div>
						<div class="w-1/2 border-e-neutral-500 py-4 text-center">10PM MNL</div>
					</div>
				</div>
			</div>
		</div>
	</Container>
</section>

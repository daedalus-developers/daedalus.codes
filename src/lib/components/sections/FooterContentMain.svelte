<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
</script>

<section class="relative bg-neutral-900 overflow-hidden z-10 text-white">
	<div
		class="absolute w-64 h-56 lg:w-96 lg:h-80 rounded-full right-0 top-32 bg-primary-800 filter blur-[150px] z-[-1]"
	></div>
	<div
		class="absolute w-60 h-52 lg:w-96 lg:h-80 rounded-full left-0 bottom-32 bg-secondary-800 filter blur-[150px] z-[-1]"
	></div>
	<Container addClass="py-20">
		<div class="flex flex-row">
			<div class="w-full flex flex-col gap-10 justify-center mb-10">
				<img
					src="daedalus-shadow.png"
					width="70px"
					height="70px"
					alt="daedalus-logo"
					class="block"
				/>
				<div>
					<p class="text-xs mb-3 uppercase">Get in touch</p>
					<p class="text-xl"><a href="mailto:daedalusdev@gmail.com">daedalusdev@gmail.com</a></p>
				</div>
				<div>
					<p class="text-xs mb-3 uppercase">Follow us</p>
					<div class="flex gap-5 text-3xl">
						<a
							href="/"
							target="_blank"
							class="rounded-full p-2 aspect-square flex items-center justify-center bg-white text-black"
						>
							<Icon icon="mdi:twitter" />
						</a>
						<a
							href="/"
							target="_blank"
							class="rounded-full p-2 aspect-square flex items-center justify-center bg-white text-black"
						>
							<Icon icon="bxl:facebook" />
						</a>
						<a
							href="/"
							target="_blank"
							class="rounded-full p-2 aspect-square flex items-center justify-center bg-white text-black"
						>
							<Icon icon="fontisto:linkedin" />
						</a>
						<a
							href="/"
							target="_blank"
							class="rounded-full p-2 aspect-square flex items-center justify-center bg-white text-black"
						>
							<Icon icon="ic:baseline-tiktok" />
						</a>
					</div>
				</div>
			</div>
			<div class="w-full flex flex-col gap-10 justify-center mb-10">
				<div>
					<p class="text-xs mb-3 uppercase">Our Office</p>
					<p class="text-xl">1234 Elm Street Makati Philippines 4021</p>
				</div>
			</div>
		</div>
	</Container>

	<div class="bg-[rgba(0,0,0,0.2)] py-10 flex items-center">
		<Container addClass="flex gap-10 items-center">
			<div class="w-full">&copy; 2023 All Rights Reserved.</div>

			<div class="w-full flex flex-wrap gap-5">
				<a href="/">Privacy Policy</a>
				<a href="/">Terms of Service</a>
				<a href="/">Cookies Privacy</a>
			</div>
		</Container>
	</div>
</section>

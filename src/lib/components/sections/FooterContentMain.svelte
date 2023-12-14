<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
</script>

<section class="relative z-10 overflow-hidden bg-neutral-900 text-white">
	<div
		class="absolute right-0 top-32 z-[-1] h-56 w-64 rounded-full bg-primary-800 blur-[150px] filter lg:h-80 lg:w-96"
	></div>
	<div
		class="absolute bottom-32 left-0 z-[-1] h-52 w-60 rounded-full bg-secondary-800 blur-[150px] filter lg:h-80 lg:w-96"
	></div>
	<Container addClass="py-20">
		<div class="flex flex-row">
			<div class="mb-10 flex w-full flex-col justify-center gap-10">
				<img
					src="daedalus-shadow.png"
					width="70px"
					height="70px"
					alt="daedalus-logo"
					class="block"
				/>
				<div>
					<p class="mb-3 text-xs uppercase">Get in touch</p>
					<p class="text-xl"><a href="mailto:daedalusdev@gmail.com">daedalusdev@gmail.com</a></p>
				</div>
				<div>
					<p class="mb-3 text-xs uppercase">Follow us</p>
					<div class="flex gap-5 text-3xl">
						<a
							href="/"
							target="_blank"
							class="flex aspect-square items-center justify-center rounded-full bg-white p-2 text-black"
						>
							<Icon icon="mdi:twitter" />
						</a>
						<a
							href="/"
							target="_blank"
							class="flex aspect-square items-center justify-center rounded-full bg-white p-2 text-black"
						>
							<Icon icon="bxl:facebook" />
						</a>
						<a
							href="/"
							target="_blank"
							class="flex aspect-square items-center justify-center rounded-full bg-white p-2 text-black"
						>
							<Icon icon="fontisto:linkedin" />
						</a>
						<a
							href="/"
							target="_blank"
							class="flex aspect-square items-center justify-center rounded-full bg-white p-2 text-black"
						>
							<Icon icon="ic:baseline-tiktok" />
						</a>
					</div>
				</div>
			</div>
			<div class="mb-10 flex w-full flex-col justify-center gap-10">
				<div>
					<p class="mb-3 text-xs uppercase">Our Office</p>
					<p class="text-xl">1234 Elm Street Makati Philippines 4021</p>
				</div>
			</div>
		</div>
	</Container>

	<div class="flex items-center bg-[rgba(0,0,0,0.2)] py-10">
		<Container addClass="flex gap-10 items-center">
			<div class="w-full">&copy; 2023 All Rights Reserved.</div>

			<div class="flex w-full flex-wrap gap-5">
				<a href="/">Privacy Policy</a>
				<a href="/">Terms of Service</a>
				<a href="/">Cookies Privacy</a>
			</div>
		</Container>
	</div>
</section>

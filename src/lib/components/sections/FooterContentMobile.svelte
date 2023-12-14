<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
</script>

<section class="relative z-10 overflow-hidden bg-neutral-900 py-20 text-white">
	<div
		class="absolute right-0 top-32 z-[-1] h-56 w-64 rounded-full bg-primary-800 blur-[150px] filter lg:h-80 lg:w-96"
	></div>
	<div
		class="absolute bottom-32 left-0 z-[-1] h-52 w-60 rounded-full bg-secondary-800 blur-[150px] filter lg:h-80 lg:w-96"
	></div>
	<Container addClass="flex flex-col items-center gap-5">
		<img src="daedalus-shadow.png" width="70px" height="70px" alt="daedalus-logo" />

		<p class="text-lg"><a href="mailto:daedalusdev@gmail.com">daedalusdev@gmail.com</a></p>

		<div class="flex flex-col items-center gap-5">
			<a href="/">Privacy Policy</a>
			<a href="/">Terms of Service</a>
			<a href="/">Cookies Privacy</a>
		</div>

		<div class="text-md flex gap-5">
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
		<p>&copy; 2023 All Rights Reserved.</p>
	</Container>
</section>

<script lang="ts">
	import { Container } from '@components/utilities';
	import Icon from '@iconify/svelte';
</script>

<section class="relative bg-neutral-900 overflow-hidden z-10 text-white py-20">
	<div
		class="absolute w-64 h-56 lg:w-96 lg:h-80 rounded-full right-0 top-32 bg-primary-800 filter blur-[150px] z-[-1]"
	></div>
	<div
		class="absolute w-60 h-52 lg:w-96 lg:h-80 rounded-full left-0 bottom-32 bg-secondary-800 filter blur-[150px] z-[-1]"
	></div>
	<Container addClass="flex flex-col items-center gap-5">
		<img src="daedalus-shadow.png" width="70px" height="70px" alt="daedalus-logo" />

		<p class="text-lg"><a href="mailto:daedalusdev@gmail.com">daedalusdev@gmail.com</a></p>

		<div class="flex flex-col items-center gap-5">
			<a href="/">Privacy Policy</a>
			<a href="/">Terms of Service</a>
			<a href="/">Cookies Privacy</a>
		</div>

		<div class="flex gap-5 text-md">
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
		<p>&copy; 2023 All Rights Reserved.</p>
	</Container>
</section>

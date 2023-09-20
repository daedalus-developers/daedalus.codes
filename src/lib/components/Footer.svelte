<script lang="ts">
	import Icon from '@iconify/svelte';

	const links: { text: string; link: string }[] = [
		{ text: 'privacy policy', link: '/about#privacy' },
		{ text: 'disclaimer', link: '/about#disclaimer' },
		{ text: 'terms and condition', link: '/about#terms' }
	];
</script>

<div class="relative mx-auto">
	<div class="bg-[#8d62ef]">
		<footer class="mx-auto max-w-7xl lg:pt-12" aria-labelledby="footer-heading">
			<div class="flex flex-col py-10 lg:flex-row">
				<div class="flex flex-col items-center justify-center lg:basis-1/2">
					<div>
						<p class="mb-[-10px] text-start text-xs font-bold tracking-tight text-white">
							STAY UP TO DATE
						</p>
						<p class="text-7xl font-black tracking-tight text-zinc-900">get our</p>
						<p class="text-7xl font-black tracking-tight text-zinc-900">infographics</p>
						<div class="flex pt-4">
							<input
								class="form-input w-3/4 appearance-none border-b-black border-l-transparent
                border-r-transparent border-t-transparent bg-transparent
                p-0 outline-none placeholder:text-white focus:border-none focus:border-transparent focus:outline-none"
								type="email"
								placeholder="Your Email"
							/>
							<button class="mx-auto rounded-full bg-white">
								<Icon icon="tabler:arrow-right" width="44" height="44" />
							</button>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-center lg:basis-1/2">
					<div>
						<p class="text-md text-start font-bold tracking-tight text-white">GET IN TOUCH</p>
						<p class="text-4xl font-light text-zinc-900">contact@daedalus.codes</p>
						<p class="text-4xl font-light text-zinc-900">(+63)9123456789</p>
						<p class="pt-10 text-4xl font-light text-zinc-900">Philippines 🇵🇭</p>
					</div>
				</div>
			</div>
			<div class="flex flex-col border-t border-t-black lg:flex-row">
				<div class="mx-auto basis-1/2 py-10">
					<ul class="mx-auto text-center text-sm text-slate-900 lg:inline-flex">
						{#each links as link}
							<li class="py-2 uppercase lg:mx-10 lg:py-0">
								<a href={link.link}>{` ${link.text} `} </a>
							</li>
						{/each}
					</ul>
				</div>
				<div class="mx-auto flex max-w-7xl flex-col justify-between py-10 lg:basis-1/2 lg:flex-row">
					<div class="mx-auto flex flex-col lg:basis-1/2 lg:flex-row lg:justify-between lg:py-0">
						<p class="py-2 text-sm uppercase text-slate-900 lg:py-0">see what we're up to</p>
						<ul class="mx-auto inline-flex space-x-4">
							<li>
								<a href="https://www.facebook.com/daedalusdev">
									<Icon icon="simple-icons:facebook" color="white" />
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/daedalusdev">
									<Icon icon="simple-icons:tiktok" color="white" />
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/daedalusdev">
									<Icon icon="simple-icons:x" color="white" />
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/daedalusdev">
									<Icon icon="simple-icons:linkedin" color="white" />
								</a>
							</li>
						</ul>
					</div>
					<p class="py-10 text-sm text-slate-900 lg:py-0">© 2023 Daedalus. All rights reserved.</p>
				</div>
			</div>
		</footer>
	</div>
</div>
<div class="bg-[#8d62ef]">
	<p class="text-center text-xl font-extralight text-slate-900">Made with 🪄 by Daedalus Team</p>
</div>

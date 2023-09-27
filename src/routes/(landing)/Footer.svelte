<script lang="ts">
	import Icon from '@iconify/svelte';
	import { footerLinks as links } from '$lib/data/links';
	let emailInput: string = '';
	const handleSubscribeInfographics = () => {
		alert(emailInput);
	};
</script>

<div class="mx-auto bg-secondary">
	<footer class="mx-auto max-w-7xl lg:pt-12" aria-labelledby="footer-heading">
		<div class="flex flex-col items-center py-10 pb-20 lg:flex-row">
			<div class="flex items-center justify-center lg:basis-1/2">
				<div>
					<p
						class="mb-[-10px] text-start text-xs font-bold tracking-tight text-white"
					>
						STAY UP TO DATE
					</p>
					<p
						class="text-5xl font-black tracking-tight text-zinc-900 lg:text-7xl"
					>
						get our
					</p>
					<p
						class="text-5xl font-black tracking-tight text-zinc-900 lg:text-7xl"
					>
						infographics
					</p>
					<div class="flex pt-4 text-black">
						<form
							on:submit|preventDefault={handleSubscribeInfographics}
							class="flex grow"
						>
							<input
								class="form-input w-3/4 appearance-none border-b-black border-l-transparent
                border-r-transparent border-t-transparent bg-transparent
                p-0 outline-none placeholder:text-white focus:border-none focus:border-transparent focus:outline-none"
								type="email"
								placeholder="Your Email"
								required
								bind:value={emailInput}
							/>
							<button
								type="submit"
								class="tex-black mx-auto rounded-full bg-white hover:bg-primary"
							>
								<Icon
									icon="prime:send"
									color="#1d1d1d"
									class="pr-1 pt-1 text-4xl lg:text-5xl"
								/>
							</button>
						</form>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-center pt-10 lg:basis-1/2">
				<div>
					<p class="text-md text-start font-bold tracking-tight text-white">
						GET IN TOUCH
					</p>
					<p class="text-2xl font-light text-zinc-900 lg:text-4xl">
						daedalusdevph@gmail.com
					</p>
					<p class="text-2xl font-light text-zinc-900 lg:text-4xl">
						(+63) 9564261438
					</p>
					<p
						class="inline-flex justify-items-center pt-10 text-4xl font-light text-zinc-900"
					>
						Philippines
						<Icon icon="emojione-v1:flag-for-philippines" class="ml-4 mt-1" />
					</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col border-t border-t-black lg:flex-row">
			<!-- unused  -->
			<!-- <div class="mx-auto basis-1/2 py-10">
				<ul class="mx-auto text-center text-sm text-slate-900 lg:inline-flex">
					{#each links as link}
						<li class="py-2 uppercase lg:mx-10 lg:py-0">
							<a href={link.link}>{` ${link.text} `} </a>
						</li>
					{/each}
				</ul>
			</div> -->
			<div
				class="mx-auto flex max-w-7xl flex-col justify-between py-10 lg:basis-3/4 lg:flex-row"
			>
				<div
					class="mx-auto flex flex-col lg:basis-2/4 lg:flex-row lg:justify-between lg:py-0"
				>
					<p class=" py-2 text-sm uppercase text-slate-900 lg:py-0">
						see what we're up to
					</p>
					<ul class="mx-auto inline-flex space-x-4">
						<li>
							<a href="https://www.facebook.com/daedalusdev" target="_blank">
								<Icon icon="simple-icons:facebook" color="white" />
							</a>
						</li>
						<li>
							<a href="https://www.tiktok.com/@daedalusdev" target="_blank">
								<Icon icon="simple-icons:tiktok" color="white" />
							</a>
						</li>
						<li>
							<a href="https://twitter.com/DaedalusDevPH" target="_blank">
								<Icon icon="simple-icons:x" color="white" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/company/daedalusdev"
								target="_blank"
							>
								<Icon icon="simple-icons:linkedin" color="white" />
							</a>
						</li>
						<li>
							<a
								href="https://www.youtube.com/@DaedalusDevelopers"
								target="_blank"
							>
								<Icon
									icon="simple-icons:youtube"
									width="25"
									height="25"
									color="white"
								/>
							</a>
						</li>
						<li>
							<a href="https://discord.gg/daedalusdev" target="_blank">
								<Icon
									icon="simple-icons:discord"
									width="25"
									height="25"
									color="white"
								/>
							</a>
						</li>
					</ul>
				</div>
				<p class="py-10 text-sm text-slate-900 lg:py-0">
					© 2023 Daedalus. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>

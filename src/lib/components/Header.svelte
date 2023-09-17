<script lang="ts">
	import ToggleTheme from './utils/ToggleTheme.svelte';
	const links: { text: string; link: string }[] = [
		{
			text: 'Home',
			link: '/'
		},
		{
			text: 'Projects',
			link: '/projects'
		},
		{
			text: 'Courses',
			link: '/courses'
		},
		{
			text: 'Events',
			link: '/events'
		},
		{
			text: 'About us',
			link: '/about'
		}
	];
</script>

<header class="bg-daedalusLight dark:bg-daedalusDark pt-2">
	<div class="max-w-7xl border-2 rounded-full dark:border-accent border-primary">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Daedalus</span>
				<span class="h-8 w-auto font-black text-2xl dark:text-white text-black"
					>Daedal<span class="text-accent dark:text-primary font-black">us</span></span
				>
			</a>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				{#each links as link}
					<a
						href={link.link}
						class="text-sm font-light leading-6 text-gray-900 dark:text-white hover:text-secondary"
						>{link.text}</a
					>
				{/each}

				<a
					href="/login"
					class="text-sm font-light leading-6 text-gray-900 dark:text-white hover:text-secondary"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
				<ToggleTheme />
			</div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10" />
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Daedalus</span>

						<span class="h-8 w-auto font-black text-2xl dark:text-white text-black"
							>Daedal<span class="text-accent dark:text-primary font-black">us</span></span
						>
					</a>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each links as link}
								<a
									href={link.link}
									class="-mx-3 block rounded-lg px-3 py-2.5 font-semibold text-center leading-7 text-gray-900 dark:text-white hover:text-secondary"
									>{link.text}</a
								>
							{/each}
						</div>
						<div class="py-6">
							<a
								href="/register"
								class="-mx-3 text-center block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Sign up</a
							>
							<a
								href="/Login"
								class="-mx-3 text-center block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Login</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>

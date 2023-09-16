<script lang="ts">
	import ToggleTheme from './ToggleTheme.svelte';
	const links: { text: string; link: string }[] = [
		{
			text: 'Home',
			link: '/'
		},
		{
			text: 'Courses',
			link: '/projects'
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

<div class="">
	<header class="bg-daedalusLight text-gray-900 dark:bg-daedalusDark dark:text-white">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Daedalus</span>
					<span class="font-bold text-2xl dark:text-white text-black"
						>Daedal<span class="text-accent dark:text-primary">us</span></span
					>
				</a>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				{#each links as link}
					<a href={link.link} class="text-md font-light leading-6 hover:text-secondary"
						>{link.text}</a
					>
				{/each}
			</div>
			<div class="flex flex-1 items-center justify-end gap-x-6">
				<a
					href="/register"
					class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-secondary dark:text-blue-100"
					>Register</a
				>
				<ToggleTheme />
			</div>
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
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10" />
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center gap-x-6">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Daedalus</span>
						<span class="font-bold text-2xl dark:text-white text-black"
							>Daedal<span class="text-accent dark:text-primary">us</span></span
						>
					</a>
					<a
						href="/register"
						class="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Sign up</a
					>
					<ToggleTheme />
					<button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" />
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
								<a href={link.link} class="text-md font-light leading-6">{link.text}</a>

								<a
									href="link.link"
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>{link.text}</a
								>
							{/each}
						</div>
						<div class="py-6">
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Log in</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</div>

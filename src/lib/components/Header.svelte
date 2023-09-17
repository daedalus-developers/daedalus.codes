<script lang="ts">
	import CloseIcon from './icons/CloseIcon.svelte';
	import HamburgerIcon from './icons/HamburgerIcon.svelte';
	import ToggleTheme from './utils/ToggleTheme.svelte';
	import { page } from '$app/stores';

	let hidden = true;

	const links: { text: string; link: string }[] = [
		{
			text: 'Home',
			link: ''
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

<!-- NOTE: https://www.braydoncoyer.dev/blog/build-a-glassmorphic-navbar-with-tailwindcss-backdrop-filter-and-backdrop-blur -->
<div
	class="lg:pt-2 lg:sticky lg:top-0 lg:z-10 lg:backdrop-filter lg:backdrop-blur-md lg:bg-opacity-90 lg:firefox:bg-opacity-90"
>
	<header class="lg:pt-2 mx-auto justify-center">
		<div>
			<nav
				class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8
         lg:border lg:border-gray-800 lg:rounded bg-gray-600 bg-opacity-5 backdrop-filter"
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
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-white text-gray-500 lg:hidden"
						on:click={() => (hidden = !hidden)}
					>
						<span class="sr-only">Open main menu</span>
						<HamburgerIcon />
					</button>
				</div>
				<div class="hidden lg:flex lg:gap-x-8">
					{#each links as link}
						<a
							href={link.link}
							class="active:text-primary text-sm font-light leading-6
              text-gray-900 dark:text-white
              hover:text-secondary dark:hover:text-secondary"
							class:active={$page.url.pathname === link.link}>{link.text}</a
						>
					{/each}
					<a
						href="/login"
						class="text-sm font-light leading-6 text-gray-900 dark:text-white
              hover:text-secondary dark:hover:text-secondary"
						>Log in <span aria-hidden="true">&rarr;</span></a
					>
					<ToggleTheme />
				</div>
			</nav>
		</div>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" {hidden} role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-15 backdrop-blur-md backdrop-filter bg-opacity-25" {hidden} />
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Daedalus</span>
						<span class="h-8 w-auto font-black text-2xl dark:text-white text-black"
							>Daedal<span class="text-accent dark:text-primary font-black">us</span></span
						>
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-slate-900"
						on:click={() => (hidden = !hidden)}
					>
						<span class="sr-only">Close menu</span>
						<CloseIcon />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each links as link}
								<a
									href={link.link}
									class="active:text-primary -mx-3 block rounded-lg px-3 py-1 font-semibold text-center leading-5 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:text-black"
									class:active={$page.url.pathname === link.link}>{link.text}</a
								>
							{/each}
							<ToggleTheme />
						</div>
						<div class="py-6">
							<a
								href="/register"
								class="-mx-3 text-center block rounded-lg px-3 py-1 text-base font-semibold leading-5 text-gray-900 dark:text-white hover:bg-gray-50"
								>Sign up</a
							>
							<a
								href="/Login"
								class="-mx-3 text-center block rounded-lg px-3 py-1 text-base font-semibold leading-5 text-gray-900 dark:text-white hover:bg-gray-50"
								>Login</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</div>

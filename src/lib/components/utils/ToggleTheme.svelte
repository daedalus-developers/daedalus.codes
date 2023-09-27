<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';
	let darkMode = true;
	export let mobile = false;
	function handleSwitchDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<!-- <label class="relative inline-flex items-center cursor-pointer"> -->
{#if mobile}
	<label class="flex w-full cursor-pointer justify-center">
		<input
			type="checkbox"
			value={darkMode}
			id="theme-toggle"
			on:click={handleSwitchDarkMode}
			class="peer sr-only"
		/>
		<span
			class="-mx-3 inline-flex items-center rounded-lg px-3 py-1 text-center text-base font-semibold leading-5 text-gray-900 hover:bg-gray-50 dark:text-white hover:dark:text-black"
			class:hidden={!darkMode}
		>
			<Icon icon="flat-color-icons:flash-on" class="text-2xl " />

			Turn off Dark mode
		</span>
		<span
			class="-mx-3 inline-flex items-center rounded-lg px-3 py-1 text-center text-base font-semibold leading-5 text-white hover:bg-gray-50 hover:text-black dark:text-white hover:dark:text-black"
			class:hidden={darkMode}
		>
			<Icon icon="flat-color-icons:flash-off" class="text-2xl" />
			Turn on Dark mode
		</span>
	</label>
{:else}
	<label class="cursor-pointer">
		<input
			type="checkbox"
			value={darkMode}
			id="theme-toggle"
			on:click={handleSwitchDarkMode}
			class="peer sr-only"
		/>
		<span class:hidden={!darkMode}>
			<Icon icon="flat-color-icons:flash-on" class="text-2xl" />
		</span>
		<span class:hidden={darkMode}>
			<Icon icon="flat-color-icons:flash-off" class="text-2xl" />
		</span>
	</label>
{/if}

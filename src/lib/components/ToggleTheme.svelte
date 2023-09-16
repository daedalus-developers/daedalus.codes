<script lang="ts">
	import { browser } from '$app/environment';
	import Moon from './icons/Moon.svelte';
	import Sun from './icons/Sun.svelte';
	let darkMode = true;
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
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<label class="relative inline-flex items-center cursor-pointer">
	<input
		type="checkbox"
		value={darkMode}
		id="theme-toggle"
		on:click={handleSwitchDarkMode}
		class="sr-only peer"
	/>
	<span class:hidden={!darkMode}>
		<Moon iconClass="h3 w3 text-yellow-500" />
	</span>
	<span class:hidden={darkMode}>
		<Sun iconClass="h3 w3 text-gray-900" />
	</span>
</label>

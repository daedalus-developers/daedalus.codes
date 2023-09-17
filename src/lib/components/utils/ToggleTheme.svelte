<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from '@iconify/svelte';
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

<!-- <label class="relative inline-flex items-center cursor-pointer"> -->
<label class="cursor-pointer">
	<input
		type="checkbox"
		value={darkMode}
		id="theme-toggle"
		on:click={handleSwitchDarkMode}
		class="sr-only peer"
	/>
	<span class:hidden={!darkMode}>
		<Icon icon="flat-color-icons:flash-on" class="text-2xl" />
	</span>
	<span class:hidden={darkMode}>
		<Icon icon="flat-color-icons:flash-off" class="text-2xl" />
	</span>
</label>

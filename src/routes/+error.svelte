<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { NotFound } from '@components';

	onMount(() => {
		setTimeout(() => {
			window.history.back();
		}, 2000);
	});
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<h1 class="py-10 text-2xl font-bold">
		<span class="text-error-500">{$page.status}</span>: {$page?.error?.message}
	</h1>
	<a href="/">
		<NotFound width={600} height={400} />
	</a>
</div>

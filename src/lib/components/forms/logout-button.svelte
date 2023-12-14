<script>
	import Icon from '@iconify/svelte';
</script>

<form method="POST" action="/api/actions/auth?/logout">
	<button
		type="submit"
		class="flex w-full items-center gap-1 rounded-none p-3 text-neutral-300 hover:variant-filled"
	>
		<Icon icon="mdi:logout" />
		Logout
	</button>
</form>

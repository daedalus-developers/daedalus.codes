<script>
	import Icon from '@iconify/svelte';
</script>

<form method="POST" action="/api/actions/auth?/logout">
	<button type="submit" class="flex items-center gap-1 p-2 hover:variant-ghost w-full">
		<Icon icon="mdi:logout" height="18" />
		Logout
	</button>
</form>

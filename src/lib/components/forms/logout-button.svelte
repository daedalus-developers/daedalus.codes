<script>
	import Icon from '@iconify/svelte';
</script>

<form method="POST" action="/api/auth/logout">
	<button type="submit" class="flex">
		<Icon icon="mdi:logout" height="24" />
		Logout
	</button>
</form>

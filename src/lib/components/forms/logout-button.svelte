<script>
	import Icon from '@iconify/svelte';
</script>

<form 
	method="POST" 
	action="/api/actions/auth?/logout">
	<button 
		type="submit" 
		class="flex gap-1 items-center w-full text-neutral-300 p-3 rounded-none hover:variant-filled">
		<Icon icon="mdi:logout" />
		Logout
	</button>
</form>

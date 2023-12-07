<script lang="ts">
	export let addClass: string = '';
</script>

<div class="{addClass} w-full max-w-[1366px] mx-auto px-5 md:px-2 lg:px-5">
	<slot />
</div>

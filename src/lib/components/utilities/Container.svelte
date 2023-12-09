<script lang="ts">
	export let addClass: string = '';
</script>

<div class="{addClass} w-full max-w-[1366px] mx-auto px-5 sm:px-10 lg:px-20">
	<slot />
</div>

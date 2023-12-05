<script lang="ts">
	export let addClass: string = '';
</script>

<div class="{addClass} w-full max-w-[1600px] mx-auto px-2">
	<slot />
</div>

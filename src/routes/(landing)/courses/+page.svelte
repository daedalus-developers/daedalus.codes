<script lang="ts">
	import StackChoice from '$lib/components/coursePath/StackChoice.svelte';
	let frontEndUrl = '/courses/frontend';
	let backEndUrl = '/courses/backend';
</script>

<StackChoice {frontEndUrl} {backEndUrl} />

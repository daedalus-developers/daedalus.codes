<script lang="ts">
	import { queryParam, ssp } from 'sveltekit-search-params';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const filter = queryParam('limit', ssp.number(10));
</script>

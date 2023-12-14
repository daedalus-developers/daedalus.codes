<script lang="ts">
	import { queryParam, ssp } from 'sveltekit-search-params';
	import { page } from '$app/stores';

	const filter = queryParam('limit', ssp.number(10));
</script>

<script lang="ts">
	import { RegisterForm } from '@components';
	import { ASSET_URL } from '@utils';
</script>

<svelte:head>
	<title>Daedalus - Register</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Daedalus - Register" />
	<meta
		property="og:description"
		content={`We build digital solutions that are both beautiful, functional, efficient and user-friendly.
				We aim to inspire through our work, leaving a lasting impression on your users.`}
	/>
	<meta property="og:image" content={ASSET_URL + 'daedalus.png'} />
</svelte:head>

<RegisterForm />

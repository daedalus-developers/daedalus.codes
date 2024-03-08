<script lang="ts">
	import { RegisterForm } from '@components';
	import { ASSET_URL } from '@utils';
	import Icon from '@iconify/svelte';
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



<section class="h-screen w-screen">
	<div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
		<div class="bg-surface-100-800-token hidden lg:flex items-center justify-center 
			bg-gradient-to-br from-primary-700 to-secondary-700 order-2">
			<div class="text-center space-y-5 text-white">
				<img src={`${ASSET_URL}logo.png`} alt="Daedalus Logo" class="block mx-auto" />
				<h1 class="h1"><span class="font-extrabold">Daedalus</span> Dev</h1>
			</div>
		</div>
		<div class="h-full flex flex-col justify-center relative pt-20 pb-12 px-4">
			
			<div class="px-2 py-3 absolute top-0 left-0 w-full items-center justify-between borderX">
				<a href="/" class="flex items-center lg:hidden">
					<img src={`${ASSET_URL}logo.png`} alt="Daedalus Logo" class="w-12" />
					<span><span class="font-bold">Daedalus</span> Dev</span>
				</a>

				<a href="/" class="hidden lg:flex items-center gap-2">
					<Icon icon="material-symbols:arrow-back" class="text-2xl" />
					<span>Return</span>
				</a>
			</div>
			
			<div class="w-full max-w-[577px] mx-auto">
				<h2 class="h2 font-bold text-center mb-10">Register</h2>

				<RegisterForm />
			</div>

		</div>
	</div>
</section>
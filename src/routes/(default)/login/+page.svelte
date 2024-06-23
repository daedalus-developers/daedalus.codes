<script lang="ts">
	import Icon from '@iconify/svelte';
	import { LoginForm } from '@components';
	import OAuthLogin from './OAuthLogin.svelte';
	import { ASSET_URL } from '@utils';

	const { data } = $props();
	const providers = data.authProviders;
</script>

<section class="h-screen w-screen">
	<div class="grid min-h-screen grid-cols-1 lg:grid-cols-2">
		<div
			class="bg-surface-100-800-token hidden items-center justify-center bg-gradient-to-br
			from-primary-700 to-secondary-700 lg:flex"
		>
			<div class="space-y-5 text-center text-white">
				<img src={`${ASSET_URL}logo.png`} alt="Daedalus Logo" class="mx-auto block" />
				<h1 class="h1"><span class="font-extrabold">Daedalus</span> Dev</h1>
			</div>
		</div>
		<div class="relative flex h-full flex-col justify-center px-4 pb-12 pt-20">
			<div class="borderX absolute left-0 top-0 w-full items-center justify-between px-2 py-3">
				<a href="/" class="flex items-center lg:hidden">
					<img src={`${ASSET_URL}logo.png`} alt="Daedalus Logo" class="w-12" />
					<span><span class="font-bold">Daedalus</span> Dev</span>
				</a>

				<a href="/" class="hidden items-center gap-2 lg:flex">
					<Icon icon="material-symbols:arrow-back" class="text-2xl" />
					<span>Return</span>
				</a>
			</div>

			<div class="mx-auto w-full max-w-[460px]">
				{#if providers.length > 0}
					<OAuthLogin />

					<div class="flex items-center gap-2 py-10 opacity-50">
						<span class="flex-1 border"></span>
						<span class="flex-none">or continue with email</span>
						<span class="flex-1 border"></span>
					</div>
				{/if}

				<LoginForm />
			</div>
		</div>
	</div>
</section>

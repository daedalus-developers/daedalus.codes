<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	const providers = $page.data.authProviders;
	const providerThemeColors = [
		{
			name: 'google',
			bgColor: '#e44432',
			textColor: '#ffffff'
		},
		{
			name: 'facebook',
			bgColor: '#106aff',
			textColor: '#ffffff'
		},
		{
			name: 'discord',
			bgColor: '#566af6',
			textColor: '#ffffff'
		}
	];
</script>

{#if providers}
	<div class="flex items-center justify-center gap-1 opacity-50">
		<span class="flex-none">Continue with:</span>
	</div>

	<div
		class="flex flex-wrap justify-center gap-2 pb-10 pt-5
  "
	>
		<!-- <pre>{JSON.stringify(providers, null, 2)}</pre> -->
		{#each providers as provider}
			{@const theme = providerThemeColors.find((t) => t.name === provider.name)}
			<form
				method="POST"
				action="/api/actions/auth?/oauth"
				class="
        {providers.length === 1 ? 'w-full' : ''}
        {providers.length === 2 ? 'w-[calc(50%-0.5rem)]' : ''}
        {providers.length === 3 ? 'w-[calc(33.33%-0.5rem)]' : ''}
      "
			>
				<input type="text" name="target" value={provider.name} style="display:none;" />
				<button
					title="Login with {provider.displayName}"
					class="variant-filled btn w-full gap-x-2 rounded-none"
					style={theme ? `background-color: ${theme.bgColor}; color: ${theme.textColor};` : ''}
				>
					<Icon icon="mdi:{provider.name}" class={providers.length > 3 ? 'text-2xl' : 'text-lg'} />

					{#if providers?.length < 4}
						<span>{provider.displayName}</span>
					{/if}
				</button>
			</form>
		{/each}
	</div>
{/if}

<script lang="ts">
	import { sx } from '@utils';
	import type { InputConstraint } from 'sveltekit-superforms';

	export let value: string;
	export let label: string | undefined = undefined;
	export let link: string | undefined = undefined;
	export let description: string | undefined = undefined;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let errors: string[] | any | undefined = undefined;
	export let constraints: InputConstraint | undefined = undefined;
	// export let tainted: unknown | undefined = undefined;
</script>

<p>{label}</p>
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
	<div class="input-group-shim">{link}</div>
	<input
		class={sx(errors ? 'input-error' : '')}
		type="text"
		bind:value
		placeholder="username"
		aria-invalid={errors ? 'true' : undefined}
		{...constraints}
		{...$$restProps}
	/>
</div>

{#if errors}
	{#each errors as error}
		<p class="text-error-500">{error}</p>
	{/each}
{/if}
{#if description && !errors}
	<span class="text-sm text-tertiary-700">{description}</span>
{/if}

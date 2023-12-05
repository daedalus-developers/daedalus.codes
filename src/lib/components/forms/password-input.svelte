<script lang="ts">
	import { sx } from '@utils';
	import type { InputConstraint } from 'sveltekit-superforms';

	export let value: string;
	export let label: string | undefined = undefined;
	export let description: string | undefined = undefined;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let errors: string[] | any | undefined = undefined;
	export let constraints: InputConstraint | undefined = undefined;
</script>

<label class="label">
	{#if label}<span>{label}</span><br />{/if}
	<input
		class={sx('input-bordered input w-full', errors ? 'input-error' : '')}
		type="password"
		bind:value
		aria-invalid={errors ? 'true' : undefined}
		{...constraints}
		{...$$restProps}
	/>
</label>

{#if errors}
	<span class="text-error-500">{errors}</span>
{/if}
{#if description && !errors}
	<span class="text-sm text-tertiary-700">{description}</span>
{/if}

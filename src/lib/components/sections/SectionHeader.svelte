<script lang="ts">
	export let title: string = 'Please Provide title',
		description: string = 'Please provide Description';
	const getLastTwoWords = (str: string): string =>
		str.split(' ').slice(-2).join(' ');
	const stripLastTwoWords = (str: string): string =>
		str.split(' ').slice(0, -2).join(' ');
</script>

<div class="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
	<div class="mx-auto flex flex-row justify-center text-center dark:text-white">
		<h2
			class="basis-1/4 text-left text-xs font-bold tracking-tight text-secondary lg:text-sm"
		>
			{title}
		</h2>
		<p
			class="basis-3/4 text-left text-lg font-semibold tracking-tight text-gray-900 dark:text-white lg:text-5xl"
		>
			{stripLastTwoWords(description)}
			<span class="flex text-right text-accent">
				{getLastTwoWords(description)}</span
			>
		</p>
	</div>
</div>

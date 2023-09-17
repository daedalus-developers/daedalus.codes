<script lang="ts">
	export let title: string = 'Please Provide title',
		description: string = 'Please provide Description';
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
			{title}
		</h2>
		<p class="mt-2 text-lg leading-8 text-gray-600 dark:text-white">
			{description}
		</p>
	</div>
</div>

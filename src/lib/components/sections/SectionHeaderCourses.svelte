<script lang="ts">
	export let title: string = 'Please Provide title',
		description: string = 'Please provide Description';
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto max-w-2xl text-center flex border-2 border-indigo-500">
		<h2 class="text-xm  tracking-tight text-gray-900 dark:text-white ">
			{title}
		</h2>
		<p class="mt-2 text-lg font-bold leading-8 text-gray-600 dark:text-white">
			{description}
		</p>
	</div>
</div>

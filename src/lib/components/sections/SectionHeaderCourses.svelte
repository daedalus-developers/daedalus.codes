<script lang="ts">
	export let title: string = 'Please Provide title',
		description: string = 'Please provide Description';
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto flex justify-center text-center dark:text-white">
		<h2
			class="basis-1/4 text-left text-sm font-bold tracking-tight
			text-[#8D62EF]"
		>
			{title}
		</h2>
		<p
			class=" text-left text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
		>
			{@html description}
		</p>
	</div>
</div>

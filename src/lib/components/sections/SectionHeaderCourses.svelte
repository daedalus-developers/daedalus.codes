<script lang="ts">
	export let title: string = 'Please Provide title',
		description: string = 'Please provide Description';
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto text-center flex justify-center dark:text-white">
		<h2

			class="text-sm font-bold basis-1/4 text-left tracking-tight
			text-[#8D62EF]"
		>
			{title}
		</h2>
		<p class=" font-bold text-left tracking-tight text-gray-900 text-4xl dark:text-white">
			{@html description}
		</p>
	</div>
</div>

<script lang="ts">
	export let title: string = 'Please Provide title',
		description: string = 'Please provide Description';
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto text-center flex justify-center ">
		<h2 style='color:#8D62EF;'
			class="text-sm font-bold basis-1/4 text-left tracking-tight
			 dark:text-white  "
		>
			{title}
		</h2>
		<p
			class="font-bold text-left tracking-tight text-gray-900 text-4xl dark:text-white  "
		>
			{@html description}
			
		</p>
		
	</div>
</div>


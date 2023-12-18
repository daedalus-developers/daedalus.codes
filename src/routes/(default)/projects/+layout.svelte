<script>
	import { Container } from '@components/utilities';
</script>

<section class="bg-transparent py-10 dark:bg-surface-300-600-token">
	<Container>
		<div class="mx-auto min-h-screen max-w-[95%]">
			<div class="flex py-4">
				<h2
					class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
				>
					<a href="/projects">
						Projects <span class="text-primary-600">.</span>
					</a>
				</h2>
				<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
			</div>
			<slot />
		</div>
	</Container>
</section>

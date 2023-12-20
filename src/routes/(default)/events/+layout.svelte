<script lang="ts">
	import { Container } from '@components/utilities';
</script>

<section>
	<Container>
		<div class="mx-auto min-h-screen">
			<div class="flex py-4">
				<h2
					class="w-full text-center text-5xl font-black md:w-auto md:flex-none md:text-left md:text-6xl"
				>
					<a href="/events">
						Events <span class="text-primary-600">.</span>
					</a>
				</h2>
				<span class="ms-5 hidden w-[60%] border-b-2 border-neutral-500 md:block"></span>
			</div>
			<slot />
		</div>
	</Container>
</section>

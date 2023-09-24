<script lang="ts">
	export let frontEndUrl: string, backEndUrl: string;
</script>

<section class="mx-auto flex flex-col justify-center align-middle">
	<div class="mx-auto flex justify-center text-center dark:text-white">
		<h2
			class="my-32 pl-4 text-left text-7xl font-bold tracking-tight dark:text-white"
		>
			Which <span class="text-[var(--color-accent)]">path</span> are you taking?
		</h2>
	</div>
	<div class="mb-32 flex flex-wrap justify-center">
		<a
			class="mx-3 mb-2 w-72 cursor-pointer
             rounded-full border bg-daedalusDark px-5 py-3 text-center text-white hover:bg-secondary hover:text-white dark:border-daedalusDark
             dark:bg-white dark:text-black dark:hover:bg-secondary dark:hover:text-black"
			href={frontEndUrl}
		>
			Front End
		</a>
		<a
			class="mx-3 w-72 cursor-pointer rounded-full
             border bg-daedalusDark px-5 py-3 text-center text-white hover:bg-secondary hover:text-white dark:border-daedalusDark dark:bg-white
             dark:text-black dark:hover:bg-secondary dark:hover:text-black"
			href={backEndUrl}
		>
			Back End
		</a>
	</div>
</section>

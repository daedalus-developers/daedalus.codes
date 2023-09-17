<script lang="ts">
	import type { TeamMember } from '$lib/types';
	import GitHub from '../icons/GitHub.svelte';
	export let teamMembers: TeamMember[] = [];
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				We’re a dynamic group of individuals who are passionate about what we do and dedicated to
				delivering the best results for our clients.
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
		>
			{#each teamMembers as member}
				<li>
					<img class="mx-auto h-24 w-24 rounded-full" src={member.avatar} alt="" />
					<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
						{member.lastName}, {member.firstName}
					</h3>
					{#each member.title as title}
						<p class="text-sm leading-6 text-gray-600">{title}</p>
					{/each}
					<ul role="list" class="mt-6 flex justify-center gap-x-6">
						<li>
							<a href={member.github} class="text-gray-400 hover:text-blue-500">
								<span class="sr-only">Github</span>
								<GitHub />
							</a>
						</li>
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</div>

<!-- <div -->
<!-- 	class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" -->
<!-- 	role="status" -->
<!-- > -->
<!-- 	<span -->
<!-- 		class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" -->
<!-- 		>Loading...</span -->
<!-- 	> -->
<!-- </div> -->

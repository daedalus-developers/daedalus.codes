<script lang="ts">
	import type { TeamMember } from '$lib/types';
	export let teamMembers: TeamMember[] = [];
</script>

<div class="bg-white py-32">
	<div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				We’re a dynamic group of individuals who are passionate about what we do.
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			{#each teamMembers as member}
				<li>
					<img class="mx-auto h-56 w-56 rounded-full" src={member.avatar} alt="" />
					<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
						{member.lastName}, {member.firstName}
					</h3>
					<p class="text-sm leading-6 text-gray-600">Copywriter</p>
					<ul role="list" class="mt-6 flex justify-center gap-x-6">
						<li>
							<a href={member.github} class="text-gray-400 hover:text-gray-500">
								<span class="sr-only">Github</span>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
									<path
										d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
									/>
								</svg>
							</a>
						</li>
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</div>

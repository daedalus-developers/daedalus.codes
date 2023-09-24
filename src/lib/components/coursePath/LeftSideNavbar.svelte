<script lang="ts">
	interface CourseBranch {
		parent: string;
		child: string[];
	}
	export let branches: CourseBranch[] = [
		{
			parent: 'Roadmap',
			child: []
		},
		{
			parent: 'Courses',
			child: ['Beginner', 'Intermediate', 'Expert']
		}
	];
</script>

<aside class="w-full max-w-[200px] p-4 md:mr-auto">
	{#each branches as branch}
		<div class="mb-4">
			<p
				class="mb-2 cursor-pointer text-3xl font-bold hover:text-secondary dark:text-white dark:hover:text-secondary"
			>
				{branch.parent}
			</p>
			{#each branch.child as subbranch}
				<p class="ml-8 cursor-pointer hover:text-accent dark:hover:text-accent">
					{subbranch}
				</p>
			{/each}
		</div>
	{/each}
</aside>

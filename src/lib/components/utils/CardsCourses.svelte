<script lang="ts">
    import { coursesData as courses } from "$lib/data";

</script>

{#each courses as course}
<div
class=" h-[440px] w-[446px] rounded-[93px] border-2 border-secondary bg-[url({course.backgroundImage})] bg-auto bg-no-repeat bg-[center_top_5rem] "
>
<h1 class="mt-12 ">{course.title}</h1>
</div>
{/each}
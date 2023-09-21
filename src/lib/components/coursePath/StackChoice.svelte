<script lang="ts">

export let frontEndUrl: string, backEndUrl: string;

</script>


<section class="flex justify-center mx-auto   flex-col align-middle">

    <div class="mx-auto text-center flex justify-center dark:text-white ">
        <h2 class="text-7xl font-bold text-left tracking-tight text-white my-32">
                Which <span class="text-[var(--color-accent)]">path</span> are you taking?
        </h2>
    </div>
    <div class="flex justify-center mb-32">
        <a class="rounded-full bg-white px-5 py-3 mx-3 w-72 hover:bg-[var(--color-secondary)] hover:text-white cursor-pointer text-center" href={frontEndUrl}>
            Front End
        </a>
        <a class="rounded-full bg-white px-5 py-3 mx-3 w-72 hover:bg-[var(--color-secondary)] hover:text-white cursor-pointer text-center" href={backEndUrl}>
            Back End
        </a>

    </div>

</section>
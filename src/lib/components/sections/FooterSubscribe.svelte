<script lang="ts">
    let invalidEmail = false;
    const regexEmail = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "g");

    let email = "";
    const emailValidation = (e: Event) => { // BUG: does not update when user uses autocomplete to add email.
        invalidEmail = !regexEmail.test(email);
        if (email.length < 3) invalidEmail = false;
    }

    const handleSubmit = async () => {
        
    }
</script>

<div class="flex flex-row gap-20 m-11">
    <div class="flex flex-1 grow flex-col gap-10">
        <p class="font-bold">Subscribe to our newsletter</p>
        <p>Stay ahead in tech! Subscribe now for exclusive updates on mentorship, courses, and hackathons. Join our dynamic community and access valuable insights straight to your inbox. Don't miss out – subscribe today!</p>
        <form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
            <div class="flex flex-row gap-2">
                <input 
                    type="email"
                    placeholder="Type your email..."
                    name="email"
                    on:input={emailValidation}
                    bind:value={email}
                    class="border-spacing-[1.2px] border-[#7A52B3] rounded text-[#232323] font-normal"
                >
                <input type="submit" value="Subscribe" class="btn bg-[#7A52B3] rounded text-[#FFFFFF] font-semibold">
            </div>
            {#if invalidEmail}
                <p class="text-[#FF0909] italic">Please enter a valid email</p>
            {/if}
        </form>
    </div>
    <div class="flex flex-1 h-80 w-80 bg-orange-400" />
</div>
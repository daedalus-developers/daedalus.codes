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

<div>
    <div>
        <p class="font-bold">Subscribe to our newsletter</p>
        <p>Stay ahead in tech! Subscribe now for exclusive updates on mentorship, courses, and hackathons. Join our dynamic community and access valuable insights straight to your inbox. Don't miss out – subscribe today!</p>
        <form class="flex flex-col" on:submit|preventDefault={handleSubmit}>
            <div class="flex flex-row">
                <input type="email" placeholder="Type your email..." name="email" on:input={emailValidation} bind:value={email}>
                <input type="submit" value="Subscribe" class="btn">
            </div>
            {#if invalidEmail}
                <p class="text-[#FF0909] italic">Please enter a valid email</p>
            {/if}
        </form>
    </div>
</div>
<script lang="ts">
    let invalidEmail = false;
    const regexEmail = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$", "g");

    let email = "";
    const emailValidation = (e: Event) => { // BUG: does not update when user uses autocomplete to add email.
        invalidEmail = !regexEmail.test(email);
        if (email.length < 3) invalidEmail = false;
    }

    export let isMobile:boolean;
    export let isDark:boolean;
    
    let backgroundColor:string;
    let fontColor:string;
    let warningColor: string;
    let darkLightModes = [
        {iisDark: true, backgroundColor: "#1A2024", fontColor: "#FFFFFF", warningColor: "#FFFFFF"},
        {iisDark: false, backgroundColor: "#F6F8FB", fontColor: "#000000", warningColor: "#FF0909"},
    ]
</script>

<div class="bg-[{isDark === darkLightModes[0].iisDark ? darkLightModes[0].backgroundColor : darkLightModes[1].backgroundColor}]">
    <div class="flex flex-row flex-wrap gap-20 ml-24 mr-24 mt-12 mb-12">
        <div class="flex flex-1 flex-col gap-10">
            <p class="font-semibold text-[{isDark === darkLightModes[0].iisDark ? darkLightModes[0].fontColor : darkLightModes[1].fontColor}] text-2xl">Subscribe to our newsletter</p>
            <p class="text-[{isDark === darkLightModes[0].iisDark ? darkLightModes[0].fontColor : darkLightModes[1].fontColor}] text-base">Stay ahead in tech! Subscribe now for exclusive updates on mentorship, courses, and hackathons. Join our dynamic community and access valuable insights straight to your inbox. Don't miss out – subscribe today!</p>
            <form class="flex flex-col" on:submit|preventDefault>
                <div class="flex flex-row gap-2">
                    <input 
                        type="email"
                        placeholder="Type your email..."
                        name="email"
                        on:input={emailValidation}
                        bind:value={email}
                        class="border-spacing-[1.2px] border-[#7A52B3] rounded text-[#232323] text-base font-normal pl-10 pr-10 w-10/12"
                    >
                    <input type="submit" value="Subscribe" class="btn bg-[#7A52B3] rounded text-[#FFFFFF] text-base font-semibold pl-10 pr-10">
                </div>
                {#if invalidEmail}
                    <p class="text-[{isDark === darkLightModes[0].iisDark ? darkLightModes[0].warningColor : darkLightModes[1].warningColor}] text-xs italic">Please enter a valid email</p>
                {/if}
            </form>
        </div>
        {#if !isMobile}
            <div class="flex h-80 w-80 bg-orange-400" />
        {/if}
    </div>
</div>
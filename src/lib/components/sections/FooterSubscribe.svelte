<script lang="ts">
	import { Container } from '@components/utilities/';
	import Icon from '@iconify/svelte';

	let invalidEmail = false;
	const regexEmail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'g');

	let email = '';
	const emailValidation = () => {
		// BUG: does not update when user uses autocomplete to add email.
		invalidEmail = !regexEmail.test(email);
		if (email.length < 3) invalidEmail = false;
	};

	export let isDark: boolean;
</script>


<section class="py-32 {!isDark? 'bg-surface-100-800-token' : ''}">
	<Container addClass="flex flex-col md:flex-row items-center">
		<div class="flex flex-col gap-8 md:gap-10 text-center md:text-left">
			<h3 class="text-3xl md:text-4xl font-bold 
			dark:bg-gradient-to-r dark:from-primary-600 dark:to-secondary-600 dark:bg-clip-text dark:text-transparent">Subscribe to our newsletter</h3>
			<p>Stay ahead in tech! Subscribe now for exclusive updates on mentorship, courses, and hackathons. Join our dynamic community and access valuable insights straight to your inbox. Don't miss out – subscribe today!</p>
			<form class="flex flex-col" on:submit|preventDefault>
				<div class="flex flex-row gap-2">
					<input
						type="email"
						placeholder="Type your email..."
						name="email"
						on:input={emailValidation}
						bind:value={email}
						class="border-spacing-[1.2px] border-[#7A52B3] rounded text-[#232323] text-base font-normal px-5 w-10/12"
					/>
					<input
						type="submit"
						value="Subscribe"
						class="btn variant-filled-secondary rounded"
					/>
				</div>
				{#if invalidEmail}
					<p class="text-sm italic text-error-500 text-left">Please enter a valid email</p>
				{/if}
			</form>
		</div>
		<div class="calendar aspect-square w-96 hidden md:flex justify-center items-center p-10">
			<span class="text-[200px] text-primary-600">
				<Icon icon="clarity:calendar-solid" class=" skew-y-6 transform-gpu" />
			</span>
		</div>
	</Container>
</section>

<!-- ----------------------------------- -->

<!-- <div
	class="bg-[{isDark === darkLightModes[0].iisDark
		? darkLightModes[0].backgroundColor
		: darkLightModes[1].backgroundColor}]"
>
	<div class="flex flex-row flex-wrap gap-20 ml-24 mr-24 mt-12 mb-12">
		<div class="flex flex-1 flex-col gap-10">
			<p
				class="font-semibold text-[{isDark === darkLightModes[0].iisDark
					? darkLightModes[0].fontColor
					: darkLightModes[1].fontColor}] text-2xl"
			>
				Subscribe to our newsletter
			</p>
			<p
				class="text-[{isDark === darkLightModes[0].iisDark
					? darkLightModes[0].fontColor
					: darkLightModes[1].fontColor}] text-base"
			>
				Stay ahead in tech! Subscribe now for exclusive updates on mentorship, courses, and
				hackathons. Join our dynamic community and access valuable insights straight to your inbox.
				Don't miss out – subscribe today!
			</p>
			<form class="flex flex-col" on:submit|preventDefault>
				<div class="flex flex-row gap-2">
					<input
						type="email"
						placeholder="Type your email..."
						name="email"
						on:input={emailValidation}
						bind:value={email}
						class="border-spacing-[1.2px] border-[#7A52B3] rounded text-[#232323] text-base font-normal pl-10 pr-10 w-10/12"
					/>
					<input
						type="submit"
						value="Subscribe"
						class="btn bg-[#7A52B3] rounded text-[#FFFFFF] text-base font-semibold pl-10 pr-10"
					/>
				</div>
				{#if invalidEmail}
					<p
						class="text-[{isDark === darkLightModes[0].iisDark
							? darkLightModes[0].warningColor
							: darkLightModes[1].warningColor}] text-xs italic"
					>
						Please enter a valid email
					</p>
				{/if}
			</form>
		</div>
		{#if !isMobile}
			<div class="flex h-80 w-80 bg-orange-400" />
		{/if}
	</div>
</div> -->

<script lang="ts">
	import { enhance } from '$app/forms';
	export let eventTitle: string = 'Daedalus Hack-a-ton';
	export let eventSubtitle: string = '🚀 Join Our Hackathon! 🚀';
	export let eventDescription: string = `
    Unleash your coding skills and creativity in our upcoming hackathon. Solve real-world problems, collaborate with like-minded developers, and bring your innovative ideas to life. Don't miss out – Register Now and be part of the coding adventure!!`;

	export let eventDetails: { [key: string]: string }[] = [
		{
			key: 'Registration Deadline',
			value: 'Oct 31, 2023'
		},
		{
			key: 'Hackathon Opening',
			value: 'Nov 4, 2023'
		},
		{
			key: 'Hackathon Week',
			value: 'Nov 5 - 10, 2023'
		},
		{
			key: 'Demo Day',
			value: 'Nov 11, 2023'
		},
		{
			key: 'Winner Announcement',
			value: 'Nov 15, 2023'
		},
		{
			key: 'Note',
			value: 'A github account is required to participate.'
		}
	];

	export let eventRequirements: {
		title: string;
		placeholder: string;
		type:
			| 'text'
			| 'number'
			| 'checkbox'
			| 'radio'
			| 'file'
			| 'password'
			| 'email'
			| 'range';
		required?: boolean;
		min?: number;
		max?: number;
	}[] = [
		{
			title: 'githubUsername',
			placeholder: 'Github Username',
			type: 'text'
		},
		{
			title: 'discordUsername',
			placeholder: 'Discord Username',
			type: 'text'
		},
		{
			title: 'mobileNumber',
			placeholder: 'Mobile Number',
			type: 'number'
		},
		{
			title: 'emailAddress',
			placeholder: 'Email Address',
			type: 'number'
		},
		{
			title: 'frontEndRating',
			placeholder: 'Front-end Rating (1 - 10)',
			type: 'range',
			min: 1,
			max: 10
		},
		{
			title: 'backEndRating',
			placeholder: 'Back-end Rating (1 - 10)',
			type: 'range',
			min: 1,
			max: 10
		},
		{
			title: 'uiUxRating',
			placeholder: 'UI/ UX Rating (1 - 10)',
			type: 'range',
			min: 1,
			max: 10
		}
	];
</script>

<section class="mx-auto my-7 max-w-3xl">
	<article>
		<h1 class="text-5xl">{eventTitle}</h1>
		<h2 class="text-sm">{eventSubtitle}</h2>
		<p class="my-4 text-sm text-opacity-80">{eventDescription}</p>
		<h1 class="text-1xl text-center">Event Details</h1>
		{#each eventDetails as eventDetail}
			<div class="flex justify-between">
				<strong class="text-sm text-secondary text-opacity-80"
					>{eventDetail.key}</strong
				>
				<p class=" text-sm text-opacity-80">{eventDetail.value}</p>
			</div>
		{/each}
	</article>
	<form
		class="my-8 flex flex-col gap-3"
		action="/events"
		method="POST"
		use:enhance
	>
		{#each eventRequirements as eventRequirement}
			<div class="flex flex-col gap-4 align-middle">
				<label
					for={eventRequirement.title}
					data-input-type={eventRequirement.type}
				>
					{eventRequirement.placeholder}
				</label>
				<input
					type={eventRequirement.type}
					placeholder={eventRequirement.placeholder}
					required={eventRequirement.required ?? true}
					min={eventRequirement.min ?? undefined}
					max={eventRequirement.max ?? undefined}
					name={eventRequirement.title}
					id={eventRequirement.title}
				/>
			</div>
		{/each}
		<div class="flex flex-row justify-center gap-7 align-middle">
			<input class="w-28 cursor-pointer px-10 hover:bg-accent" type="reset" />
			<input class="w-28 cursor-pointer px-10 hover:bg-accent" type="submit" />
		</div>
	</form>
</section>

<style>
	label {
		display: none;
	}
	label[data-input-type='range'] {
		display: inline-block;
		font-size: small;
		padding: 0;
	}
	input {
		display: block;
		padding: 10px;
		border-radius: 10px;
		background-color: transparent;
	}
	input[type='range'] {
		padding: 0;
		margin: 0 auto;
		width: 80%;
	}
</style>

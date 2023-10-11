<script lang="ts">
	import Register from '$lib/components/events/Register.svelte';
</script>

<Register
    eventTitle = "Register"
    eventDetails = {[]}
    eventRequirements = {[
        {
            title: "username",
            placeholder: "Username",
            type: "text"
        },
        {
            title: "email",
            placeholder: "Email Address",
            type: "text"
        },
        {
            title: "firstName",
            placeholder: "First Name",
            type: "text"
        },
        {
            title: "lastName",
            placeholder: "Last Name",
            type: "text"
        },
        {
            title: "discordUsername",
            placeholder: "Discord Username",
            type: "text"
        },
        {
            title: "tier",
            placeholder: "Choose your subscription tier (disabled for now)",
            type: "radio",
            radioValues: ["pro", "freemium"],
            default: "freemium",
            hidden: true,
            disabled: true
        },
        {
            title: "phoneNumber",
            placeholder: "Phone Number",
            type: "text"
        },
        {
            title: "facebookProfile",
            placeholder: "Facebook Profile",
            type: "text"
        },
        {
            title: "githubProfile",
            placeholder: "GitHub Profile",
            type: "text"
        },
        {
            title: "displayPicture",
            placeholder: "Select your display picture",
            type: "file"
        },
        {
            title: "active",
            placeholder: "Are you an active user?",
            type: "checkbox",
            radioValues: [true],
            default: true,
            hidden: true,
            disabled: true
        }
    ]}
/>

<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton';
  import Icon from '@iconify/svelte';
  export let usersData: any;

  $: data = usersData;
  
</script>

{#if usersData.length === 0}
  <p class="uppercase py-3">No users found</p>
  <div class="card p-4 block variant-ghost-surface mb-5">
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-3">
        <div class="placeholder-circle w-16 flex items-center justify-center">
          <Icon icon="mdi:user" width="32" class="opacity-40" />
        </div>
        <div class="placeholder p-4 w-full flex items-center justify-center">
          <span class="opacity-40">? ? ?</span>
        </div>
      </div>
    </div>
  </div>
{:else}
  <p class="uppercase py-3">Users</p>
{/if}

<!-- <div class="mb-20"> -->
  {#each usersData as user}
  <a 
    href="/profile/{user.username}"
    class="card p-4 block variant-ghost-surface mb-5"
    >
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-3">
        <Avatar
          initials="{user.firstName[0]}{user.lastName[0]}"
          background="variant-filled-surface"
          class="flex-none"
          width="w-12" />
        <span>{user.firstName} {user.lastName}</span>
      </div>
    </div>
  </a>
  {/each}
<!-- </div> -->



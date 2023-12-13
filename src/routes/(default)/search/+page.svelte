<script lang="ts">
  import { Container } from '@components/utilities';
  import { Avatar } from '@skeletonlabs/skeleton';
  import FilterParams from './FilterParams.svelte';
  import KeywordParams from './KeywordParams.svelte';
  import LimitParams from './LimitParams.svelte';
  import SkeletonComponent from './SkeletonComponent.svelte'
  import UsersComponent from './UsersComponent.svelte';
  import EventsComponent from './EventsComponent.svelte';

  import type { PageData } from './$types';

  export let data: PageData;

</script>


<section class="py-10">
  <Container>

    <div class="cardX p-4">
      <div class="pb-4">
        <KeywordParams />
      </div>

      <div class="py-2">
        <FilterParams />
      </div>

      {#await data.streamed.searchData}
        <!-- <p>Please wait...</p> -->
        <SkeletonComponent />
      {:then result }
        {#if result.users}
          <!-- <p>Users</p> -->
          {@const users = result.users.items}
          <UsersComponent usersData={users} />
        {/if}
        
        {#if result.events}
          <!-- <p>Events are available</p> -->
          {@const events = result.events.items}
          <EventsComponent eventsData={events} />
        {/if}
      {/await}

      <div class="text-center">
        <LimitParams />
      </div>

    </div>
  </Container>
</section>


			
<script lang="ts">
    import { Button, Search } from 'flowbite-svelte';
    import { SearchOutline } from 'flowbite-svelte-icons';
    import { createEventDispatcher } from 'svelte';
    import { isValidInput } from '../helpers/input.helper';
    const dispatcher = createEventDispatcher();
    const API_URL = import.meta.env.VITE_BASE_URL;
    let value : string|undefined;
    async function fetchWordInfo(){
      if(!isValidInput(value)) {
        return dispatcher('form_submitted',{error:'word input is empty !'})
      }
      const response = await fetch(`${API_URL}/${value}`);
      const [wordInfo] = await response.json();
      return dispatcher('form_submitted', wordInfo)
    }
</script>

  <form class="flex gap-2" on:submit|preventDefault={fetchWordInfo}>
    <Search size="lg" bind:value/>
    <Button class="!p-2.5" type="submit">
      <SearchOutline class="w-5 h-5" />
    </Button>
  </form>

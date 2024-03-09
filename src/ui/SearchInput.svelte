<script>
    import { Button, Search } from 'flowbite-svelte';
    import { SearchOutline } from 'flowbite-svelte-icons';
</script>
  
  <form class="flex gap-2">
    <Search size="lg"/>
    <Button class="!p-2.5" > 
      <SearchOutline class="w-5 h-5" />
    </Button>
  </form>
<script>
     import { DarkMode } from 'flowbite-svelte';
     import { GithubSolid } from 'flowbite-svelte-icons';
     import Header from './components/Header.svelte';
</script>

<h1 class="text-center dark:text-white text-7xl my-10">Dictionary</h1>
<section class="w-full md:w-1/2 md:mx-auto flex content-center items-center text-center">
          <a href="#" target="_blank" class="btn"><GithubSolid size='lg'/></a>
          <DarkMode class="btn" size="lg"/>
</section>
<Header/>

<style></style>
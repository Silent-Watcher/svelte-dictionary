<script lang="ts">
     import { DarkMode } from 'flowbite-svelte';
     import { GithubSolid } from 'flowbite-svelte-icons';
     import Header from './components/Header.svelte';
     import Word from './components/Word.svelte';
     let word : any;
     let isWordLoaded : boolean = false;
     function fetchWord(e:CustomEvent){
          console.log(e.detail);
          if('error' in e.detail){
               isWordLoaded = false
               return alert('input field is empty');
          }
          word = e.detail
          isWordLoaded = true
     }
     console.log(word);
</script>

<h1 class="text-center dark:text-white text-7xl my-10">Dictionary</h1>
<section class="row flex content-center items-center text-center" >
          <a href="https://github.com/Silent-Watcher/svelte-dictionary" target="_blank" class="btn"><GithubSolid size='lg'/></a>
          <DarkMode class="btn" size="lg"/>
</section>
<Header on:form_submitted={fetchWord}/>

{#if isWordLoaded}
     <Word bind:word/>
{/if}





<style></style>
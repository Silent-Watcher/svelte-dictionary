<script lang="ts">
     import { DarkMode } from 'flowbite-svelte';
     import { GithubSolid } from 'flowbite-svelte-icons';
     import Header from './components/Header.svelte';
     import Word from './components/Word.svelte';
     import Link from './ui/Link.svelte';
     let word : any;
     let isWordLoaded : boolean = false;
     function fetchWord(e:CustomEvent){
          if('error' in e.detail){
               isWordLoaded = false
               return alert('input field is empty');
          }
          word = e.detail
          isWordLoaded = true
     }
</script>

<h1 class="text-center dark:text-white text-7xl my-10">Dictionary</h1>
<section class="row flex content-center items-center text-center" >
          <a href="https://github.com/Silent-Watcher/svelte-dictionary" target="_blank" class="btn"><GithubSolid size='lg'/></a>
          <DarkMode class="btn" size="lg"/>
</section>
<Header on:form_submitted={fetchWord}/>

<Link linkDesc="Data provided by" linkHref="https://dictionaryapi.dev/" linkText="dictionaryapi.dev"/>


{#if isWordLoaded}
     <Word bind:word/>
{/if}

<style></style>

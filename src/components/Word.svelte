<script lang="ts">

  import Phonetic from './word/Phonetic.svelte';
    export let word :any;
    console.log('word: ', word);
    $: phonetics = word.phonetics.filter((phonetic: { text:string, audio: string })  => phonetic.audio.length > 0)
    $: console.log('phonetics: ', phonetics);
    
</script>


<main class="mt-20">
    <h1 class='dark:text-white text-2xl md:text-3xl lg:text-6xl text-center'>{word.word} <span class="text-zinc-500 text-2xl">{word.phonetic ?? ''}</span></h1>
    <section class="row text-center">
        {#each phonetics as phonetic}
            <Phonetic audioSrc={phonetic.audio} phoneticText={phonetic.text}/>
        {/each}
    </section>
</main>

<style></style>
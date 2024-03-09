<script lang="ts">

  import Meaning from './word/Meaning.svelte';
  import Phonetic from './word/Phonetic.svelte';
    export let word :any;
    console.log('word: ', word);
    $: phonetics = word.phonetics.filter((phonetic: { text:string, audio: string })  => phonetic.audio.length > 0)
		$: meanings = word.meanings
</script>

<main class="mt-14">
    <h1 class='dark:text-white text-2xl md:text-3xl lg:text-6xl text-center'>{word.word} <span class="text-zinc-500 text-2xl">{word.phonetic ?? ''}</span></h1>
    <section class="row text-center">
        {#each phonetics as phonetic}
            <Phonetic audioSrc={phonetic.audio} phoneticText={phonetic.text}/>
        {/each}
    </section>
		<div class="grid grid-cols-1 md:grid-cols-2 xl:w-1/2 xl:mx-auto gap-4 mt-10">
			{#each meanings as meaning}
				<Meaning definitions={meaning.definitions} antonyms={meaning.antonyms} synonyms={meaning.synonyms} partOfSpeech={meaning.partOfSpeech}/>
			{/each}
		</div>
</main>

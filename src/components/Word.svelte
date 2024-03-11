<script lang="ts">
	import Meaning from './word/Meaning.svelte';
	import Phonetic from './word/Phonetic.svelte';

	export let word: any;
	console.log('word: ', word);
	$: phonetics = word.phonetics.filter(
		(phonetic: { text: string; audio: string }) => phonetic.audio.length > 0
	);
	$: meanings = word.meanings;
</script>

<main class="mt-4">
	<h1 class="text-center text-2xl dark:text-white md:text-3xl lg:text-6xl">
		{word.word}
		<span class="text-2xl text-zinc-500">{word.phonetic ?? ''}</span>
	</h1>
	<section class="row text-center">
		{#each phonetics as phonetic}
			<Phonetic audioSrc={phonetic.audio} phoneticText={phonetic.text} />
		{/each}
	</section>
	<div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:mx-auto xl:w-1/2">
		{#each meanings as meaning}
			<Meaning
				definitions={meaning.definitions}
				antonyms={meaning.antonyms}
				synonyms={meaning.synonyms}
				partOfSpeech={meaning.partOfSpeech}
			/>
		{/each}
	</div>
</main>

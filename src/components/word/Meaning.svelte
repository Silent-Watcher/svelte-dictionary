<script lang="ts">
	export let partOfSpeech:string;
	export let synonyms: string[];
	export let antonyms: string[];
	export let definitions: {definition:string;synonyms:string[];antonyms:string[]}[];
	$: synonymsList = synonyms.join(' - ');
	$: antonymsList = antonyms.join(' - ');
</script>

<section class="dark:text-white border-solid border-2 dark:border-gray-700 border-gray-300">
	<h3 class="bg-gray-100 text-zinc-900 dark:bg-gray-700 dark:text-white text-center p-3 text-xl border-dashed border-b-2 border-primary-400">{partOfSpeech}</h3>
	<ul class="p-3">
		{#each definitions as definition}
			 <li>{definition.definition}</li>
		{/each}
	</ul>
	<div class="border-md border-primary-700 p-3">
		{#if synonymsList.length>0}
			 <p class="font-bold">synonyms</p>
			 <p class="my-2">{synonymsList}</p>
		{/if}
	</div>
	<div class="border-md border-primary-700 p-3">
		{#if antonymsList.length>0}
			<p class="font-bold">antonyms</p>
			<p class="my-2">{antonymsList}</p>
 		{/if}
	</div>
</section>

<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
	import { GithubSolid } from 'flowbite-svelte-icons';
	import Header from './components/Header.svelte';
	import Word from './components/Word.svelte';
	import Link from './ui/Link.svelte';
	import Footer from './components/Footer.svelte';
	let word: any;
	let isWordLoaded: boolean = false;
	function fetchWord(e: CustomEvent) {
		if ('error' in e.detail) {
			isWordLoaded = false;
			return alert('input field is empty');
		}
		word = e.detail;
		isWordLoaded = true;
	}
</script>

<Header on:form_submitted={fetchWord} />

<Link
	linkDesc="Data provided by"
	linkHref="https://dictionaryapi.dev/"
	linkText="dictionaryapi.dev"
/>
<section class="row flex content-center items-center text-center mt-2 mx-auto">
	<div class="mx-auto flex content-center items-center">
		<a
			href="https://github.com/Silent-Watcher/svelte-dictionary"
			target="_blank"
			class="btn"><GithubSolid size="lg" /></a
		>
		<DarkMode class="btn" size="lg" />
	</div>
</section>

{#if isWordLoaded}
	<Word bind:word />
{/if}

<Footer />

<style></style>

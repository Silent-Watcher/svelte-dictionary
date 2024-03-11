<script lang="ts">
	import speaker from '../../assets/speaker.svg';
	import { playAudio } from '../../helpers/audio.helper';

	export let phoneticText: string;
	export let audioSrc: string;
</script>

<section
	class="mt-5 flex w-full content-around items-center first:mt-10 sm:mx-auto sm:w-1/2 lg:w-1/3"
>
	<p class="dark:text-white">{phoneticText ?? 'not available'}</p>
	<button class="ml-auto cursor-pointer" type="button" on:click={playAudio}>
		<img src={speaker} alt="speaker" />
	</button>
	<audio src={audioSrc}></audio>
</section>

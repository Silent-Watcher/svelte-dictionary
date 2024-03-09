<script lang="ts">
    import speaker from '../../assets/speaker.svg';
    import { playAudio } from '../../helpers/audio.helper';
    export let phoneticText : string;
    export let audioSrc : string;
</script>


<section class="w-full sm:w-1/2 lg:w-1/3 sm:mx-auto first:mt-10 mt-5 flex items-center content-around">
    <p class="dark:text-white">{phoneticText ?? 'not available'}</p>
		<button class="ml-auto cursor-pointer" type="button" on:click={playAudio}>
			<img src="{speaker}" alt="speaker">
		</button>
    <audio src="{audioSrc}"></audio>
</section>

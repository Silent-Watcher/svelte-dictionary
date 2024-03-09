<script lang="ts">
    import speaker from '../../assets/speaker.svg';
    async function playAudio(e:any){
        let audio = document.querySelector('audio') as HTMLAudioElement
        await audio.play();
    }
    export let phoneticText:string;
    export let audioSrc:string;
</script>


<section class="w-full sm:w-1/2 lg:w-1/3 sm:mx-auto first:mt-10 mt-5 flex items-center content-around">
    <p class="dark:text-white">{phoneticText}</p>
    <img class="cursor-pointer ml-auto" on:click={playAudio} src="{speaker}" alt="speaker">
    <audio src="{audioSrc}"></audio>
</section>

<style></style>
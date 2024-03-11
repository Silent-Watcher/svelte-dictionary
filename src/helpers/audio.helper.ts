export async function playAudio(): Promise<void> {
	const audio = document.querySelector("audio") as HTMLAudioElement;
	await audio.play();
}

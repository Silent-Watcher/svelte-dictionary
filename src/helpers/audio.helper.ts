export async function playAudio(e: any): Promise<void> {
	let audio = document.querySelector("audio") as HTMLAudioElement;
	await audio.play();
}

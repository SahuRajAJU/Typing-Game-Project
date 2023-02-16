// let typing_speed = (actualWords/totalTimeTaken)*60;

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const showSentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;

const sentences = ['The quick brown fox jumps over the lazy dog 1', 'The quick brown fox jumps over the lazy dog 2', 'The quick brown fox jumps over the lazy dog 3']

const calculateTypingSpeed = (time_taken) => {
	let totalWords = typing_ground.value.trim();
	let actualWords = totalWords === '' ? 0 : split(" ").length;

	if(actualWords !== 0){
		let typing_speed = (actualWords/totalTimeTaken)*60;
		typing_speed = Math.round(typing_speed);
		score.innerHTML = 'your typing speed is ${typing_speed} words per minute and you typed ${actualWords} and time took ${time_taken}';
	}else{
		score.innerHTML = 'your typing speed is 0 words per minute and time taken ${time_taken} sec';
	}
}

const endTypingTest = () => {
	btn.innerText = "Start";

	let date = new Date();
	endTime = date.getTime();

	totalTimeTaken = (endTime - startTime)/1000;
	// console.log(totalTimeTaken);

	calculateTypingSpeed(totalTimeTaken);

	showSentence.innerHTML = "";
	typing_ground.value = "";

}

const startTyping = () => {
	let randomNumber = Math.floor(Math.random() * sentences.length);
	showSentence.innerHTML = sentences[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
	// console.log(randomNumber);
}

btn.addEventListener('click', () => {

	switch(btn.innerText.toLowerCase()) {
	case "start":
		typing_ground.removeAttribute('disabled');
		startTyping();
		break;

	case "done":
		typing_ground.setAttribute('disabled','true');
		endTypingTest();
		break;	
	}

})
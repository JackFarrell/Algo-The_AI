// function greeting() {
//     const greetingText = "Hello! I am a word The AI"
//     const utteranceGreeting = new SpeechSynthesisUtterance(greetingText)
//      utterance.rate = 1
//      textInput.disabled = true
//     window.speechSynthesis.speak(utteranceGreeting)
// }

// window.addEventListener('load', function(event) {
//     greeting()
// });

window.onload = function(){ 
    var u = new SpeechSynthesisUtterance('All is Ok');
     u.text = 'Hello World';    
     u.lang = 'en-US';
     u.rate = 1;
     u.pitch = 1;
     u.volume = 1;     
     speechSynthesis.speak(u);
}

const playButton = document.getElementById('play-button')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')

playButton.addEventListener('click', () => {
    playText(textInput.value)
})

function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = speedInput.value || 1
    utterance.addEventListener('end', () => {
        textInput.disabled = false
    })
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}


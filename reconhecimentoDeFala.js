const elementoChte = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';
recognition.start();
let isRecognitionActive = true;

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibirChte(chute);
    verificarValor(chute, numeroSecreto);
}

function exibirChte(chute){
    elementoChte.innerHTML = `
        <div>Você informou:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => {
    if (isRecognitionActive) {
        recognition.start(); 
    }
});

function pararReconhecimento() {
    isRecognitionActive = false; 
    recognition.stop();
}
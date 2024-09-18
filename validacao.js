function verificarValor(chute, numeroSecreto){
    const box = document.getElementsByClassName('box')[0];
    const numero =+chute;

    if (chute == 'game over' || chute == 'parar' ) {
        pararReconhecimento();
        document.body.innerHTML = `<h1> Jogo encerrado! </h1>
        <button id='play' onclick=resetarGame()>Jogar novamente</button>`;
        return
    }
    if (chuteInvalido(numero)) {
        box.style.borderColor = 'red';
        box.style.color = 'red';
        elementoChte.innerHTML += `<div class='error'>Valor inválido, tente novamente!</div>`;
        return
    }
    
    if (numeroRange(numero)) {
        box.style.borderColor = 'red';
        box.style.color = 'red';
        elementoChte.innerHTML += `<div> Valor Inválido, o número precisa está entre ${menorValor} e ${maiorValor}!</div>`;
        return
    }
    
    if (numeroSecretoValida(numero, numeroSecreto)) {
        pararReconhecimento();
        box.style.borderColor = 'green';
        box.style.color = 'green';
        elementoChte.innerHTML += `<div> Parabéns, você acertou!</div>
        <button id='play' onclick=resetarGame()>Jogar novamente</button>`;
    }else if(numero > numeroSecreto){
        box.style.borderColor = 'blue';
        box.style.color = 'blue';
        elementoChte.innerHTML += `<div>O número secreto é Menor <i class="fa-solid fa-arrow-down"></i> </div>`
    }else if(numero < numeroSecreto){
        box.style.borderColor = 'blue';
        box.style.color = 'blue';
        elementoChte.innerHTML += `<div>O número secreto é Maior <i class="fa-solid fa-arrow-up"></i> </div>`
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroRange(numero){
    return numero > maiorValor || numero < menorValor;
}

function numeroSecretoValida(numero, numeroSecreto){
    return numero == numeroSecreto;
}

function resetarGame(){
    window.location.reload();
}
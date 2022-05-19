function MoreBracos(){
    let valor = document.getElementById("bracos.display");
    if (valor.value <= 10 && valor.value > 0){
        valor.value = parseInt(valor.value) + 1;
    }
}

function LessBracos(){
    let valor = document.getElementById("bracos.display");
    if (valor.value <= 10 && valor.value > 0){
        valor.value = parseInt(valor.value) - 1;
    }
}

function MoreBlindagem(){
    let valor = document.getElementById("blindagem.display");
    if (valor.value <= 10 && valor.value > 0){
        valor.value = parseInt(valor.value) + 1;
    }
}

function LessBlindagem(){
    let valor = document.getElementById("blindagem.display");
    if (valor.value <= 10 && valor.value > 0){
        valor.value = parseInt(valor.value) - 1;
    }
}

function MoreNucleos(){
    let valor = document.getElementById("nucleos.display");
    if (valor.value <= 10 && valor.value > 0){
        valor.value = parseInt(valor.value) + 1;
    }
}

function LessNucleos(){
    let valor = document.getElementById("nucleos.display");
    if (valor.value <= 10 && valor.value > 0){
        valor.value = parseInt(valor.value) - 1;
    }
}

function MoreFoguete(){
    let valor = document.getElementById("foguete.display");
    if (valor.value <= 10 && valor.value > 0){
        valor.value = parseInt(valor.value) + 1;
    }
}

function LessFoguete(){
    let valor = document.getElementById("foguete.display");
    if (valor.value <= 10 && valor.value > 0){
        valor.value = parseInt(valor.value) - 1;
    }
}
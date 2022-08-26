let finalText = "";
let letters = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//desabilitar imagem e texto
function textBackgroundDisabled(){
    document.getElementById("aparece").style.display = "none";
    document.querySelector(".mensagem").style.backgroundImage = "none";
    document.querySelector(".copiar").style.marginTop = "568px";
    document.querySelector(".copiar").style.marginLeft = "28%";
}

//função de encriptar
function encriptar(){
    let textReceived = document.getElementById("input-tex").value;
    
    for(let cont=0; cont< letters.length; cont++){
        if(textReceived.includes(letters[cont][0])){
            textReceived = textReceived.replaceAll(letters[cont][0], letters[cont][1]);

        }
    }
    textBackgroundDisabled();
    document.querySelector(".mensagem").innerHTML = textReceived;

}

//função de desencriptar
function desencriptar(){
    let textReceived = document.getElementById("input-tex").value;

    for(let cont=0; cont< letters.length; cont++){
        if(textReceived.includes(letters[cont][1])){
            textReceived = textReceived.replaceAll(letters[cont][1], letters[cont][0]);
        }
    }
    textBackgroundDisabled();
    document.querySelector(".mensagem").innerHTML = textReceived;
}

//botão de copiar o texto

function copiar(){
    let copyText = document.querySelector(".mensagem").innerHTML;
    navigator.clipboard.writeText(copyText);
}
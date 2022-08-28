let finalText = "";
let letters = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

//desabilitar imagem e texto
function textBackgroundDisabled(){
    document.querySelector(".mensagem").style.backgroundImage = "none";
    document.querySelector(".mensagem-nenhuma").style.visibility = "hidden";
    document.querySelector(".mensagem-digite").style.visibility = "hidden";
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

    alert("texto copiado com sucesso");
    
}
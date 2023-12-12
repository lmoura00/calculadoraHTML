var btOn = document.getElementById('on')
var btOff = document.getElementById('off')
var tela = document.getElementById('tela')
var energia = 0
var valor =  document.createElement('h1')
var texto = document.createTextNode(0)
valor.appendChild(texto)
valor.setAttribute('id', 'textoCalc')



function ligar(){
    if(energia == 0){
        energia = 1
        tela.style.backgroundColor = "rgb(0, 96, 0)"
        tela.appendChild(valor)
    }
    else{
        window.alert("Calculadora já ligada")
    }
}

function desligar(){
    if(energia == 1){
        energia = 0
        tela.style.backgroundColor = "rgb(0, 50, 0)"
        tela.removeChild(valor)
        
    }
    else{
        window.alert("Calculadora já desligada")
    }
}


btOn.addEventListener('click', ligar)
btOff.addEventListener('click', desligar)
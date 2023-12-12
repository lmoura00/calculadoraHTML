var btOn = document.getElementById('on')
var btOff = document.getElementById('off')
var tela = document.getElementById('tela')
var valor =  document.createElement('h1')
var btMPlus = document.getElementById("m+")
var btMMinus = document.getElementById("m-")
var btMR = document.getElementById("mr")
var btDot = document.getElementById("button .")
var bt00 = document.getElementById("button 00")
var bt0 = document.getElementById("button 0")
var bt1 = document.getElementById("button 1")
var bt2 = document.getElementById("button 2")
var bt3 = document.getElementById("button 3")
var bt4 = document.getElementById("button 4")
var bt5 = document.getElementById("button 5")
var bt6 = document.getElementById("button 6")
var bt7 = document.getElementById("button 7")
var bt8 = document.getElementById("button 8")
var bt9 = document.getElementById("button 9")
var btPlus = document.getElementById("btn +")
var btPlus = document.getElementById("btn +")

var energia = 0
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
        console.log(valor)
        
    }
    else{
        window.alert("Calculadora já desligada")
    }
}

function PressNum1(){
    texto = tela.removeChild(valor) && document.createTextNode(1)
    //texto = document.createTextNode(1)
    valor.appendChild(texto)
    valor.setAttribute('id', 'textoCalc')
    console.log(valor)
}

btOn.addEventListener('click', ligar)
btOff.addEventListener('click', desligar)
bt1.addEventListener('click', PressNum1)
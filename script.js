var btOn = document.getElementById('on')
var btOff = document.getElementById('off')
var tela = document.getElementById('tela')
var valor =  document.createElement('h1')
var btMPlus = document.getElementById("m+")
var btMMinus = document.getElementById("m-")
var btMR = document.getElementById("mr")
var btMC = document.getElementById("mc")
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
var btMinus = document.getElementById("btn -")
var btDivide = document.getElementById("btn /")
var btMult = document.getElementById("btn *")
var btDel = document.getElementById("btn del")
var btC = document.getElementById("btn C")
var btPorCento = document.getElementById("btn porCento")
var btResult = document.getElementById("btn result")

var operacaoPendente = '';
var memoria = 0;
var guardado = 0
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

function PressNum1() {
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '1';
        } else {
            valor.textContent += '1';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum2() {
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '2';
        } else {
            valor.textContent += '2';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum3() {
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '3';
        } else {
            valor.textContent += '3';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum4() {
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '4';
        } else {
            valor.textContent += '4';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum5() {
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '5';
        } else {
            valor.textContent += '5';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum6() {
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '6';
        } else {
            valor.textContent += '6';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum7(){
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '7';
        } else {
            valor.textContent += '7';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum8(){
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '8';
        } else {
            valor.textContent += '8';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum9(){
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '9';
        } else {
            valor.textContent += '9';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum0(){
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '0';
        } else {
            valor.textContent += '0';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNum00(){
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '00';
        } else {
            valor.textContent += '00';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}
function PressNumDot(){
    if (energia === 1) {
        if (valor.textContent === '0') {
            valor.textContent = '.';
        } else {
            valor.textContent += '.';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}




function ApagarUltimoDigito() {
    if (energia === 1) {
        let textoAtual = valor.textContent;
        valor.textContent = textoAtual.slice(0, -1);
        if (valor.textContent === '') {
            valor.textContent = '0';
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function AdicionarMemoria() {
    if (energia === 1) {
        let numeroAtual = parseFloat(valor.textContent);
        memoria += numeroAtual;
        valor.textContent = '0';
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function SubtrairMemoria() {
    if (energia === 1) {
        let numeroAtual = parseFloat(valor.textContent);
        memoria -= numeroAtual;
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function RecuperarMemoria() {
    if (energia === 1) {
        valor.textContent = memoria;
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function Somar() {
    if (energia === 1) {
        let numeroAtual = parseFloat(valor.textContent);
        guardado += numeroAtual;
        valor.textContent = '0';
        //alert(valor.value)
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function Subtrair() {
    if (energia === 1) {
        let numeroAtual = parseFloat(valor.textContent);
        guardado -= numeroAtual;
        valor.textContent = '0';
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function Dividir() {
    if (energia === 1) {
        let numeroAtual = parseFloat(valor.textContent);
        if (numeroAtual !== 0) {
            guardado /= numeroAtual;
            valor.textContent = '0';
        } else {
            window.alert("Não é possível dividir por zero!");
        }
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function Multiplicar() {
    if (energia === 1) {
        let numeroAtual = parseFloat(valor.textContent);
        guardado *= numeroAtual;
        valor.textContent = '0';
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function Limpar() {
    if (energia === 1) {
        valor.textContent = '0';
        guardado = 0
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function Porcentagem() {
    if (energia === 1) {
        let numeroAtual = parseFloat(valor.textContent);
        valor.textContent = String(numeroAtual / 100);
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function LimparMemoria() {
    if (energia === 1) {
        memoria = 0;
        guardado = 0
        window.alert("Memória limpa!");
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

function ExibirResultado() {
    if (energia === 1) {
        valor.textContent = guardado
    } else {
        window.alert("Por favor, ligue a calculadora primeiro!");
    }
}

btOn.addEventListener('click', ligar)
btOff.addEventListener('click', desligar)
bt1.addEventListener('click', PressNum1)
bt2.addEventListener('click', PressNum2);
bt3.addEventListener('click', PressNum3);
bt4.addEventListener('click', PressNum4);
bt5.addEventListener('click', PressNum5);
bt6.addEventListener('click', PressNum6);
bt7.addEventListener('click', PressNum7);
bt8.addEventListener('click', PressNum8);
bt9.addEventListener('click', PressNum9);
bt0.addEventListener('click', PressNum0);
bt00.addEventListener('click', PressNum00);
btDot.addEventListener('click', PressNumDot);

btDel.addEventListener('click', ApagarUltimoDigito);

btMPlus.addEventListener('click', AdicionarMemoria);
btMMinus.addEventListener('click', SubtrairMemoria);
btMR.addEventListener('click', RecuperarMemoria);

btPlus.addEventListener('click', Somar);
btMinus.addEventListener('click', Subtrair);
btDivide.addEventListener('click', Dividir);
btMult.addEventListener('click', Multiplicar);

btC.addEventListener('click', Limpar);
btPorCento.addEventListener('click', Porcentagem);
btResult.addEventListener('click', ExibirResultado);
btMC.addEventListener('click', LimparMemoria);
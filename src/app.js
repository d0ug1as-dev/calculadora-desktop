
let num1 = [];
let num2 = [];
let operador;
let arrayResult = [];

/* pegando valor dos numeros e jogando no visor e no operador acima */
function getValue(varNum, varTag){
    let getNum; 
    varNum = document.querySelector(varTag)
    getNum = varNum
    return getNum
}
/* pegando valor dos numeros e jogando no visor e no operador acima */
getValue('zero', '.zero').addEventListener('click', validaNum)
getValue('um', '.um').addEventListener('click', validaNum)
getValue('dois', '.dois').addEventListener('click', validaNum)
getValue('tres', '.tres').addEventListener('click', validaNum)
getValue('quatro', '.quatro').addEventListener('click', validaNum)
getValue('cinco', '.cinco').addEventListener('click', validaNum)
getValue('seis', '.seis').addEventListener('click', validaNum)
getValue('sete', '.sete').addEventListener('click', validaNum)
getValue('oito', '.oito').addEventListener('click', validaNum)
getValue('nove', '.nove').addEventListener('click', validaNum)
getValue('ponto', '.ponto').addEventListener('click', validaNum)
function validaNum(){
    if(operador == '' || operador == undefined){
        num1.push(this.value)
        arrayResult.push(this.value)
        getValue('visor', '.visor').value  = arrayResult.join('')
        getValue('operacao', '.operacao').innerText = arrayResult.join('')
}
    if(operador !== '' && operador !== undefined){
        if(operador == '%'){
            num2.push(this.value)
        }
        arrayResult.push(this.value)
        getValue('visor', '.visor').value = arrayResult.join('')
        getValue('operacao', '.operacao').innerText =  arrayResult.join('')
    }
}
/* pegando valor dos operadores e jogando no visor e no operador acima */
getValue('divisao', '.divisao').addEventListener('click', validaOperador)
getValue('multiplicacao', '.multiplicacao').addEventListener('click', validaOperador)
getValue('subtracao', '.subtracao').addEventListener('click', validaOperador)
getValue('adicao', '.adicao').addEventListener('click', validaOperador)
function validaOperador(){
    operador = this.value
    arrayResult.push(operador)
    getValue('visor', '.visor').value  += operador
    getValue('operacao', '.operacao').innerText +=  operador
}
/* LIMPANDO PARA UMA NOVA OPERAÇÃO */
function limpaStage(){
    num1.splice(0, arrayResult.length)
    num2.splice(0, arrayResult.length)
    operador = ''
  getValue('visor', '.visor').value  = ''
   arrayResult.splice(0, arrayResult.length)
}
/* botao delete */
getValue('cReset', '.cReset').addEventListener('click', btnCReset)
function btnCReset(){
    limpaStage()
    getValue('visor', '.visor').value = ""
    getValue('operacao', '.operacao').innerText = ""
}
/* botao delete */
getValue('dell', '.dell').addEventListener('click',  btnDell)
function btnDell(){
    if(operador == '' || operador == undefined){
        num1.pop()
    }
    if(num2 == ""){
        operador = ''
    }
    if(num1 !== "" && num1 !== undefined && operador !== ""  && operador !== undefined){
    num2.pop() 
}
    arrayResult.pop()
    getValue('visor', '.visor').value  = arrayResult.join('')
        getValue('operacao', '.operacao').innerText = arrayResult.join('')
}
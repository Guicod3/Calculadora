

function digitar(num){
    var numero = document.getElementById('Result').innerHTML;
    document.getElementById('Result').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('Result').innerHTML = ""
}

function cancelar(){
    var numero = document.getElementById('Result').innerHTML; 
    document.getElementById('Result').innerHTML = numero.slice(0, numero.length - 1);
}

function caractere(){
    var carac = document.getElementById('Result').innerHTML.length
    var limite = 8
    if (carac == limite){
        var numero = document.getElementById('Result').innerHTML;
        document.getElementById('Result').innerHTML = numero.slice(0, numero.length - 1);
    }
}

function calcular(){
    var numero = document.getElementById('Result').innerHTML;
    if (numero){
        document.getElementById('Result').innerHTML = eval(numero);
    } else{
        swal("Ops!", "Você não inseriu um valor.", "error");
    }
}


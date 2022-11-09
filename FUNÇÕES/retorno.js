function falaFrase(comeco){
    function falaResto(resto){
        return comeco + " " + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo!'))

/*
const fala = falaFrase('Olá');
const resto = fala('mundo!);
console.log(resto);
*/

function criaMultiplicador(multiplicador){
    return function multiplicacao(n){
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));

/*

function duplica(n){
    return n * 2;
}
function triplica(n){
    return n * 3;
}
function quadriplica(n){
    return  n * 4;
}

*/ 


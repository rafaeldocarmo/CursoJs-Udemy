function funcao(){
    console.log(arguments[10]);
}
funcao('Valor', 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10);

//argumentos que sustenta todos os argumentos enviados

function funcao2(a, b, c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total, a ,b ,c);
}
funcao2(1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10);

function funcao3(a, b, c, d, e ,f){
    console.log(a, b, c, d, e ,f);
}
funcao3(1, 2 ,3);
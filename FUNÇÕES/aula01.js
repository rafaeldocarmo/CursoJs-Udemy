function falaOi(){
    console.log('Oie');
}
falaOi();

// Function Expression

const souUmDado = function(){
    console.log('Sou um dado.');
}
souUmDado();


function executaFuncao(funcao){
    console.log("Vou executar a função abaixo: ")
    funcao();
}
executaFuncao(souUmDado);

// Arrow Functions

const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar: function () {
        console.log("Estou falando..");
    }
}
obj.falar();
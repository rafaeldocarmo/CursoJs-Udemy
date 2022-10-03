// Não podemos criar variáveis com palavras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'João'
console.log(nome);
// nome = 'Maria'; Não pode Modificar o valor. 

const primeiroNum = 5;
const segundoNum = 10;
const resultado = primeiroNum + segundoNum;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; // Não daria para fazer isso com CONST.
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado); // Resultado triplicado mais 5

console.log(typeof resultadoTriplicado);
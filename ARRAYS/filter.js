
const numeros = [5, 59, 80, 1, 2, 3, 4, 8, 10, 14, 22, 29]

//Filtrar numeros maiores que 10

const numerosFiltrados = numeros.filter((valor) => {
    return valor >= 10;
});

console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Rafael', idade: 20},
    {nome: 'Paulo', idade: 10},
    {nome: 'João', idade: 24},
    {nome: 'Iago', idade: 40},
    {nome: 'Felipe', idade: 29}
]

const pessoasComNomeGrande = pessoas.filter((obj) => {
    return obj.nome.length > 5;
});
const pessoasComMaisDe25 = pessoas.filter((obj) => {
    return obj.idade > 25;
});
const nomeTerminaComO = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('o')
})
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe25);
console.log(nomeTerminaComO);
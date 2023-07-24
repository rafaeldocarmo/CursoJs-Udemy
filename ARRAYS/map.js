const numeros = [5, 59, 80, 1, 2, 3, 4, 8, 10, 14, 22, 29]

// Dobre os numeros da array

const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

const pessoas = [
    {nome: 'Rafael', idade: 20},
    {nome: 'Paulo', idade: 10},
    {nome: 'João', idade: 24},
    {nome: 'Iago', idade: 40},
    {nome: 'Felipe', idade: 29}
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes);

// Removendo nomes
const idade = pessoas.map(obj => ({idade: obj.idade}))
console.log(idade);

// Gerar id
const id = pessoas.map((obj, indice) => {
    obj.id = indice + 1;
    return obj;
})
console.log(id);

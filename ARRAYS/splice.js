const nomes = ['Eduardo', 'João', 'Maria', 'Rafael', 'Fernando'];
const nomes2 = ['Eduardo', 'João', 'Maria', 'Rafael', 'Fernando'];
const nomes3 = ['Eduardo', 'João', 'Maria', 'Rafael', 'Fernando'];
const nomes4 = ['Eduardo', 'João', 'Maria', 'Rafael', 'Fernando'];

// nomes.splice(índice, delete, elem1, elem2, elem3);

//pop
const removidos = nomes.splice(4, 1); // Remove a partir do elemento 4, 1 elemento.
console.log(nomes, removidos);

console.log('--------------------');

const removidos2 = nomes2.splice(2, 2); // Remove a partir do elemento 2, 2 elementos.
console.log(nomes2, removidos2);

console.log('--------------------');

const removidos3 = nomes3.splice(2, 2, 'Joaquim'); // Remove a partir do elemento 2, 2 elementos. E adiciona Joaquim
console.log(nomes3, removidos3);

console.log('--------------------');

const deleteAll = nomes4.splice(0, nomes4.length);
console.log(nomes4, deleteAll)
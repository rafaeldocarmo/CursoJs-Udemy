const nomes = ['Eduardo', 'João', 'Maria'];
const nomes2 = new Array('Rafael', 'Maria', 'João');

nomes[2] = 'Rafael';
nomes.shift(); // Remove o primeiro
nomes.unshift('Pedro'); // Adiciona no começo

nomes.pop(); // Remove o Ultimo
nomes.push('Rosana'); // Adiciona ao final

const novo = nomes.slice(1, 4); // Pega dos indices 1 ao 4
console.log(nomes);
console.log(novo);

console.log('---------------------------');

const nome = 'Luiz Otavio Miranda';
const nomeDividido = nome.split(' ');
const nomeCompleto = nomeDividido.join(' ')

console.log(nome);
console.log(nomeDividido);
console.log(nomeCompleto);
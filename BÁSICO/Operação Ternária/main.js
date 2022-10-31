// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUSuario = 1000;
const nivelUsuario = pontuacaoUSuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);
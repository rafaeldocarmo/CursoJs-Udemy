function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otavio', 69);

console.log(pessoa1.nome, pessoa1.sobrenome)

const pessoa6 = {
    nome: 'Rafael',
    sobrenome: 'Martinez',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    }
}

pessoa6.fala()
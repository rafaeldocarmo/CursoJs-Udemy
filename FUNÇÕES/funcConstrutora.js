function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Sou um metodo');
    }
}

const p1 = new Pessoa("Luiz", "Oliveira");
p1.metodo();
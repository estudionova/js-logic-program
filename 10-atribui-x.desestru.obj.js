const pessoa = {
  nome: 'Reinaldo',
  sobrenome: 'Junior',
  idade: 36,
  endereco: {
    rua: 'pedro gama',
    numero: 320
  }
};

//const nome = pessoa.nome;

//atribuição via desestruturação
//const { nome = '', sobrenome, idade , endereco: { rua: r = '12345', numero}, endereco } = pessoa;
//console.log(nome, sobrenome, idade, r, numero, endereco);

const { nome, sobrenome, ...resto } = pessoa;

console.log(nome, sobrenome, resto);

const pessoa = {
  nome: 'Reinaldo',
  sobrenome: 'Lima',
  idade: '36'
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}


/*



const chave = 'nome';

//console.log(pessoa.nome);
console.log(pessoa[chave]);


// for in -> lê os índices ou chaves do objeto 

//                 0       1      2
const frutas = ['Maçã', 'Pera', 'Uva'];

for ( let i in frutas){
  console.log(frutas[i]);
}

for( let i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
}

*/
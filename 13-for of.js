const pessoa = {
  nome: 'Reinaldo',
  sobrenome: 'Junior'
};

for (let chave in pessoa){
  console.log(chave, pessoa[chave]);
}


/*

//const nome = 'Reinaldo Junior';
const nomes = ['Reinaldo', 'Junior', 'Felipe', 'Claudio', 'Henrique'];

//for of - retorna o valor em si (interáveis, arrays ou strings)
for (let valor of nomes) {
  console.log(valor);
}



nomes.forEach( function(valor, indice, array){
  console.log(valor, indice, array);

});

//for in - retorna o índice ou chave ( string, array ou objetos)
for ( let i in nome){
  console.log(nome[i]);
}
 - - - - - - - - -  - - 


 //for clássico - geralmente com interáveis ( array ou strings)
for( let i = 0; i < nome.length; i++ ){
  console.log(nome[i]);
}
*/
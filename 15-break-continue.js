// COntinue continua para a proxima iteração
// break para a iteração



const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

  if(numero === 7){
    console.log('7 encontrado, saindo...');
    break;
  }




  /*
  if (numero === 2) {
    console.log('pulou o numero 2');
    continue;
  
  }
  */

  console.log(numero);
}
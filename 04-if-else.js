const numero = 10;


if (numero >= 0 && numero <= 5) {
  console.log('o numero está entre 0 e 5');
}

else if (numero >= 6 && numero <= 8) {
  console.log('o numero está entre 6 e 8');

}

/*
else if ( 1 === 1){
  console.log('O numero é igual');
} //saiu do else if
*/
else if (numero >= 9 && numero <= 11) {
  console.log('o numero está entre 9 e 11');

}

else {
  console.log(`O numero é ${numero}`);
}




/*

const numero = 10;

// Se isso ocorrer, faça isso (if) 
// se não faça isso (else)
if (numero >= 0 && numero <= 5) {
  console.log('o numero está entre 0 e 5');
}
else {
  console.log(`O numero não está entre 0 e 5 -> o numero é ${numero}`);
}


const tenhoGrana = false;

if(tenhoGrana ){
  console.log('vou sair de casa');
}
else{
  console.log('não vou sair de casa');
}

entre 0 - 11 -> bom dia
entre 12 - 17 -> boa tarde
entre 18 - 23 -> boa noite

// if pode ser usado sozinho
// sempre que utilizo a palavra else, precisa ter um if (sempre inicia com if)
// pode ter varios else ifs na checagem (condição)
// só pode ter um else na checagem
// podemos usar condições sem else if, utilizando apenas if e else


const hora = 13;

if (hora >= 0 && hora <=11) {
  console.log(`Bom dia a hora atual é ${hora}:00`)
  
} else if (hora >= 12 && hora <=17){
  console.log(`Boa tarde a hora atual é ${hora}:00`)
}
else if (hora >= 18 && hora <=23) {
  console.log(`Boa noite a hora atual é ${hora}:00`)
}
else{
  console.log('Olá');
  console.log(`hora invalida ->  ${hora}`)
}





const hora = 13;

if (hora <= 12) {
  console.log(`Bom dia, hora atual é ${hora}:00`);

  console.log(1 + 1);
}




*/
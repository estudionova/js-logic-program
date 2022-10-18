
//const soma =  (x, y) => ( x + y);

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('X e Y precisam ser números');
  }
  return x + y;
}

try {
  console.log(soma(2, 2));
  console.log(soma('1', 2));
}
catch (err) {
  //console.log(err);
  console.log('Entre em contato com o suporte');
}




/*
try {

  console.log(naoExisto);

} catch (err) {
  console.log('ocorreu um erro desconhecido');

}
*/
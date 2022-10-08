

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log( a || b || c || d || e);




//console.log(0 || false || null || 'Reinaldo Junior' || true);

/*
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
*/









/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
false -> valor literal
0
'' "" ``
null / undefined
NaN


//console.log('Reinaldo' && undefined && 'Maria');
//console.log('Reinaldo Junior' && true && NaN);

function falaOi(){
  return 'Oi';
};

const vaiExecutar = 0;
console.log(vaiExecutar && falaOi());
*/
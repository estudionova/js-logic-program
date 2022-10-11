
const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);



/* 

if (pontuacaoUsuario >= 1000){
  console.log('Usuário VIP');
}
else{
  console.log('Usuário normal');
}



(condição)  ? 'valor para verdadeiro' : 'valor para falso'

*/





const h1 = document.querySelector('.container h1');
const data = new Date();


h1.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'full' });



/*

--------------------------------------------------------------------------------



const h1 = document.querySelector('.container h1');
const data = new Date();
const opcoes = { dateStyle: 'full', timeStyle: 'short'};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes);


--------------------------------------------------------------------------------


const h1 = document.querySelector('.container h1');
const data = new Date();

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}


function getDiaSemanaTexto(diaSemana) {
  const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
  return diasSemana[diaSemana];
}


function getNomeMes(numeroMes) {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return meses[numeroMes];
}


function criaDate(data) {
  const diaSemana = data.getDay();
  const mes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(mes);

  return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
}



h1.innerHTML = criaDate(data);



-------------------------------------------------------------------------


const h1 = document.querySelector('.container h1');
const data = new Date();

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}



function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0: diaSemanaTexto = 'Domingo'; return diaSemanaTexto;
    case 1: diaSemanaTexto = 'Segunda-feira'; return diaSemanaTexto;
    case 2: diaSemanaTexto = 'Terça-feira'; return diaSemanaTexto;
    case 3: diaSemanaTexto = 'Quarta-feira'; return diaSemanaTexto;
    case 4: diaSemanaTexto = 'Quinta-feira'; return diaSemanaTexto;
    case 5: diaSemanaTexto = 'Sexta-feira'; return diaSemanaTexto;
    case 6: diaSemanaTexto = 'Sabado'; return diaSemanaTexto;
    default: diaSemanaTexto = 'Não é um dia de semana'; return diaSemanaTexto;

  }
}


function getNomeMes(numeroMes) {
  let mes;

  switch (numeroMes) {
    case 0: mes = 'Janeiro'; return mes;
    case 1: mes = 'Fevereiro'; return mes;
    case 2: mes = 'Março'; return mes;
    case 3: mes = 'Abril'; return mes;
    case 4: mes = 'Maio'; return mes;
    case 5: mes = 'Junho'; return mes;
    case 6: mes = 'Julho'; return mes;
    case 7: mes = 'Agosto'; return mes;
    case 8: mes = 'Setembro'; return mes;
    case 9: mes = 'Outubro'; return mes;
    case 10: mes = 'Novembro'; return mes;
    case 11: mes = 'Dezembro'; return mes;
    default: mes = 'Não é um mês valido'; return mes;

  }
}


function criaDate(data) {
  const diaSemana = data.getDay();
  const mes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(mes);

  return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
}



h1.innerHTML = criaDate(data);

*/



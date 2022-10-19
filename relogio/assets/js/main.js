


function relogio() {
  const relogio = document.querySelector('.relogio');
  const btnIniciar = document.querySelector('.iniciar');
  const btnPausar = document.querySelector('.pausar');
  const btnZerar = document.querySelector('.zerar');

  let segundos = 0;
  let timer = 0;


  function criaHoraComSegundos(segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraComSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.classList.remove('pausado');
      segundos = 0;
      relogio.innerHTML = '00:00:00';
    };


    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    };

    if (el.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
    };

  });

}

relogio();



/*
btnIniciar.addEventListener('click', function (event) {
  relogio.classList.remove('pausado');
  clearInterval(timer);
  iniciaRelogio();

});
btnPausar.addEventListener('click', function (event) {
  relogio.classList.add('pausado');
  clearInterval(timer);

});

btnZerar.addEventListener('click', function (event) {
  clearInterval(timer);
  segundos = 0;
  relogio.innerHTML = '00:00:00';

});

*/
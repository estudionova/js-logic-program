const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'section', texto: 'Frase 3' },
  { tag: 'footer', texto: 'Frase 4' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

container.appendChild(div);

for (let i = 0; i < elementos.length; i++) {
  const elemento = document.createElement(elementos[i].tag);

  div.appendChild(elemento);
  elemento.innerHTML = elementos[i].texto;
  
}



/*
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  //console.log(elementos[i].tag);
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);

  //tagCriada.innerText = texto;

  let textoCriado = document.createTextNode(texto);

  tagCriada = appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);
*/
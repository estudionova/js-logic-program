//Escreva uma função que recebe 2 números e retorne o maior deles



const max = (x, y) => x > y ? x : y;
console.log(max(100, 20));



/*

const max = (x , y ) => { return x > y ? x : y;}

 - - -  - - - - - - - - - - - - - - - - - - - -


function max(x, y) { return x > y ? x : y; }

 - - - - - - - - - - - - - - - - - - - -  - - -

function max(x, y) {
  if (x > y) { return x; }
  return y;
}

//const maior = max(1, 2);
console.log(max(10, 2));

- - - - - - - - - - - -


function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

//const maior = max(1, 2);
console.log(max(10,2));

*/
// Desafio 1
function compareTrue(valor1,valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height)/2);
}

// Desafio 3
function splitSentence(string){
  let separador = string.split(' ')
  return separador;
}

// Desafio 4

function concatName(lista) {
  let ultimaP = lista[lista.length -1];
  let primeiraP = lista[0];
  let posicaoCerta = ultimaP +', '+primeiraP;
  return posicaoCerta;
}

// Desafio 5
function footballPoints(wins, ties) {
 let points = (wins*3) + (ties*1);
 return points;

}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let resultado = 0;
  for(let index =1; index < numeros.length; index +=1){
    if(numeros[index] > maiorNumero){
      maiorNumero = numeros[index];
    }
  }
  for ( let index =0; index < numeros.length; index +=1){
    if(numeros[index] === maiorNumero){
      resultado +=1;
     }
  }
  return resultado;
  }
  
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(Math.abs(cat1 - mouse) < cat2 - mouse){
  return 'cat1'
} else if (cat1 - mouse > cat2 - mouse){
  return 'cat2'
} else {
  return 'os gatos trombam e o rato foge'
}
}

// Desafio 8
function fizzBuzz(dividido) {
  const vazio = []
 for( let index = 0; index < dividido.length; index +=1)
  if (dividido[index] % 3 === 0 && dividido[index] % 5 === 0){
    vazio.push('fizzBuzz');
  } else if (dividido[index] % 5 === 0){
    vazio.push('buzz');
  } else if (dividido[index] % 3 === 0){
    vazio.push('fizz');
  } else {
    vazio.push('bug!')
  }
  return vazio;
}


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

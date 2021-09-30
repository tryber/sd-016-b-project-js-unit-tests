/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = (nome) => {
// uma constante que recebe um objeto com as duas propriedade deividamente setada 
// a propriedade name recebendo nome passado como argumento da função
// a propriedade feedbak recebendo o retorno da arrow function 'Eita pessoa boa' 
  const obj = {
    name: nome,
    feedback: () => 'Eita pessoa boa!',
   };
   // no final temos o objeto que será retornado no momento que a função cerateStudent 
   // for invocada
  return obj;
};

console.log(createStudent('tonis'));
module.exports = createStudent;

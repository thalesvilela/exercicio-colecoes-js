//criação de const com os dados do exercício
const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5]

//criação da função
function valoresUnicos(arr) {
    //criação do set por meio de uma constante
    const mySet = new Set(arr);

    //pegadinha: return com a função spread...
    //sem o spread, retornaria um set e não um array
    return[...mySet];
}

//console.log para printar resultado da função
console.log(valoresUnicos(meuArray));
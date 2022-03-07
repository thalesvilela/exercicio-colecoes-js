//criação da função recebendo um map
function getAdmins(map) {
    //criação da var let vazia para receber os adm
    let admins = [];
    //loop do for...of manipulando dois valores juntos
    for ([key, value] of map) {
        //condicional para procurar admin
        if (value === 'admin') {
            //se verdadeiro, .push para key 
            admins.push(key);
        }
    }
    //retorno para var let admins
    return admins;
}

//criação do map por meio de const
const usuarios = new Map();


//dados do exercício
usuarios.set('luiz','admin');
usuarios.set('stephany, admin');
usuarios.set('jorge', 'user');
usuarios.set('natalia', 'admin');

//console.log para printar resultado função
console.log(getAdmins(usuarios));
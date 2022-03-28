const  stringCodificada = "79501862390111166";
console.log("Entrada: ",stringCodificada);
const stringCodificadaReverse = stringCodificada.split('').reverse().join('');
const string = stringCodificadaReverse.toString();

//verifica existencia de valor ASCII 
function verificaValorASCII(obj,key){
    return obj.hasOwnProperty(key);
}

//objeto de valors ASCII
const valoresASCII = require('./valoresASCII.js')

const arrayCaracters = string.split('');
let string_final = '';

for(let i = 0; i < arrayCaracters.length; i+=2 ) {
    let key = arrayCaracters[i]+''+(arrayCaracters[i+1])

    if(verificaValorASCII(valoresASCII,key))
    {
        string_final += valoresASCII[key]
    }
    else
    {
        key = key + arrayCaracters[i+2]
        if(verificaValorASCII(valoresASCII,key))
        {
            string_final += valoresASCII[key]
            i++
        }
    }
}

console.log("Saida: ",string_final);
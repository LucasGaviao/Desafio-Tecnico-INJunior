function encontrarElementoUnico(lista){
    let xor = 0;
    for (let i = 0; i < lista.length; i++){
        xor ^= lista[i];
    }
    return xor;

}
const lista = [1,1,2,2,3,4,6,4,3,6,7,7,0,8,9,0,9,8,5]
console.log(encontrarElementoUnico(lista));
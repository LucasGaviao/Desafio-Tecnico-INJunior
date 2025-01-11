
function elementosEmOrdemCrescente(nums, n){
    if(n == 0) return 0;
    let cont = 0, i = 1;
    for(i; i < nums.length; i++){
        if(nums[i-1] < nums[i]) cont++;
    }
    return cont;
}

const n = parseInt(prompt("Qual o tamanho do array?"));
let lista = (prompt("Digite o array: ").split(" ")).map((num) => parseInt(num));
while (lista.length > n) lista.pop();

console.log(lista);
console.log(elementosEmOrdemCrescente(lista))
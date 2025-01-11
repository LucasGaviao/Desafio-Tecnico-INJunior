function fibonicci(n){
    if(n < 0) return -1;
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fibonicci(n-1) + fibonicci(n-2);
}

let n = parseInt(prompt("Digite o termo: "));
console.log(`O ${n}° termo da sequência é: `+ fibonicci(n));
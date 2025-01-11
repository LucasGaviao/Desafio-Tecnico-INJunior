function isPalindrome(frase){
    let inversa = '';
    let a = --frase.length;
    for(a; a >= 0; a--){
        inversa = inversa + frase[a];
    }
    return(inversa === frase);
}

let frase = prompt("Digite uma frase: ").toLowerCase().replaceAll(" ",'');
console.log(frase);
console.log(isPalindrome(frase));
function fatorial(a){
    while((!a) || (a == 0)) a = parseInt(prompt("Valor invalido! Insira um numero maior que 0."));
    let resp = 1;
    while (a > 1) resp *= a--;
    return resp;
}

let ans = 'S';
while (ans === 'S') {
    n = parseInt(prompt("Insira um valor pra calcular o fatorial: "));
    alert(`O fatorial de ${n} é ${fatorial(n)}`);
    ans = prompt("Deseja continuar: 'S'.\nDeseja para: 'N'.").toUpperCase();
    while ((ans != "S") && (ans != "N")) ans = prompt("Valor invalido!\nDeseja continuar: 'S'.\nDeseja para: 'N'.").toUpperCase();
}